function Experience() {
  const jobs = [
    {
      title: 'Data Analyst',
      type: 'Full-time',
      company: 'TemplateMela',
      location: 'Gujarat, India',
      dates: 'May 2023 – Jan 2024',
      points: [
        'Built Tableau dashboards for KPIs (revenue, growth, retention), presented insights to leadership, and improved reporting efficiency by 15%.',
        'Automated weekly sales reporting using SQL + Python ETL pipelines, improving forecasting accuracy by 25% and reducing manual effort.',
        'Analyzed product and customer behavior to identify buying patterns and improve targeting, contributing to a 12% increase in sales.',
        'Collected and integrated multi-source marketing/sales data using SQL; added data validation and quality checks to ensure accurate, consistent reporting.',
        'Created weekly KPI reports using Tableau visuals and SQL summaries, translating trends into clear actions for stakeholders.',
      ],
    },
  ]

  return (
    <section id="experience" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
    }}>

      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        Experience
      </h2>
      <div style={{
        width: '60px',
        height: '4px',
        background: '#60a5fa',
        borderRadius: '2px',
        marginTop: '12px',
        marginBottom: '40px',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '860px' }}>
        {jobs.map(function(job) {
          return (
            <div key={job.company} style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '28px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f1f5f9' }}>{job.title}</h3>
                <span style={{
                  fontSize: '12px',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  border: '1px solid #60a5fa',
                  color: '#60a5fa',
                }}>
                  {job.type}
                </span>
              </div>
              <p style={{ color: '#60a5fa', fontWeight: '500', marginTop: '6px' }}>{job.company}</p>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                {job.location} &nbsp;•&nbsp; {job.dates}
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {job.points.map(function(point) {
                  return (
                    <li key={point} style={{ display: 'flex', gap: '10px', color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>
                      <span style={{ color: '#60a5fa', marginTop: '3px', flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Experience