import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { platforms } from '../data/platformData'

export default function PlatformTakedownPage() {
    const { platformId } = useParams()
    const platform = platforms[platformId?.toLowerCase()]
    const heroRef = useRef(null)
    const timelineRef = useRef(null)
    const timelineFillRef = useRef(null)
    const [lightbox, setLightbox] = useState(null)

    const closeLightbox = () => setLightbox(null)

    // Parallax hero
    useEffect(() => {
        const onScroll = () => {
            const bg = heroRef.current?.querySelector('.ptd-hero-bg')
            if (bg) bg.style.transform = `translateY(${window.scrollY * 0.25}px)`
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when lightbox open
    useEffect(() => {
        if (lightbox !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [lightbox])

    // Keyboard nav for lightbox
    useEffect(() => {
        if (lightbox === null) return
        const len = platform?.evidence?.length ?? 0
        const onKey = (e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') setLightbox(i => Math.min(len - 1, i + 1))
            if (e.key === 'ArrowLeft') setLightbox(i => Math.max(0, i - 1))
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightbox, platform])

    // Scroll reveal
    useEffect(() => {
        const els = document.querySelectorAll('.ptd-reveal')
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('ptd-visible') })
        }, { threshold: 0.1 })
        els.forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [platformId])

    // Timeline fill
    useEffect(() => {
        const onScroll = () => {
            const tl = timelineRef.current; const fill = timelineFillRef.current
            if (!tl || !fill) return
            const rect = tl.getBoundingClientRect(); const wh = window.innerHeight
            if (rect.top < wh && rect.bottom > 0) {
                const pct = Math.max(0, Math.min(90, ((wh - rect.top) / rect.height) * 100))
                fill.style.height = pct + '%'
            }
            tl.querySelectorAll('.ptd-tl-item').forEach(item => {
                item.classList.toggle('ptd-tl-active', item.getBoundingClientRect().top < wh * 0.72)
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [platformId])

    if (!platform) return <Navigate to="/" replace />

    const accent = platform.accentColor || '#D4A853'
    const glow = platform.accentGlow || 'rgba(212,168,83,0.3)'

    const schema = {
        "@context": "https://schema.org", "@type": "Service",
        "name": platform.title,
        "provider": { "@type": "Organization", "name": "KOHZA", "url": "https://kohza.org" },
        "description": platform.description, "areaServed": "Worldwide"
    }

    const protoSteps = [
        { n: '01', h: 'Asset Fingerprinting', b: `We hash your intellectual property and scan ${platform.name} infrastructure for matching content and hidden distribution nodes.` },
        { n: '02', h: 'Threat Escalation', b: `Direct escalations to platform trust & safety — not the public DMCA form. Your case gets immediate human review.` },
        { n: '03', h: 'Source Neutralisation', b: `We trace back to the actual file host and force a hard delete at the infrastructure level, not just the surface link.` },
        { n: '04', h: 'Permanent Suppression', b: `Content stays fingerprinted in our database. Future re-uploads trigger instant automated strikes across the entire network.` },
    ]

    const tlSteps = [
        { tag: 'T+0H', h: 'Case Intake & Asset Briefing', b: 'You submit the leak details. We verify ownership and initiate the fingerprinting sweep within minutes.' },
        { tag: 'T+2H', h: 'Platform Infiltration', b: `We access ${platform.name}'s internal escalation routes — not the public form. Your case gets immediate human review.` },
        { tag: 'T+8H', h: 'Hosting Chain Destruction', b: 'The link is the surface. We trace the actual file host and force a hard delete at the infrastructure level.' },
        { tag: 'T+24H', h: 'Suppression & Re-Upload Guard', b: 'Cryptographic hash of your content is logged. Any re-upload in our monitored network triggers an instant automated strike.' },
    ]

    return (
        <div className="ptd" style={{ '--A': accent, '--G': glow }}>
            <Helmet>
                <title>{platform.title} | KOHZA</title>
                <meta name="description" content={platform.description} />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

                /* ─── ROOT ─── */
                .ptd { background: #16140F; color: #E8DCC8; font-family: 'Plus Jakarta Sans', sans-serif; min-height: 100vh; --A: #D4A853; --G: rgba(212,168,83,0.3); }

                /* ─── HERO ─── */
                .ptd-hero { position: relative; height: 100vh; min-height: 600px; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
                .ptd-hero-bg { position: absolute; inset: -10%; background-size: cover; background-position: center; filter: brightness(0.18) saturate(0.7) sepia(0.15); will-change: transform; }
                .ptd-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(22,20,15,0.2) 0%, rgba(22,20,15,0.0) 25%, rgba(22,20,15,0.75) 65%, #16140F 100%); }
                .ptd-hero-top-bar { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent 0%, var(--A) 50%, transparent 100%); opacity: 0.7; }
                .ptd-hero-inner { position: relative; z-index: 2; padding: 0 clamp(24px,6vw,100px) clamp(48px,7vh,90px); max-width: 1400px; width: 100%; }
                .ptd-crumb { font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(232,220,200,0.35); margin-bottom: 2rem; }
                .ptd-crumb a { color: inherit; text-decoration: none; transition: color .3s; }
                .ptd-crumb a:hover { color: var(--A); }
                .ptd-crumb sep { margin: 0 10px; opacity: 0.35; }
                .ptd-h1-main { font-family: 'Instrument Serif', serif; font-size: clamp(3rem, 7vw, 6.5rem); font-weight: 400; line-height: 1.0; letter-spacing: -0.01em; color: #F5EDD8; margin: 0 0 0.15em; animation: ptd-up .9s ease-out .1s both; }
                .ptd-h1-sub { font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(1.8rem, 4vw, 4rem); font-weight: 400; color: var(--A); line-height: 1.1; margin: 0 0 2.5rem; animation: ptd-up .9s ease-out .25s both; }
                .ptd-hero-foot { display: flex; align-items: stretch; gap: 1.5rem; flex-wrap: wrap; animation: ptd-up .9s ease-out .4s both; }
                .ptd-stat { background: rgba(232,220,200,0.04); border: 1px solid rgba(232,220,200,0.1); border-radius: 10px; padding: 1.1rem 1.8rem; display: flex; flex-direction: column; gap: 0.3rem; min-width: 130px; }
                .ptd-stat-v { font-family: 'IBM Plex Mono', monospace; font-size: 2rem; font-weight: 500; color: #F5EDD8; line-height: 1; }
                .ptd-stat-l { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--A); font-family: 'IBM Plex Mono', monospace; }
                .ptd-hero-btns { display: flex; align-items: center; gap: 0.9rem; flex-wrap: wrap; margin-left: auto; }
                .ptd-btn-p { display: inline-flex; align-items: center; gap: 8px; background: var(--A); color: #16140F; font-family: 'IBM Plex Mono', monospace; font-size: 0.73rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.95rem 1.8rem; border-radius: 8px; text-decoration: none; transition: all .3s; box-shadow: 0 2px 20px var(--G); border: 1px solid var(--A); }
                .ptd-btn-p:hover { background: transparent; color: var(--A); }
                .ptd-btn-g { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: rgba(232,220,200,0.55); font-family: 'IBM Plex Mono', monospace; font-size: 0.73rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.95rem 1.8rem; border-radius: 8px; text-decoration: none; border: 1px solid rgba(232,220,200,0.14); transition: all .3s; }
                .ptd-btn-g:hover { border-color: rgba(232,220,200,0.35); color: #F5EDD8; }

                /* ─── SHARED SECTION ─── */
                .ptd-sec { padding: clamp(72px,9vw,120px) clamp(24px,6vw,100px); max-width: 1400px; margin: 0 auto; }
                .ptd-label { font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--A); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 10px; }
                .ptd-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--A); opacity: 0.6; }
                .ptd-ht { font-family: 'Instrument Serif', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; line-height: 1.1; color: #F5EDD8; margin: 0 0 2.5rem; letter-spacing: -0.01em; }
                .ptd-divider { height: 1px; background: rgba(232,220,200,0.07); margin: 0; }

                /* ─── SPLIT ─── */
                .ptd-split { display: grid; grid-template-columns: 1fr 1fr; background: #1C1A13; border-top: 1px solid rgba(232,220,200,0.06); border-bottom: 1px solid rgba(232,220,200,0.06); }
                @media (max-width: 860px) { .ptd-split { grid-template-columns: 1fr; } }
                .ptd-split-cell { padding: clamp(48px,6vw,80px); }
                .ptd-split-cell:first-child { border-right: 1px solid rgba(232,220,200,0.06); }
                @media (max-width: 860px) { .ptd-split-cell:first-child { border-right: none; border-bottom: 1px solid rgba(232,220,200,0.06); } }
                .ptd-item { display: flex; gap: 1.25rem; padding: 1.25rem 0; border-bottom: 1px solid rgba(232,220,200,0.05); }
                .ptd-item:last-child { border-bottom: none; }
                .ptd-item-icon { flex-shrink: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-family: monospace; font-size: 0.75rem; margin-top: 1px; }
                .ptd-item-icon.threat { background: rgba(200,60,60,0.1); border: 1px solid rgba(200,60,60,0.2); color: #C84040; }
                .ptd-item-icon.solution { background: color-mix(in srgb, var(--A) 10%, transparent); border: 1px solid color-mix(in srgb, var(--A) 25%, transparent); color: var(--A); }
                .ptd-item-text { font-size: 0.97rem; line-height: 1.7; color: rgba(232,220,200,0.65); }

                /* ─── PROTOCOL ─── */
                .ptd-proto-wrap { background: #16140F; }
                .ptd-proto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1px; background: rgba(232,220,200,0.06); border: 1px solid rgba(232,220,200,0.06); border-radius: 12px; overflow: hidden; margin-top: 3rem; }
                .ptd-step { background: #1C1A13; padding: 2.2rem 2rem; transition: background .3s; }
                .ptd-step:hover { background: #221F17; }
                .ptd-step-n { font-family: 'IBM Plex Mono', monospace; font-size: 3rem; font-weight: 400; color: rgba(232,220,200,0.07); line-height: 1; margin-bottom: 1.25rem; }
                .ptd-step-h { font-family: 'Instrument Serif', serif; font-size: 1.15rem; color: #F5EDD8; margin-bottom: 0.6rem; line-height: 1.3; }
                .ptd-step-b { font-size: 0.9rem; line-height: 1.72; color: rgba(232,220,200,0.5); }

                /* ─── TIMELINE ─── */
                .ptd-tl-wrap { background: #1C1A13; border-top: 1px solid rgba(232,220,200,0.06); border-bottom: 1px solid rgba(232,220,200,0.06); }
                .ptd-tl { position: relative; max-width: 780px; margin: 3rem 0 0; padding-left: 52px; }
                .ptd-tl-lbg { position: absolute; top: 0; bottom: 0; left: 16px; width: 1px; background: rgba(232,220,200,0.08); }
                .ptd-tl-fill { position: absolute; top: 0; left: 16px; width: 1px; background: var(--A); height: 0; transition: height .12s linear; box-shadow: 0 0 8px var(--G), 0 0 20px var(--G); }
                .ptd-tl-item { position: relative; margin-bottom: 3rem; opacity: 0.3; transition: opacity .5s; }
                .ptd-tl-item.ptd-tl-active { opacity: 1; }
                .ptd-tl-dot { position: absolute; left: -43px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: #16140F; border: 1.5px solid rgba(232,220,200,0.2); transition: all .4s; }
                .ptd-tl-item.ptd-tl-active .ptd-tl-dot { background: var(--A); border-color: var(--A); box-shadow: 0 0 8px var(--G); }
                .ptd-tl-tag { font-family: 'IBM Plex Mono', monospace; font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--A); margin-bottom: 0.4rem; }
                .ptd-tl-h { font-family: 'Instrument Serif', serif; font-size: 1.2rem; color: #F5EDD8; margin-bottom: 0.5rem; }
                .ptd-tl-b { font-size: 0.93rem; line-height: 1.72; color: rgba(232,220,200,0.5); }

                /* ─── EVIDENCE GALLERY ─── */
                .ptd-ev-sec { background: #16140F; }
                .ptd-ev-viewer { display: grid; grid-template-columns: 1fr 280px; gap: 16px; margin-top: 2.5rem; height: 560px; }
                @media (max-width: 900px) { .ptd-ev-viewer { grid-template-columns: 1fr; height: auto; } }
                .ptd-ev-featured { position: relative; border-radius: 10px; overflow: hidden; background: #0a0908; border: 1px solid rgba(232,220,200,0.08); }
                .ptd-ev-featured-img { width: 100%; height: 100%; object-fit: contain; display: block; transition: opacity .25s ease; }
                .ptd-ev-featured-counter { position: absolute; bottom: 14px; right: 14px; font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; letter-spacing: 0.18em; color: rgba(232,220,200,0.45); background: rgba(10,9,7,0.7); padding: 4px 10px; border-radius: 4px; }
                .ptd-ev-featured-nav { position: absolute; bottom: 14px; left: 14px; display: flex; gap: 8px; }
                .ptd-ev-nav-btn { background: rgba(232,220,200,0.08); border: 1px solid rgba(232,220,200,0.12); color: #E8DCC8; width: 34px; height: 34px; border-radius: 6px; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all .2s; line-height: 1; }
                .ptd-ev-nav-btn:hover { background: rgba(232,220,200,0.15); border-color: var(--A); color: var(--A); }
                .ptd-ev-stamp-badge { position: absolute; top: 14px; left: 14px; border: 1.5px solid var(--A); color: var(--A); font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; padding: 3px 8px; border-radius: 4px; opacity: 0.65; }
                .ptd-ev-strip { display: flex; flex-direction: column; gap: 8px; overflow-y: auto; padding-right: 4px; scrollbar-width: thin; scrollbar-color: rgba(232,220,200,0.12) transparent; }
                .ptd-ev-strip::-webkit-scrollbar { width: 4px; }
                .ptd-ev-strip::-webkit-scrollbar-track { background: transparent; }
                .ptd-ev-strip::-webkit-scrollbar-thumb { background: rgba(232,220,200,0.12); border-radius: 2px; }
                .ptd-ev-strip-thumb { flex-shrink: 0; height: 80px; border-radius: 6px; overflow: hidden; cursor: pointer; border: 1.5px solid transparent; transition: border-color .2s, opacity .2s; opacity: 0.5; }
                .ptd-ev-strip-thumb.active { border-color: var(--A); opacity: 1; }
                .ptd-ev-strip-thumb:hover { opacity: 0.85; }
                .ptd-ev-strip-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }

                /* ─── IMPACT METRICS ─── */
                .ptd-impact-wrap { background: #1C1A13; border-top: 1px solid rgba(232,220,200,0.06); }
                .ptd-impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(232,220,200,0.06); border: 1px solid rgba(232,220,200,0.06); border-radius: 12px; overflow: hidden; margin-top: 3rem; }
                @media (max-width: 768px) { .ptd-impact-grid { grid-template-columns: 1fr; } }
                .ptd-impact-card { background: #16140F; padding: 3.5rem 2.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: background .3s; }
                .ptd-impact-card:hover { background: #1A1813; }
                .ptd-impact-v { font-family: 'Instrument Serif', serif; font-size: clamp(3.2rem, 6vw, 4.5rem); line-height: 1; color: var(--A); margin-bottom: 1rem; text-shadow: 0 4px 24px var(--G); }
                .ptd-impact-l { font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem; letter-spacing: 0.08em; color: #F5EDD8; text-transform: uppercase; line-height: 1.5; max-width: 180px; }

                /* ─── FAQ ─── */
                .ptd-faq-wrap { background: #16140F; }
                .ptd-faq-list { max-width: 840px; margin: 3rem 0 0; display: flex; flex-direction: column; gap: 1rem; }
                .ptd-faq-item { border: 1px solid rgba(232,220,200,0.08); border-radius: 12px; background: #1A1813; padding: 2rem 2.5rem; transition: border-color .3s; }
                .ptd-faq-item:hover { border-color: rgba(232,220,200,0.15); }
                .ptd-faq-q { font-family: 'Instrument Serif', serif; font-size: 1.6rem; color: #F5EDD8; margin: 0 0 1rem; line-height: 1.25; }
                .ptd-faq-a { font-size: 1rem; line-height: 1.7; color: rgba(232,220,200,0.6); margin: 0; }

                /* ─── CTA ─── */
                .ptd-cta-wrap { background: #1C1A13; border-top: 1px solid rgba(232,220,200,0.06); }
                .ptd-cta-inner { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; overflow: hidden; }
                .ptd-cta-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 500px; height: 280px; background: radial-gradient(ellipse, color-mix(in srgb, var(--A) 12%, transparent) 0%, transparent 70%); pointer-events: none; }
                .ptd-cta-h { font-family: 'Instrument Serif', serif; font-size: clamp(2rem, 5vw, 3.8rem); font-weight: 400; letter-spacing: -0.01em; color: #F5EDD8; max-width: 640px; margin: 0 0 1.25rem; line-height: 1.1; position: relative; z-index: 1; }
                .ptd-cta-p { font-size: 1.05rem; color: rgba(232,220,200,0.5); max-width: 520px; line-height: 1.7; margin: 0 0 2.75rem; position: relative; z-index: 1; }
                .ptd-cta-btns { display: flex; gap: 0.9rem; flex-wrap: wrap; justify-content: center; position: relative; z-index: 1; }

                /* ─── REVEAL ─── */
                .ptd-reveal { opacity: 0; transform: translateY(24px); transition: opacity .75s ease, transform .75s ease; }
                .ptd-reveal.ptd-visible { opacity: 1; transform: none; }

                @keyframes ptd-up { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }

                @media (max-width: 640px) {
                    .ptd-hero-btns { margin-left: 0; width: 100%; }
                    .ptd-btn-p, .ptd-btn-g { flex: 1; justify-content: center; }
                    .ptd-ev-strip { flex-direction: row; overflow-x: auto; overflow-y: visible; height: auto; padding-right: 0; padding-bottom: 4px; }
                    .ptd-ev-strip-thumb { flex-shrink: 0; width: 100px; height: 70px; }
                }
            `}</style>

            <div className="scanlines" aria-hidden="true" />
            <h1 className="sr-only">{platform.title}</h1>

            {/* ─── HERO ─── */}
            <header className="ptd-hero" ref={heroRef}>
                <div className="ptd-hero-top-bar" />
                <div className="ptd-hero-bg" style={{ backgroundImage: `url(${platform.heroBg})` }} />
                <div className="ptd-hero-overlay" />
                <div className="ptd-hero-inner">
                    <div className="ptd-crumb">
                        <Link to="/">Home</Link><sep>/</sep>
                        <Link to="/services">Services</Link><sep>/</sep>
                        {platform.name} Takedowns
                    </div>
                    <h2 className="ptd-h1-main">{platform.headlineMain || platform.title}</h2>
                    {platform.headlineSub && <p className="ptd-h1-sub">{platform.headlineSub}</p>}
                    <div className="ptd-hero-foot">
                        <div className="ptd-stat">
                            <span className="ptd-stat-v">{platform.stats.time}</span>
                            <span className="ptd-stat-l">Avg Removal</span>
                        </div>
                        <div className="ptd-stat">
                            <span className="ptd-stat-v">{platform.stats.rate}</span>
                            <span className="ptd-stat-l">Success Rate</span>
                        </div>
                        <div className="ptd-hero-btns">
                            <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="ptd-btn-p">Start Takedown →</a>
                            <a href="#threat" className="ptd-btn-g">See How ↓</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ptd-divider" />

            {/* ─── THREAT / SOLUTION ─── */}
            <div className="ptd-split" id="threat">
                <div className="ptd-split-cell ptd-reveal">
                    <div className="ptd-label">The Threat</div>
                    <h2 className="ptd-ht">Why standard DMCA fails on {platform.name}.</h2>
                    {platform.threats.map((t, i) => (
                        <div key={i} className="ptd-item">
                            <div className="ptd-item-icon threat">✕</div>
                            <p className="ptd-item-text">{t}</p>
                        </div>
                    ))}
                </div>
                <div className="ptd-split-cell ptd-reveal" style={{ transitionDelay: '120ms' }}>
                    <div className="ptd-label">Our Response</div>
                    <h2 className="ptd-ht">How KOHZA completely neutralises it.</h2>
                    {platform.solutions.map((s, i) => (
                        <div key={i} className="ptd-item">
                            <div className="ptd-item-icon solution">✓</div>
                            <p className="ptd-item-text">{s}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ptd-divider" />

            {/* ─── PROTOCOL ─── */}
            <div className="ptd-proto-wrap">
                <div className="ptd-sec">
                    <div className="ptd-label ptd-reveal">Takedown Protocol</div>
                    <h2 className="ptd-ht ptd-reveal">Immediate action sequence.</h2>
                    <div className="ptd-proto-grid">
                        {protoSteps.map((s, i) => (
                            <div key={i} className="ptd-step ptd-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                                <div className="ptd-step-n">{s.n}</div>
                                <div className="ptd-step-h">{s.h}</div>
                                <div className="ptd-step-b">{s.b}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="ptd-divider" />

            {/* ─── TIMELINE ─── */}
            <div className="ptd-tl-wrap">
                <div className="ptd-sec">
                    <div className="ptd-label ptd-reveal">Operation Timeline</div>
                    <h2 className="ptd-ht ptd-reveal">From discovery to deletion.</h2>
                    <div className="ptd-tl" ref={timelineRef}>
                        <div className="ptd-tl-lbg" />
                        <div className="ptd-tl-fill" ref={timelineFillRef} />
                        {tlSteps.map((item, i) => (
                            <div key={i} className="ptd-tl-item">
                                <div className="ptd-tl-dot" />
                                <div className="ptd-tl-tag">{item.tag}</div>
                                <div className="ptd-tl-h">{item.h}</div>
                                <div className="ptd-tl-b">{item.b}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── IMPACT METRICS ─── */}
            {platform.impact?.length > 0 && (
                <>
                    <div className="ptd-divider" />
                    <div className="ptd-impact-wrap">
                        <div className="ptd-sec">
                            <div className="ptd-label ptd-reveal">The Impact</div>
                            <h2 className="ptd-ht ptd-reveal">Measurable destruction.</h2>
                            <div className="ptd-impact-grid">
                                {platform.impact.map((stat, i) => (
                                    <div key={i} className="ptd-impact-card ptd-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                        <div className="ptd-impact-v">{stat.value}</div>
                                        <div className="ptd-impact-l">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ─── EVIDENCE ─── */}
            {platform.evidence?.length > 0 && (
                <>
                    <div className="ptd-divider" />
                    <div className="ptd-ev-sec">
                        <div className="ptd-sec">
                            <div className="ptd-label ptd-reveal">Declassified</div>
                            <h2 className="ptd-ht ptd-reveal">{platform.evidenceHeadline || `Confirmed ${platform.name} takedowns — real proof.`}</h2>
                            <div className="ptd-ev-viewer ptd-reveal">
                                {/* Featured large image */}
                                <div className="ptd-ev-featured">
                                    <img
                                        src={platform.evidence[lightbox ?? 0]}
                                        alt={`${platform.name} takedown proof ${(lightbox ?? 0) + 1}`}
                                        className="ptd-ev-featured-img"
                                        key={lightbox ?? 0}
                                    />
                                    <span className="ptd-ev-stamp-badge">{platform.evidenceBadge || 'NEUTRALIZED'}</span>
                                    <div className="ptd-ev-featured-nav">
                                        <button
                                            className="ptd-ev-nav-btn"
                                            onClick={() => setLightbox(i => Math.max(0, (i ?? 0) - 1))}
                                            disabled={(lightbox ?? 0) === 0}
                                            aria-label="Previous"
                                        >‹</button>
                                        <button
                                            className="ptd-ev-nav-btn"
                                            onClick={() => setLightbox(i => Math.min(platform.evidence.length - 1, (i ?? 0) + 1))}
                                            disabled={(lightbox ?? 0) === platform.evidence.length - 1}
                                            aria-label="Next"
                                        >›</button>
                                    </div>
                                    <span className="ptd-ev-featured-counter">{(lightbox ?? 0) + 1} / {platform.evidence.length}</span>
                                </div>
                                {/* Thumbnail filmstrip */}
                                <div className="ptd-ev-strip">
                                    {platform.evidence.map((src, idx) => (
                                        <button
                                            key={idx}
                                            className={`ptd-ev-strip-thumb${(lightbox ?? 0) === idx ? ' active' : ''}`}
                                            onClick={() => setLightbox(idx)}
                                            aria-label={`View proof ${idx + 1}`}
                                            type="button"
                                            style={{ background: 'none', padding: 0, cursor: 'pointer' }}
                                        >
                                            <img src={src} alt={`Proof ${idx + 1}`} loading="lazy" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* ─── FAQ ─── */}
            {platform.faq?.length > 0 && (
                <>
                    <div className="ptd-divider" />
                    <div className="ptd-faq-wrap">
                        <div className="ptd-sec">
                            <div className="ptd-label ptd-reveal">Common Questions</div>
                            <h2 className="ptd-ht ptd-reveal">Executive briefing.</h2>
                            <div className="ptd-faq-list">
                                {platform.faq.map((item, i) => (
                                    <div key={i} className="ptd-faq-item ptd-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                                        <h3 className="ptd-faq-q">{item.q}</h3>
                                        <p className="ptd-faq-a">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="ptd-divider" />

            {/* ─── CTA ─── */}
            <div className="ptd-cta-wrap">
                <div className="ptd-sec ptd-cta-inner">
                    <div className="ptd-cta-glow" />
                    <h2 className="ptd-cta-h ptd-reveal">Stop the leak.<br />Deploy KOHZA now.</h2>
                    <p className="ptd-cta-p ptd-reveal" style={{ transitionDelay: '120ms' }}>
                        Every hour your content is free, you are losing subscribers who should be paying. Get a response within the hour.
                    </p>
                    <div className="ptd-cta-btns ptd-reveal" style={{ transitionDelay: '220ms' }}>
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="ptd-btn-p">Start Takedown →</a>
                        <a href="mailto:takedowns@kohza.org" className="ptd-btn-g">takedowns@kohza.org</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
