import { legalPages } from '../data/legalPages.js';

export default function LegalPage({ pageId }) {
  const page = legalPages[pageId] ?? legalPages.impressum;

  return (
    <main className="paper-page text-page">
      <p className="eyebrow">RECHTLICHES</p>
      <h1>{page.title}</h1>
      <div className="text-content">
        {page.sections.map((section) => (
          <section className="text-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
