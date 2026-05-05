import { useState, useEffect } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(function() {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return function() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#60a5fa',
        color: '#0f172a',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
      }}
    >
      ↑
    </button>
  )
}

export default ScrollToTop