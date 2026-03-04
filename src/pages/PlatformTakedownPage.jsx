import { useEffect, useRef } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { platforms } from '../data/platformData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PlatformTakedownPage() {
    const { platformId } = useParams()
    const platform = platforms[platformId?.toLowerCase()]
    const timelineFillRef = useRef(null)

    useScrollReveal()

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal')
        const timelineItems = document.querySelectorAll('.timeline-item')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active')
            })
        }, { threshold: 0.15 })
        revealElements.forEach(el => observer.observe(el))
        timelineItems.forEach(el => observer.observe(el))

        const timeline = document.getElementById('timeline')
        const handleScroll = () => {
            if (timeline && timelineFillRef.current) {
                const rect = timeline.getBoundingClientRect()
                const wh = window.innerHeight
                if (rect.top < wh * 0.8 && rect.bottom > 0) {
                    const scrollDist = wh * 0.8 - rect.top
                    const pct = Math.max(0, Math.min(100, (scrollDist / rect.height) * 100))
                    timelineFillRef.current.style.height = `${pct}%`
                    timelineItems.forEach(item => {
                        item.classList.toggle('active', scrollDist > item.offsetTop)
                    })
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.dispatchEvent(new Event('scroll'))

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [platformId])

    if (!platform) {
        return <Navigate to="/" replace />
    }

    // Dynamic SEO Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": platform.title,
        "provider": {
            "@type": "Organization",
            "name": "KOHZA",
            "url": "https://kohza.org"
        },
        "description": platform.description
    }

    return (
        <div className="platform-page" style={{
            '--page-accent': platform.accentColor || 'var(--red, #ff3333)',
            '--page-glow': platform.accentGlow || 'rgba(255, 51, 51, 0.5)'
        }}>
            <Helmet>
                <title>{platform.title} | KOHZA</title>
                <meta name="description" content={platform.description} />
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>

            <style>{`
                .platform-hero { position:relative; min-height:85vh; display:flex; align-items:center; justify-content:center; overflow:hidden; padding-top:80px; }
                .platform-hero-bg { position:absolute; inset:-5%; background-image:url('${platform.heroBg}'); background-size:cover; background-position:center 30%; z-index:0; filter:brightness(0.4) contrast(1.1); }
                .platform-hero-bg::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(5,5,8,0.2) 0%, rgba(5,5,8,0.8) 50%, var(--bg-body, #060608) 100%); }
                .platform-hero-content { position:relative; z-index:2; text-align:center; max-width:900px; padding:0 24px; display:flex; flex-direction:column; align-items:center; }
                .breadcrumbs { margin-bottom: 2rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; letter-spacing: 0.1em; color: var(--text-tertiary); text-transform: uppercase; animation: fade-in-up 1s ease-out forwards; }
                .breadcrumbs a { color: var(--text-secondary); text-decoration: none; transition: color 0.3s; }
                .breadcrumbs a:hover { color: #fff; }
                .breadcrumbs span { margin: 0 8px; }
                .platform-headline { font-size:clamp(3rem,6vw,5rem); font-weight:700; line-height:1; margin-bottom:1.5rem; color:#fff; animation: fade-in-up 1s ease-out 0.2s both; }
                .platform-subheadline { font-size:clamp(1.1rem,2vw,1.35rem); line-height:1.6; color:var(--text-secondary); max-width:700px; margin-bottom:3rem; animation: fade-in-up 1s ease-out 0.4s both; font-weight:300; }
                
                .section-padding { padding: 120px 0; position: relative; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
                .section-eyebrow { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; color:var(--page-accent); text-transform:uppercase; margin-bottom:1.5rem; display:block; }
                .section-title { font-size:clamp(2.5rem,4vw,3.5rem); font-weight:500; line-height:1.1; margin-bottom:3rem; color:#fff; }
                
                .platform-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
                @media (max-width: 768px) { .platform-grid { grid-template-columns: 1fr; gap: 2rem; } }
                
                .threat-list, .solution-list { list-style: none; padding: 0; margin: 0; }
                .threat-list li, .solution-list li { padding-left: 1.5rem; position: relative; margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.6; color: var(--text-secondary); }
                .threat-list li::before { content: '✕'; position: absolute; left: 0; color: #ff3333; font-family: monospace; font-weight: bold; }
                .solution-list li::before { content: '✓'; position: absolute; left: 0; color: #00AFF0; font-family: monospace; font-weight: bold; }
                
                .stats-panel { background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle, rgba(255,255,255,0.1)); border-radius: 8px; padding: 2.5rem; display: flex; gap: 4rem; margin-top: 3rem; animation: fade-in-up 1s ease-out 0.6s both; }
                .stat-item { display: flex; flex-direction: column; }
                .stat-value { font-size: 3rem; color: #fff; font-family: 'Space Grotesk', sans-serif; font-weight: 500; line-height: 1; margin-bottom: 0.5rem; }
                .stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-tertiary); font-family: 'IBM Plex Mono', monospace; }

                .timeline-container { max-width:800px; margin:0 auto; position:relative; padding:4rem 0; }
                .timeline-line-bg { position:absolute; top:0; bottom:0; left:24px; width:1px; background:rgba(255,255,255,0.1); }
                .timeline-line-fill { position:absolute; top:0; left:24px; width:1px; background:var(--page-accent); height:0%; transition:height 0.1s ease-out; box-shadow:0 0 15px var(--page-glow); }
                .timeline-item { position:relative; padding-left:80px; margin-bottom:4rem; }
                .timeline-node { position:absolute; left:17px; top:0; width:15px; height:15px; border-radius:50%; background:#000; border:1px solid rgba(255,255,255,0.2); transition:all 0.4s ease; display:flex; align-items:center; justify-content:center; }
                .timeline-item.active .timeline-node { background:var(--page-accent); border-color:var(--page-accent); }
                
                .platform-page .btn-red { background: var(--page-accent) !important; border-color: var(--page-accent) !important; box-shadow: 0 0 15px var(--page-glow) !important; color: #fff; }
                .platform-page .btn-red:hover { background: transparent !important; color: var(--page-accent) !important; box-shadow: 0 0 20px var(--page-glow) !important; }
                .timeline-item h3 { font-size:1.5rem; font-weight:500; margin-bottom:1rem; color:#fff; }
                .timeline-item p { font-size:1.05rem; line-height:1.7; color:var(--text-secondary); }
                
                .cta-block { text-align: center; padding: 100px 24px; background: #000; border-top: 1px solid rgba(255,255,255,0.1); }
                .cta-block h2 { font-size: 3rem; color: #fff; margin-bottom: 1rem; }
                .cta-block p { color: var(--text-secondary); max-width: 600px; margin: 0 auto 3rem; font-size: 1.1rem; }
                
                .reveal { opacity: 0; transform: translateY(30px); transition: all 1s ease; }
                .reveal.active { opacity: 1; transform: translateY(0); }
                @keyframes fade-in-up { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
            `}</style>

            <div className="scanlines" aria-hidden="true" />

            <h1 className="sr-only">{platform.title}</h1>

            <header className="platform-hero">
                <div className="platform-hero-bg" />
                <div className="platform-hero-content">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link> <span>/</span> {platform.name} Takedowns
                    </div>

                    <h2 className="platform-headline">{platform.title}</h2>
                    <p className="platform-subheadline">{platform.description}</p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red btn-large">Start Takedown</a>
                        <a href="#details" className="btn btn-outline btn-large">View Process</a>
                    </div>

                    <div className="stats-panel">
                        <div className="stat-item">
                            <span className="stat-value">{platform.stats.time}</span>
                            <span className="stat-label">Avg Removal Time</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{platform.stats.rate}</span>
                            <span className="stat-label">Takedown Success</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section-padding" id="details" style={{ background: 'var(--bg-body, #060608)' }}>
                <div className="container">
                    <div className="platform-grid">
                        <div className="reveal">
                            <span className="section-eyebrow">The Threat</span>
                            <h2 className="section-title">Why standard DMCA fails on {platform.name}.</h2>
                            <ul className="threat-list">
                                {platform.threats.map((threat, i) => (
                                    <li key={i}>{threat}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="reveal" style={{ transitionDelay: '200ms' }}>
                            <span className="section-eyebrow" style={{ color: '#00AFF0' }}>The Solution</span>
                            <h2 className="section-title">How KOHZA completely neutralizes it.</h2>
                            <ul className="solution-list">
                                {platform.solutions.map((solution, i) => (
                                    <li key={i}>{solution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: '#0a0b10' }}>
                <div className="container">
                    <div className="reveal text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Takedown Protocol</span>
                        <h2 className="section-title text-center">Immediate Action Sequence.</h2>
                    </div>

                    <div className="timeline-container" id="timeline">
                        <div className="timeline-line-bg" />
                        <div className="timeline-line-fill" ref={timelineFillRef} />

                        <div className="timeline-item reveal">
                            <div className="timeline-node" />
                            <h3>1. Asset Fingerprinting & Identification</h3>
                            <p>We hash your intellectual property and scan {platform.name} architecture specifically looking for matching content, bypass links, and hidden subgroups.</p>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-node" />
                            <h3>2. Threat Escalation</h3>
                            <p>Unlike automated DMCA bots, we use direct escalations to platform trust & safety teams to ensure priority handling for {platform.name} leaks.</p>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-node" />
                            <h3>3. Source Neutralization</h3>
                            <p>We don't just take down the post; we target the source cyberlocker or hosting provider holding the actual files, completely destroying the distribution chain.</p>
                        </div>
                        <div className="timeline-item reveal">
                            <div className="timeline-node" />
                            <h3>4. Permanent Suppression</h3>
                            <p>Once removed, the content remains fingerprinted in our database. Future uploads to {platform.name} or affiliated networks trigger instant automated takedowns.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-block">
                <div className="container reveal">
                    <h2>Ready to end the leaks on {platform.name}?</h2>
                    <p>Every minute your content remains active hurts your revenue. Deploy KOHZA to permanently scrub your assets from the internet.</p>
                    <a href="mailto:takedowns@kohza.org" className="btn btn-outline btn-large" style={{ marginRight: '1rem' }}>takedowns@kohza.org</a>
                    <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red btn-large">Initiate Assessment</a>
                </div>
            </section>
        </div>
    )
}
