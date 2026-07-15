export default function KnowledgeFaqCard({ faq }) {
  return (
    <details className="knowledge-faq-card">
      <summary>
        <span>{faq.question}</span>
        <span className="knowledge-chevron" aria-hidden="true" />
      </summary>
      <p>{faq.answer}</p>
    </details>
  );
}
