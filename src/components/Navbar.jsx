import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const toggleMenu = () => setMenuOpen(prev => !prev)

    const handleAnchorClick = (e, hash) => {
        e.preventDefault()
        setMenuOpen(false)
        if (location.pathname === '/') {
            const el = document.querySelector(hash)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            navigate('/' + hash)
        }
    }

    return (
        <>
            <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-logo">
                        <span className="logo-bracket">[</span>KOHZA<span className="logo-bracket">]</span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/promise">Our Promise</Link>
                        <a href="#testimonial" onClick={(e) => handleAnchorClick(e, '#testimonial')}>Cases</a>
                        <a href="#protocol" onClick={(e) => handleAnchorClick(e, '#protocol')}>Protocol</a>
                        <Link to="/ofm-creators">OF Creator</Link>
                        <Link to="/info-products">Course Creators</Link>
                    </div>
                    <div className="nav-action">
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red">
                            Fill The Form
                        </a>
                    </div>
                    <button
                        className={`nav-toggle${menuOpen ? ' active' : ''}`}
                        id="nav-toggle"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                    >
                        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
                        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(0, -2px)' : '' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu${menuOpen ? ' active' : ''}`} id="mobile-menu" style={{ opacity: menuOpen ? 1 : 0 }}>
                <Link to="/promise" onClick={() => setMenuOpen(false)}>Our Promise</Link>
                <a href="#testimonial" onClick={(e) => handleAnchorClick(e, '#testimonial')}>Cases</a>
                <a href="#protocol" onClick={(e) => handleAnchorClick(e, '#protocol')}>Protocol</a>
                <Link to="/ofm-creators" onClick={() => setMenuOpen(false)}>OF Creator</Link>
                <Link to="/info-products" onClick={() => setMenuOpen(false)}>Course Creators</Link>
                <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red">
                    Fill The Form
                </a>
            </div>
        </>
    )
}
