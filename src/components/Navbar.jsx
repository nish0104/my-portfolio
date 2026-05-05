function Navbar() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0d1526',
      border: '1px solid #1e293b',
      borderRadius: '999px',
      padding: '10px 24px',
      display: 'flex',
      gap: '8px',
      zIndex: 1000,
    }}>
      {navLinks.map(function(link) {
        return (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontSize: '14px',
              padding: '4px 12px',
              borderRadius: '999px',
            }}
          >
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
