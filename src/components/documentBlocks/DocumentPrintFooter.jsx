const companyFields = ['companyName', 'companyStreet', 'companyCity', 'companyExtra'];
const bankFields = ['bankName', 'iban', 'bic', 'bankExtra'];

function FooterColumn({ fields, footerLines }) {
  return (
    <section>
      {fields
        .map((field) => footerLines[field])
        .filter(Boolean)
        .map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}
    </section>
  );
}

export default function DocumentPrintFooter({ footerLines, visibleMiddleFields }) {
  return (
    <footer className="invoice-print-footer">
      <FooterColumn fields={companyFields} footerLines={footerLines} />
      <FooterColumn fields={visibleMiddleFields.map(({ field }) => field)} footerLines={footerLines} />
      <FooterColumn fields={bankFields} footerLines={footerLines} />
    </footer>
  );
}
