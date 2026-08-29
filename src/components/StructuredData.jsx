import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStructuredData } from '../data/structuredData.js';

const SCRIPT_ID = 'belege24-structured-data';

function upsertStructuredData(data) {
  let script = document.head.querySelector(`#${SCRIPT_ID}`);

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function StructuredData() {
  const { pathname } = useLocation();

  useEffect(() => {
    upsertStructuredData(getStructuredData(pathname));
  }, [pathname]);

  return null;
}
