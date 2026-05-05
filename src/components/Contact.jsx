function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px',
      textAlign: 'center',
    }}>

      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        Get in <span style={{ color: '#60a5fa' }}>Touch</span>
      </h2>
      <div style={{
        width: '60px',
        height: '4px',
        background: '#60a5fa',
        borderRadius: '2px',
        marginTop: '12px',
        marginBottom: '16px',
      }} />
      <p style={{ color: '#94a3b8', fontSize: '16px', marginBottom: '40px' }}>
        Let's connect and explore how we can work together.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        width: '100%',
        maxWidth: '700px',
        marginBottom: '32px',
      }}>

        <div style={{
          background: '#1e293b',
          border: '1.5px solid #60a5fa',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'left',
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>Email</p>
          <p style={{ fontSize: '15px', color: '#f1f5f9', fontWeight: '500' }}>vaghani.n@northeastern.edu</p>
        </div>

        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'left',
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>Location</p>
          <p style={{ fontSize: '15px', color: '#f1f5f9', fontWeight: '500' }}>Boston, MA</p>
        </div>

        <a href="https://linkedin.com/in/nishtha0104" target="_blank" style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'border-color 0.2s',
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>LinkedIn</p>
          <p style={{ fontSize: '15px', color: '#60a5fa', fontWeight: '500' }}>Connect on LinkedIn</p>
        </a>

        <a href="https://github.com/nish0104" target="_blank" style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'left',
          textDecoration: 'none',
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>GitHub</p>
          <p style={{ fontSize: '15px', color: '#60a5fa', fontWeight: '500' }}>View repositories</p>
        </a>

      </div>

      <a href="mailto:vaghani.n@northeastern.edu" style={{
        padding: '14px 36px',
        background: '#60a5fa',
        color: '#0f172a',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '600',
      }}>
        Send Me an Email
      </a>

      <p style={{ marginTop: '60px', fontSize: '13px', color: '#475569' }}>
        © 2026 Nishtha Vaghani. Built with React + Vite.
      </p>

    </section>
  )
}

export default Contact