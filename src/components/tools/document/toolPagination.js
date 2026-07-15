const maxTextSplitIterations = 200;
const maxPages = 120;

export function takeMeasuredText(text, maxHeight, measureHeight) {
  const source = String(text || '').trim();

  if (!source) {
    return { fit: '', rest: '' };
  }

  if (maxHeight <= 0) {
    return { fit: '', rest: source };
  }

  if (measureHeight(source) <= maxHeight) {
    return { fit: source, rest: '' };
  }

  const paragraphResult = takeMeasuredUnit(source, maxHeight, measureHeight, splitParagraphs);

  if (paragraphResult.fit) {
    return paragraphResult;
  }

  const sentenceResult = takeMeasuredUnit(source, maxHeight, measureHeight, splitSentences);

  if (sentenceResult.fit) {
    return sentenceResult;
  }

  const wordResult = takeMeasuredUnit(source, maxHeight, measureHeight, splitWords);

  if (wordResult.fit) {
    return wordResult;
  }

  const [firstWord = source] = splitWords(source);

  return {
    fit: firstWord.trim(),
    rest: source.slice(firstWord.length).trim(),
  };
}

export function paginateMeasuredItems({
  items,
  firstPageCapacity,
  followPageCapacity,
  getItemHeight,
  getItemGap = () => 0,
  splitTextItem,
}) {
  const pages = [{ items: [], used: 0 }];

  function getCurrentPage() {
    return pages[pages.length - 1];
  }

  function getCapacity() {
    return pages.length === 1 ? firstPageCapacity : followPageCapacity;
  }

  function addPage() {
    if (pages.length >= maxPages) {
      return getCurrentPage();
    }

    const page = { items: [], used: 0 };
    pages.push(page);
    return page;
  }

  function appendItem(item, itemHeight = getItemHeight(item)) {
    let page = getCurrentPage();
    let gap = getItemGap(page, item);
    let addition = itemHeight + gap;

    if (page.items.length > 0 && page.used + addition > getCapacity()) {
      page = addPage();
      gap = getItemGap(page, item);
      addition = itemHeight + gap;
    }

    page.items.push(item);
    page.used += addition;
  }

  items.forEach((item) => {
    if (item.type !== 'text') {
      appendItem(item);
      return;
    }

    let rest = item.text;
    let iterations = 0;

    while (String(rest || '').trim() && iterations < maxTextSplitIterations) {
      iterations += 1;
      const currentRest = String(rest || '').trim();
      let page = getCurrentPage();
      let gap = getItemGap(page, item);
      let available = getCapacity() - page.used - gap;

      if (available <= 0 && page.items.length > 0) {
        page = addPage();
        gap = getItemGap(page, item);
        available = getCapacity() - page.used - gap;
      }

      const chunk = splitTextItem({ ...item, text: currentRest }, available);

      if (!chunk.fit && page.items.length > 0) {
        if (pages.length >= maxPages) {
          break;
        }

        addPage();
        continue;
      }

      const text = chunk.fit || currentRest;
      const measuredItem = { ...item, text };
      appendItem(measuredItem, getItemHeight(measuredItem));
      const nextRest = chunk.fit ? String(chunk.rest || '').trim() : '';

      if (!chunk.fit || nextRest === currentRest || nextRest.length >= currentRest.length) {
        rest = '';
        break;
      }

      rest = nextRest;
    }

    if (String(rest || '').trim()) {
      appendItem({ ...item, text: rest });
    }
  });

  return pages.map((page, index) => ({
    ...page,
    pageNumber: index + 1,
  }));
}

function takeMeasuredUnit(text, maxHeight, measureHeight, splitUnits) {
  const units = splitUnits(text);

  if (units.length === 0) {
    return { fit: '', rest: text };
  }

  let low = 0;
  let high = units.length;
  let best = 0;
  let iterations = 0;

  while (low <= high && iterations < maxTextSplitIterations) {
    iterations += 1;
    const mid = Math.floor((low + high) / 2);
    const candidate = units.slice(0, mid).join('').trim();

    if (!candidate) {
      low = mid + 1;
      continue;
    }

    if (measureHeight(candidate) <= maxHeight) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (best === 0) {
    return { fit: '', rest: text };
  }

  return {
    fit: units.slice(0, best).join('').trim(),
    rest: units.slice(best).join('').trim(),
  };
}

function splitParagraphs(text) {
  return text
    .split(/(\n\s*\n+)/)
    .reduce((chunks, part, index, parts) => {
      if (!part) {
        return chunks;
      }

      if (/^\n\s*\n+$/.test(part)) {
        if (chunks.length > 0) {
          chunks[chunks.length - 1] += part;
        }
        return chunks;
      }

      const next = parts[index + 1];
      chunks.push(next && /^\n\s*\n+$/.test(next) ? part : part);
      return chunks;
    }, []);
}

function splitSentences(text) {
  const parts = text.match(/[^.!?]+[.!?]+[\])}"']*\s*|[^.!?]+$/g);
  return parts || splitWords(text);
}

function splitWords(text) {
  const parts = text.match(/\S+\s*/g);
  return parts || [text];
}
