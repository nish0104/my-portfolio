function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
    }}>

      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        About <span style={{ color: '#60a5fa' }}>Me</span>
      </h2>
      <div style={{
        width: '60px',
        height: '4px',
        background: '#60a5fa',
        borderRadius: '2px',
        marginTop: '12px',
        marginBottom: '32px',
      }} />

      <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: '1.8', maxWidth: '780px', marginBottom: '20px' }}>
        I'm a <span style={{ color: '#60a5fa', fontWeight: '500' }}>data analytics professional</span> and{' '}
        <span style={{ color: '#60a5fa', fontWeight: '500' }}>aspiring analytics engineer</span> with
        hands-on experience building SQL/Python ETL pipelines, data quality frameworks, and KPI reporting systems.
      </p>

      <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: '1.8', maxWidth: '780px', marginBottom: '20px' }}>
        Currently pursuing my Master of Professional Studies in Analytics at Northeastern University (GPA 3.93),
        graduated May 2026. Through my professional experience and projects, I've worked with everything from
        Tableau dashboards and regression models to large-scale Spark pipelines processing hundreds of thousands
        of records.
      </p>

      <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: '1.8', maxWidth: '780px' }}>
        I'm passionate about data governance, analytics engineering, and building solutions that turn raw data
        into reliable, actionable insights. When I'm not working with data, you'll find me exploring new tools
        in the analytics ecosystem and working on personal projects.
      </p>

    </section>
  )
}

export default About