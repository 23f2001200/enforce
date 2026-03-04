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

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

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
            <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav" suppressHydrationWarning>
                <div className="nav-inner">
                    <Link to="/" className="nav-logo">
                        <span className="logo-bracket">[</span>KOHZA<span className="logo-bracket">]</span>
                    </Link>
                    <div className="nav-links">
                        <div className="nav-dropdown">
                            <span style={{ cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Who We Help ▾</span>
                            <div className="nav-dropdown-content">
                                <div className="nav-dropdown-group">
                                    <div className="nav-dropdown-header">By Audience</div>
                                    <Link to="/ofm-creators">OFM Creators</Link>
                                    <Link to="/info-products">Course Creators</Link>
                                </div>
                                <div className="nav-dropdown-group">
                                    <div className="nav-dropdown-header">By Platform</div>
                                    <Link to="/remove-leaks/onlyfans">OnlyFans</Link>
                                    <Link to="/remove-leaks/telegram">Telegram</Link>
                                    <Link to="/remove-leaks/reddit">Reddit</Link>
                                    <Link to="/remove-leaks/instagram">Instagram</Link>
                                    <Link to="/remove-leaks/discord">Discord</Link>
                                    <Link to="/remove-leaks/mega">MEGA</Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/promise">Our Promise</Link>
                        <a href="#testimonial" onClick={(e) => handleAnchorClick(e, '#testimonial')}>Cases</a>
                        <a href="#protocol" onClick={(e) => handleAnchorClick(e, '#protocol')}>Protocol</a>
                        <a href="https://blog.kohza.org" target="_blank" rel="noreferrer">Blog</a>
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
                        onTouchStart={(e) => {
                            // Only trigger once (prevent onClick from firing immediately after)
                            e.preventDefault();
                            toggleMenu();
                        }}
                    >
                        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
                        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(0, -2px)' : '' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu${menuOpen ? ' active' : ''}`} id="mobile-menu" style={{ opacity: menuOpen ? 1 : 0 }} suppressHydrationWarning>
                <Link to="/promise" onClick={() => setMenuOpen(false)}>Our Promise</Link>
                <a href="#testimonial" onClick={(e) => handleAnchorClick(e, '#testimonial')}>Cases</a>
                <a href="#protocol" onClick={(e) => handleAnchorClick(e, '#protocol')}>Protocol</a>
                <a href="https://blog.kohza.org" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Blog</a>

                <div className="mobile-dropdown-header">By Audience</div>
                <div className="mobile-dropdown-group">
                    <Link to="/ofm-creators" onClick={() => setMenuOpen(false)}>OFM Creators</Link>
                    <Link to="/info-products" onClick={() => setMenuOpen(false)}>Course Creators</Link>
                </div>

                <div className="mobile-dropdown-header">By Platform</div>
                <div className="mobile-dropdown-group">
                    <Link to="/remove-leaks/onlyfans" onClick={() => setMenuOpen(false)}>OnlyFans</Link>
                    <Link to="/remove-leaks/telegram" onClick={() => setMenuOpen(false)}>Telegram</Link>
                    <Link to="/remove-leaks/reddit" onClick={() => setMenuOpen(false)}>Reddit</Link>
                    <Link to="/remove-leaks/instagram" onClick={() => setMenuOpen(false)}>Instagram</Link>
                    <Link to="/remove-leaks/discord" onClick={() => setMenuOpen(false)}>Discord</Link>
                    <Link to="/remove-leaks/mega" onClick={() => setMenuOpen(false)}>MEGA</Link>
                </div>

                <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red" style={{ marginTop: '20px' }}>
                    Fill The Form
                </a>
            </div>
        </>
    )
}
