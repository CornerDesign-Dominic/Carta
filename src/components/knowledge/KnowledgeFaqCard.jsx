export default function KnowledgeFaqCard({ faq }) {
  return (
    <details className="knowledge-faq-card">
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>
  );
}
