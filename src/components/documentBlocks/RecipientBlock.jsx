export default function RecipientBlock({ onRecipientChange, onSenderLineChange, recipient, senderLine }) {
  return (
    <div className="invoice-recipient-fields">
      <input
        className="invoice-sender-line"
        aria-label="Absenderzeile über Empfängeradresse"
        value={senderLine}
        onChange={(event) => onSenderLineChange(event.target.value)}
      />
      <input
        aria-label="Empfänger Firma"
        value={recipient.company}
        onChange={(event) => onRecipientChange('company', event.target.value)}
      />
      <input
        aria-label="Empfänger Zusatz oder z. Hd."
        value={recipient.attention}
        onChange={(event) => onRecipientChange('attention', event.target.value)}
      />
      <input
        aria-label="Ansprechpartner oder Name"
        value={recipient.name}
        onChange={(event) => onRecipientChange('name', event.target.value)}
      />
      <input
        aria-label="Empfänger Straße und Hausnummer"
        value={recipient.street}
        onChange={(event) => onRecipientChange('street', event.target.value)}
      />
      <input
        aria-label="Empfänger PLZ und Stadt"
        value={recipient.cityLine}
        onChange={(event) => onRecipientChange('cityLine', event.target.value)}
      />
    </div>
  );
}
