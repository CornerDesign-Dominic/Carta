export default function GlossaryTerm({ children, id, onSelect }) {
  return (
    <button
      className="glossary-term"
      type="button"
      onClick={() => onSelect?.(id)}
    >
      {children}
    </button>
  );
}
