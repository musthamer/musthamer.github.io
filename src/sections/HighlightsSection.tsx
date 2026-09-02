const facts = [
  { label: 'Verifizierte Projekte', value: '5' },
  { label: 'Public Repositories', value: '6' },
  { label: 'Technologie-Bereiche', value: '8+' },
  { label: 'Fokus', value: 'Backend + Systeme' },
]

export function HighlightsSection() {
  return (
    <section className="highlights-wrap" aria-label="Portfolio Kennzahlen">
      <div className="container highlights-grid">
        {facts.map((fact) => (
          <article key={fact.label} className="fact-card">
            <p>{fact.label}</p>
            <strong>{fact.value}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}
