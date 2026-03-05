import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <span className="footer-logo mono">[KOHZA]</span>
                    <span className="footer-meta mono">DIGITAL ENFORCEMENT BUREAU — EST. 2024</span>
                </div>
                <div className="footer-right">
                    <Link to="/promise" className="mono" style={{ color: 'var(--text-primary)' }}>Our Promise</Link>
                    <a href="#" className="mono">Privacy</a>
                    <a href="#" className="mono">Terms</a>
                </div>
            </div>
        </footer>
    )
}
