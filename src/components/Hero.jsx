import profilePhoto from '../assets/profile.jpg'
function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 80px',
    }}>

      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '64px', fontWeight: '700', lineHeight: 1.1, color: '#f1f5f9' }}>
          NISHTHABEN<br />
          <span style={{ color: '#60a5fa' }}>VAGHANI</span>
        </h1>

        <p style={{ marginTop: '20px', fontSize: '18px', color: '#94a3b8' }}>
          Data-driven analytics professional building reliable, scalable data solutions.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
          {['Python', 'SQL', 'Tableau', 'Power BI', 'Apache Spark', 'ETL', 'R'].map(function(skill) {
            return (
              <span key={skill} style={{
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid #334155',
                fontSize: '14px',
                color: '#94a3b8',
              }}>
                {skill}
              </span>
            )
          })}
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
          <a href="#contact" style={{
            padding: '12px 24px',
            background: '#60a5fa',
            color: '#0f172a',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '600',
          }}>
            Get in Touch
          </a>
          <a href="#projects" style={{
            padding: '12px 24px',
            background: 'transparent',
            color: '#e2e8f0',
            border: '1px solid #334155',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
          }}>
            View Projects
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <a href="https://github.com/nish0104" target="_blank" style={{ color: '#60a5fa', fontSize: '14px' }}>GitHub</a>
          <a href="https://linkedin.com/in/nishtha0104" target="_blank" style={{ color: '#60a5fa', fontSize: '14px' }}>LinkedIn</a>
          <a href="mailto:vaghani.n@northeastern.edu" style={{ color: '#60a5fa', fontSize: '14px' }}>Email</a>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
            src={profilePhoto}
            alt="Nishtha Vaghani"
            style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '4px solid #60a5fa',
            objectFit: 'cover',
            objectPosition: 'center top',
            }}
        />
      </div>

    </section>
  )
}

export default Hero