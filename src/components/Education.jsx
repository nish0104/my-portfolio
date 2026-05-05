function Education() {
  const schools = [
    {
      degree: 'Master of Professional Studies — Analytics',
      school: 'Northeastern University',
      location: 'Boston, MA',
      dates: 'Sept 2024 – May 2026',
      gpa: '3.93 / 4.0',
      points: [
        'Specialization in analytics engineering, data governance, and scalable data solutions.',
        'Advanced coursework in machine learning, statistics, and database systems.',
      ],
    },
    {
      degree: 'Bachelor of Science — Computer Science',
      school: 'Veer Narmad South Gujarat University',
      location: 'Gujarat, India',
      dates: 'Jun 2020 – Apr 2023',
      gpa: '3.07 / 4.0',
      points: [
        'Strong foundation in programming, data structures, and algorithms.',
        'Coursework in databases, software engineering, and computer networks.',
      ],
    },
  ]

  return (
    <section id="education" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px',
    }}>

      <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#f1f5f9' }}>
        Education
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
        {schools.map(function(s) {
          return (
            <div key={s.school} style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '28px',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#f1f5f9' }}>{s.degree}</h3>
              <p style={{ color: '#60a5fa', fontWeight: '500', marginTop: '6px' }}>{s.school}</p>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                {s.location} &nbsp;•&nbsp; {s.dates} &nbsp;•&nbsp; GPA: {s.gpa}
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {s.points.map(function(point) {
                  return (
                    <li key={point} style={{ display: 'flex', gap: '10px', color: '#94a3b8', fontSize: '15px' }}>
                      <span style={{ color: '#60a5fa', marginTop: '2px' }}>▸</span>
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

export default Education