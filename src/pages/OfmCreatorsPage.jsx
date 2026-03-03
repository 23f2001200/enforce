import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// OFM page replicates the full ofm-creators.html body content
// Inline styles extracted from the original <style> block are scoped here

export default function OfmCreatorsPage() {
    useScrollReveal()
    const timelineFillRef = useRef(null)

    useEffect(() => {
        // Reveal elements with class 'reveal' (OFM uses its own .reveal / .active system)
        const revealElements = document.querySelectorAll('.reveal')
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active')
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
        revealElements.forEach(el => revealObserver.observe(el))

        // Spotlight hover on threat cards
        const grid = document.getElementById('threats-grid')
        const cards = document.querySelectorAll('.threat-card')
        const handleMouseMove = (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect()
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
            })
        }
        if (grid) grid.addEventListener('mousemove', handleMouseMove)

        // Parallax + Timeline scroll
        const heroBg = document.querySelector('.ofm-hero-bg')
        const anatomyImg = document.querySelector('.anatomy-image')
        const timelineSection = document.querySelector('.timeline-container')
        const timelineItems = document.querySelectorAll('.timeline-item')

        const handleScroll = () => {
            const scrolled = window.scrollY
            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`
            }
            if (anatomyImg) {
                const rect = anatomyImg.parentElement.getBoundingClientRect()
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const rel = window.innerHeight - rect.top
                    anatomyImg.style.transform = `scale(1.05) translateY(${rel * 0.05 - 20}px)`
                }
            }
            if (timelineSection && timelineFillRef.current) {
                const rect = timelineSection.getBoundingClientRect()
                const trigger = window.innerHeight * 0.5
                if (rect.top < trigger && rect.bottom > trigger) {
                    const pct = ((trigger - rect.top) / rect.height) * 100
                    timelineFillRef.current.style.height = `${Math.min(Math.max(pct, 0), 100)}%`
                } else if (rect.top >= trigger) {
                    timelineFillRef.current.style.height = '0%'
                } else {
                    timelineFillRef.current.style.height = '100%'
                }
                timelineItems.forEach(item => {
                    const ir = item.getBoundingClientRect()
                    item.classList.toggle('active', ir.top < trigger)
                })
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Live terminal feed
        const terminalFeed = document.getElementById('terminal-feed')
        let interval
        if (terminalFeed) {
            interval = setInterval(() => {
                if (document.visibilityState === 'visible') {
                    const now = new Date()
                    const t = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`
                    const row = document.createElement('div')
                    row.className = 'term-row'
                    row.innerHTML = `<span class="term-time">${t}</span><span class="term-action">Routine network ping...</span><span class="term-status" style="color:var(--text-tertiary);">Clear</span>`
                    terminalFeed.appendChild(row)
                    if (terminalFeed.children.length > 7) terminalFeed.removeChild(terminalFeed.firstElementChild)
                }
            }, 8000)
        }

        return () => {
            revealObserver.disconnect()
            if (grid) grid.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
            if (interval) clearInterval(interval)
        }
    }, [])

    return (
        <>
            <style>{`
        :root {
          --of-blue: #00AFF0;
          --of-blue-glow: rgba(0, 175, 240, 0.15);
          --bg-base: #050508;
          --bg-surface: #0a0b10;
          --bg-elevated: #12141c;
          --border-subtle: rgba(255,255,255,0.06);
          --border-highlight: rgba(255,255,255,0.12);
        }
        body.ofm-page { background-color: var(--bg-base); }
        h1,h2,h3,h4,.font-display { font-family:'Space Grotesk',sans-serif; letter-spacing:-0.03em; }
        .glass-panel { background:rgba(18,20,28,0.4); backdrop-filter:blur(16px); border:1px solid var(--border-subtle); box-shadow:0 4px 30px rgba(0,0,0,0.5); }
        .text-gradient { background:linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.5) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .text-blue-glow { color:var(--of-blue); text-shadow:0 0 20px var(--of-blue-glow); }
        @keyframes fade-in-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.3} 50%{opacity:0.6} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .reveal { opacity:0; transform:translateY(40px); transition:all 1s cubic-bezier(0.16,1,0.3,1); }
        .reveal.active { opacity:1; transform:translateY(0); }
        .delay-100{transition-delay:100ms} .delay-200{transition-delay:200ms} .delay-300{transition-delay:300ms} .delay-400{transition-delay:400ms}
        .ambient-glow { position:absolute; width:800px; height:800px; background:radial-gradient(circle,var(--of-blue-glow) 0%,transparent 70%); border-radius:50%; pointer-events:none; z-index:0; filter:blur(60px); mix-blend-mode:screen; }
        .ofm-hero { position:relative; min-height:110vh; display:flex; align-items:center; justify-content:center; overflow:hidden; padding-top:80px; }
        .ofm-hero-bg { position:absolute; inset:-5%; background-image:url('/assets/image-1094890250363699.jpeg'); background-size:cover; background-position:center 30%; z-index:0; will-change:transform; filter:brightness(0.6); }
        .ofm-hero-bg::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(5,5,8,0.15) 0%,rgba(5,5,8,0.72) 45%,rgba(5,5,8,0.95) 75%,var(--bg-base) 100%); }
        .ofm-hero-content { position:relative; z-index:2; text-align:center; max-width:1000px; padding:0 2rem; display:flex; flex-direction:column; align-items:center; }
        .ofm-badge { display:inline-flex; align-items:center; gap:12px; padding:8px 16px; border-radius:100px; border:1px solid rgba(0,175,240,0.3); background:rgba(0,175,240,0.05); backdrop-filter:blur(10px); margin-bottom:2.5rem; animation:fade-in-up 1s ease-out forwards; }
        .ofm-badge-dot { width:6px; height:6px; background:var(--of-blue); border-radius:50%; box-shadow:0 0 10px var(--of-blue); animation:pulse-slow 2s infinite; }
        .ofm-badge-text { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; font-weight:500; letter-spacing:0.2em; color:#fff; text-transform:uppercase; }
        .ofm-headline { font-size:clamp(3rem,8vw,6.5rem); font-weight:700; line-height:0.95; margin-bottom:2rem; color:#fff; opacity:0; animation:fade-in-up 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards; }
        .ofm-headline .serif-italic { font-style:italic; font-weight:400; color:var(--text-secondary); display:block; font-size:clamp(2rem,5vw,4.5rem); margin-top:0.5rem; }
        .ofm-subheadline { font-size:clamp(1.1rem,2vw,1.35rem); line-height:1.6; color:var(--text-secondary); max-width:680px; margin-bottom:3.5rem; opacity:0; animation:fade-in-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards; font-weight:300; }
        .btn-group { display:flex; gap:1.5rem; opacity:0; animation:fade-in-up 1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards; }
        .btn-elite { position:relative; display:inline-flex; align-items:center; justify-content:center; padding:18px 40px; font-family:'Space Grotesk',sans-serif; font-size:0.85rem; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; text-decoration:none; color:#fff; background:transparent; border:1px solid var(--border-highlight); border-radius:2px; overflow:hidden; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); backdrop-filter:blur(5px); z-index:1; }
        .btn-elite::before { content:''; position:absolute; top:0; left:0; width:100%; height:100%; background:var(--of-blue); transform:scaleX(0); transform-origin:right; transition:transform 0.5s cubic-bezier(0.86,0,0.07,1); z-index:-1; }
        .btn-elite:hover { border-color:var(--of-blue); box-shadow:0 0 30px rgba(0,175,240,0.2); }
        .btn-elite:hover::before { transform:scaleX(1); transform-origin:left; }
        .btn-elite-solid { background:#fff; color:#000; border-color:#fff; }
        .btn-elite-solid::before { background:var(--of-blue); }
        .btn-elite-solid:hover { color:#fff; border-color:var(--of-blue); }
        .scroll-indicator { position:absolute; bottom:40px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:12px; opacity:0; animation:fade-in-up 1s ease 1s forwards; z-index:2; }
        .scroll-text { font-family:'IBM Plex Mono',monospace; font-size:0.55rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--text-tertiary); writing-mode:vertical-rl; transform:rotate(180deg); }
        @keyframes scroll-drop { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
        .brands-section { padding:3rem 0; border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle); background:var(--bg-surface); position:relative; overflow:hidden; }
        .brands-section::before,.brands-section::after { content:''; position:absolute; top:0; width:15%; height:100%; z-index:2; pointer-events:none; }
        .brands-section::before { left:0; background:linear-gradient(to right,var(--bg-surface) 0%,transparent 100%); }
        .brands-section::after { right:0; background:linear-gradient(to left,var(--bg-surface) 0%,transparent 100%); }
        .marquee-container { display:flex; width:fit-content; animation:marquee 30s linear infinite; }
        .marquee-grid { display:flex; align-items:center; gap:6rem; padding:0 3rem; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .brand-item { display:flex; align-items:center; gap:12px; opacity:0.5; transition:opacity 0.3s ease,filter 0.3s ease; filter:grayscale(80%); }
        .brand-item:hover { opacity:1; filter:grayscale(0%); }
        .brand-item.brand-of { opacity:1; filter:grayscale(0%); }
        .brand-logo-img { height:50px; width:auto; object-fit:contain; }
        .brand-text { font-family:'Space Grotesk',sans-serif; font-size:1.4rem; font-weight:600; letter-spacing:-0.02em; }
        .section-padding { padding:140px 0; position:relative; }
        .container { max-width:1280px; margin:0 auto; padding:0 2rem; position:relative; z-index:2; }
        .section-eyebrow { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; letter-spacing:0.2em; color:var(--of-blue); text-transform:uppercase; display:flex; align-items:center; gap:16px; margin-bottom:1.5rem; }
        .section-eyebrow::after { content:''; height:1px; width:40px; background:var(--border-highlight); }
        .section-title { font-size:clamp(2.5rem,5vw,4rem); font-weight:500; line-height:1.1; margin-bottom:2rem; max-width:800px; }
        .anatomy-grid { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; margin-top:4rem; }
        .anatomy-content p { font-size:1.15rem; line-height:1.8; color:var(--text-secondary); margin-bottom:2rem; font-weight:300; }
        .anatomy-stats { display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-top:3rem; padding-top:3rem; border-top:1px solid var(--border-subtle); }
        .stat-value { font-family:'Space Grotesk',sans-serif; font-size:3rem; font-weight:500; color:#fff; line-height:1; margin-bottom:0.5rem; }
        .stat-label { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:var(--text-tertiary); text-transform:uppercase; letter-spacing:0.1em; }
        .anatomy-image-wrapper { position:relative; border-radius:4px; overflow:hidden; aspect-ratio:4/5; }
        .anatomy-image { width:100%; height:100%; object-fit:cover; filter:grayscale(40%) contrast(1.2); transform:scale(1.05); will-change:transform; }
        .leak-overlay-card { position:absolute; background:rgba(10,11,16,0.85); backdrop-filter:blur(8px); border:1px solid rgba(255,50,50,0.3); border-left:3px solid #ff3232; padding:16px; border-radius:4px; font-family:'IBM Plex Mono',monospace; font-size:0.65rem; color:#fff; animation:float 6s ease-in-out infinite; }
        .card-1 { top:20%; left:-20px; animation-delay:0s; }
        .card-2 { bottom:30%; right:-20px; animation-delay:-3s; border-color:rgba(0,175,240,0.3); border-left-color:var(--of-blue); }
        .red-text { color:#ff3232; margin-bottom:4px; display:block; }
        .blue-text { color:var(--of-blue); margin-bottom:4px; display:block; }
        .threats-grid { display:grid; grid-template-columns:repeat(4,1fr); grid-auto-rows:minmax(280px,auto); gap:16px; margin-top:5rem; }
        .threat-card { background:var(--bg-elevated); padding:2.5rem; position:relative; overflow:hidden; border-radius:12px; border:1px solid var(--border-subtle); display:flex; flex-direction:column; justify-content:space-between; }
        .threat-span-2 { grid-column:span 2; }
        .threat-span-row-2 { grid-row:span 2; }
        .threat-card::before { content:''; position:absolute; top:0; left:0; width:100%; height:100%; background:radial-gradient(800px circle at var(--mouse-x,0) var(--mouse-y,0),rgba(255,255,255,0.06),transparent 40%); opacity:0; transition:opacity 0.3s; z-index:1; pointer-events:none; }
        .threat-card:hover::before { opacity:1; }
        .threat-card-inner { position:relative; z-index:2; pointer-events:none; }
        .threat-icon { color:var(--text-tertiary); margin-bottom:2rem; transition:color 0.4s ease; }
        .threat-card:hover .threat-icon { color:#fff; }
        .threat-title { font-size:1.5rem; font-weight:500; margin-bottom:1rem; color:#fff; letter-spacing:-0.02em; }
        .threat-desc { font-size:0.95rem; line-height:1.6; color:var(--text-secondary); font-weight:300; }
        .threat-image-bg { position:absolute; top:0; right:0; bottom:0; left:0; background-image:url('/assets/ofm_creator_card.png'); background-size:cover; background-position:center; opacity:0.15; mix-blend-mode:luminosity; transition:opacity 0.5s ease,transform 10s linear; }
        .threat-card:hover .threat-image-bg { opacity:0.3; transform:scale(1.05); }
        .timeline-section { background:var(--bg-base); position:relative; }
        .timeline-container { max-width:800px; margin:0 auto; position:relative; padding:4rem 0; }
        .timeline-line-bg { position:absolute; top:0; bottom:0; left:24px; width:1px; background:var(--border-subtle); }
        .timeline-line-fill { position:absolute; top:0; left:24px; width:1px; background:var(--of-blue); height:0%; box-shadow:0 0 15px var(--of-blue); transition:height 0.1s ease-out; }
        .timeline-item { position:relative; padding-left:80px; margin-bottom:6rem; }
        .timeline-item:last-child { margin-bottom:0; }
        .timeline-node { position:absolute; left:17px; top:0; width:15px; height:15px; border-radius:50%; background:var(--bg-surface); border:1px solid var(--border-highlight); transition:all 0.4s ease; display:flex; align-items:center; justify-content:center; }
        .timeline-item.active .timeline-node { background:var(--of-blue); border-color:var(--of-blue); box-shadow:0 0 20px var(--of-blue-glow); }
        .timeline-item.active .timeline-node::after { content:''; width:5px; height:5px; background:#fff; border-radius:50%; }
        .timeline-num { font-family:'IBM Plex Mono',monospace; font-size:0.7rem; color:var(--of-blue); margin-bottom:1rem; display:block; }
        .timeline-content h3 { font-size:2rem; font-weight:500; margin-bottom:1rem; transition:color 0.4s ease; color:var(--text-secondary); }
        .timeline-content p { font-size:1.1rem; line-height:1.8; color:var(--text-tertiary); font-weight:300; transition:color 0.4s ease; }
        .timeline-item.active .timeline-content h3 { color:#fff; }
        .timeline-item.active .timeline-content p { color:var(--text-secondary); }
        .surveillance-container { margin-top:6rem; padding:2px; background:linear-gradient(180deg,rgba(255,255,255,0.1) 0%,rgba(255,255,255,0.02) 100%); border-radius:8px; }
        .surveillance-inner { background:var(--bg-elevated); border-radius:6px; overflow:hidden; display:grid; grid-template-columns:300px 1fr; }
        .surveillance-sidebar { border-right:1px solid var(--border-subtle); padding:2rem; display:flex; flex-direction:column; gap:2rem; }
        .surveillance-header { font-family:'IBM Plex Mono',monospace; font-size:0.65rem; letter-spacing:0.1em; color:var(--text-tertiary); display:flex; align-items:center; gap:8px; }
        .pulse-dot-red { width:6px; height:6px; background:#ff3232; border-radius:50%; animation:pulse-slow 1.5s infinite; }
        .surveillance-stat { font-family:'Space Grotesk',sans-serif; font-size:2.5rem; line-height:1; color:#fff; margin-bottom:4px; }
        .surveillance-main { padding:2rem; font-family:'IBM Plex Mono',monospace; font-size:0.8rem; line-height:2; color:var(--text-secondary); position:relative; height:350px; }
        @keyframes terminal-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(1000%)} }
        .surveillance-main::after { content:''; position:absolute; top:0; left:0; width:100%; height:10%; background:linear-gradient(to bottom,transparent,rgba(0,175,240,0.05),transparent); animation:terminal-scan 4s linear infinite; pointer-events:none; }
        .term-row { display:flex; gap:16px; margin-bottom:8px; border-bottom:1px dashed rgba(255,255,255,0.05); padding-bottom:8px; }
        .term-time { color:var(--text-tertiary); min-width:80px; }
        .term-action { color:#fff; }
        .term-status.detected { color:#ff3232; }
        .term-status.resolved { color:var(--of-blue); }
        .quotes-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:2rem; margin-top:4rem; }
        .quote-card { padding:3rem; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:4px; position:relative; }
        .quote-icon { margin-bottom:2rem; color:var(--text-tertiary); opacity:0.5; }
        .quote-text { font-size:1.25rem; line-height:1.6; color:#fff; font-weight:300; margin-bottom:2rem; }
        .quote-author { font-family:'IBM Plex Mono',monospace; font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:12px; }
        .quote-author::before { content:''; width:20px; height:1px; background:var(--of-blue); }
        .cta-section { padding:200px 0 160px; text-align:center; position:relative; background:#000; overflow:hidden; border-top:1px solid var(--border-subtle); }
        .cta-glow-bg { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:1200px; height:1200px; background:radial-gradient(circle,rgba(0,175,240,0.08) 0%,rgba(10,11,16,0) 60%); pointer-events:none; z-index:0; }
        .cta-content { position:relative; z-index:2; max-width:900px; margin:0 auto; }
        .cta-headline { font-size:clamp(3rem,7vw,6rem); font-weight:500; line-height:1.1; margin-bottom:2rem; background:linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.7) 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; letter-spacing:-0.03em; }
        .cta-subtitle { font-size:1.25rem; color:var(--text-secondary); max-width:600px; margin:0 auto 4rem; line-height:1.6; }
        .cta-actions { display:flex; align-items:center; justify-content:center; gap:24px; }
        .btn-massive { padding:24px 60px; font-size:1.1rem; letter-spacing:0.05em; background:linear-gradient(135deg,var(--of-blue) 0%,#0077a3 100%); color:#fff; border:none; border-radius:4px; position:relative; overflow:hidden; cursor:pointer; transition:all 0.3s ease; box-shadow:0 0 30px rgba(0,175,240,0.2); text-decoration:none; text-transform:uppercase; font-weight:500; }
        .btn-massive:hover { box-shadow:0 0 50px rgba(0,175,240,0.4); transform:translateY(-2px); }
        @media (max-width:1024px) {
          .anatomy-grid { grid-template-columns:1fr; gap:4rem; }
          .anatomy-image-wrapper { order:-1; aspect-ratio:16/9; }
          .threats-grid { grid-template-columns:repeat(2,1fr); }
          .surveillance-inner { grid-template-columns:1fr; }
          .quotes-grid { grid-template-columns:1fr; }
        }
        @media (max-width:768px) {
          .threats-grid { grid-template-columns:1fr; }
          .ofm-hero { min-height:90vh; }
          .btn-group { flex-direction:column; width:100%; }
          .btn-elite { width:100%; }
        }
      `}</style>

            <div className="ambient-glow" style={{ top: '-200px', left: '-200px' }} />

            {/* Hero */}
            <section className="ofm-hero" id="hero">
                <div className="ofm-hero-bg parallax-bg" />
                <div className="ofm-hero-content">
                    <div className="ofm-badge">
                        <div className="ofm-badge-dot" />
                        <span className="ofm-badge-text">Creator Protection Unit</span>
                    </div>
                    <h1 className="ofm-headline">
                        DEFEND YOUR
                        <span className="serif-italic">EXCLUSIVITY.</span>
                    </h1>
                    <p className="ofm-subheadline">
                        Kohza is the premier digital enforcement layer for elite creators and agencies. We operate in the shadows to eradicate leaks, destroy impersonators, and secure your revenue.
                    </p>
                    <div className="btn-group">
                        <a href="#anatomy" className="btn-elite btn-elite-solid">Understand the Threat</a>
                        <a href="mailto:takedowns@kohza.org" className="btn-elite">Initiate Enforcement</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '3.5rem', opacity: 0.9, animation: 'fade-in-up 1s ease 0.8s both' }}>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Specialist for</span>
                        <img src="/assets/606b42680261580004244ccf.png" alt="OnlyFans" style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }} />
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span className="scroll-text">Descend</span>
                    <div className="scroll-line" />
                </div>
            </section>

            {/* Brands Marquee */}
            <section className="brands-section">
                <div className="marquee-container">
                    <div className="marquee-grid">
                        {['', 'PATREON', 'FANSLY', 'MYM', 'TELEGRAM', 'DISCORD', 'REDDIT'].map((b, i) =>
                            i === 0
                                ? <div key="of1" className="brand-item brand-of"><img src="/assets/606b42680261580004244ccf.png" alt="OnlyFans" className="brand-logo-img" /></div>
                                : <div key={b} className="brand-item"><span className="brand-text">{b}</span></div>
                        )}
                        {['', 'PATREON', 'FANSLY', 'MYM', 'TELEGRAM', 'DISCORD', 'REDDIT'].map((b, i) =>
                            i === 0
                                ? <div key="of2" className="brand-item brand-of" style={{ marginLeft: '6rem' }}><img src="/assets/606b42680261580004244ccf.png" alt="OnlyFans" className="brand-logo-img" /></div>
                                : <div key={`2${b}`} className="brand-item"><span className="brand-text">{b}</span></div>
                        )}
                    </div>
                </div>
            </section>

            {/* Anatomy of a Leak */}
            <section className="section-padding" id="anatomy" style={{ background: 'var(--bg-base)' }}>
                <div className="container">
                    <div className="reveal">
                        <span className="section-eyebrow">The Reality</span>
                        <h2 className="section-title text-gradient">The Anatomy of a <br />Content Leak.</h2>
                    </div>
                    <div className="anatomy-grid">
                        <div className="anatomy-content reveal delay-200">
                            <p>When paywalled content is breached, it doesn't stay in one place. Within minutes, automated scrapers copy the assets from private Discord servers to public Telegram mega-groups.</p>
                            <p>Within hours, it hits adult aggregator forums and indexed cyberlockers. The perceived value of your subscription plummets. Why pay for what is freely available?</p>
                            <p><strong>Standard DMCA requests take 14 days. By then, the damage is permanent. You need immediate, aggressive suppression.</strong></p>
                            <div className="anatomy-stats">
                                <div>
                                    <div className="stat-value">72<span style={{ color: 'var(--text-tertiary)', fontSize: '2rem' }}>%</span></div>
                                    <div className="stat-label">Loss in LTV from Leaked Subs</div>
                                </div>
                                <div>
                                    <div className="stat-value">12<span style={{ color: 'var(--text-tertiary)', fontSize: '2rem' }}>H</span></div>
                                    <div className="stat-label">Avg time to Global Indexing</div>
                                </div>
                            </div>
                        </div>
                        <div className="anatomy-image-wrapper reveal delay-400">
                            <img src="/assets/phone on table.jpeg" alt="Phone on a dark table" className="anatomy-image parallax-img" />
                            <div className="leak-overlay-card card-1">
                                <span className="red-text">[ALERT] UNAUTHORIZED DISTRIBUTION</span>
                                Target: t.me/mega_leaks_vip<br />
                                Assets: 14 Videos, 42 Images<br />
                                Status: <span style={{ color: '#fff' }}>Crawling network...</span>
                            </div>
                            <div className="leak-overlay-card card-2">
                                <span className="blue-text">[SYSTEM] ENFORCEMENT DEPLOYED</span>
                                Notice: Server-level takedown<br />
                                Target: anonfiles.com/vault_x<br />
                                Status: <span style={{ color: '#fff' }}>Links neutralized</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Threat Vectors */}
            <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div className="reveal">
                        <span className="section-eyebrow">Execution</span>
                        <h2 className="section-title text-gradient">Comprehensive<br />Threat Neutralization.</h2>
                    </div>
                    <div className="threats-grid reveal delay-200" id="threats-grid">
                        <div className="threat-card threat-span-2 threat-span-row-2">
                            <div className="threat-image-bg" />
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" /></svg>
                                <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
                                    <h3 className="threat-title" style={{ fontSize: '2rem' }}>Telegram Networks</h3>
                                    <p className="threat-desc" style={{ fontSize: '1.1rem' }}>Direct line to Telegram abuse teams to unpublish illicit mega-channels and ban bot-operated distribution rings within hours, not weeks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="threat-card">
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                <h3 className="threat-title">Impersonator Extermination</h3>
                                <p className="threat-desc">Rapid takedowns of catfish accounts on Instagram, TikTok, and X that steal your content to run fraudulent traffic funnels.</p>
                            </div>
                        </div>
                        <div className="threat-card">
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008z" /></svg>
                                <h3 className="threat-title">Cyberlocker Scraping</h3>
                                <p className="threat-desc">We hit MEGA, Drive, Dropbox, and anonymous offshore file hosts at the server and registrar levels.</p>
                            </div>
                        </div>
                        <div className="threat-card threat-span-2">
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" /></svg>
                                <h3 className="threat-title">Search Engine De-indexing</h3>
                                <p className="threat-desc">Bulk removal algorithms push DMCA requests to Google and Bing instantly, ensuring leaks never surface when potential fans search your name.</p>
                            </div>
                        </div>
                        <div className="threat-card threat-span-2">
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <h3 className="threat-title">Pirate Forums</h3>
                                <p className="threat-desc">Continuous scraping of dedicated adult leak boards. We target the thread creators and escalate server-side abuse reports for domain nullification.</p>
                            </div>
                        </div>
                        <div className="threat-card threat-span-2">
                            <div className="threat-card-inner">
                                <svg className="threat-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25-2.25v0" /></svg>
                                <h3 className="threat-title">Metadata Scrubbing</h3>
                                <p className="threat-desc">Advanced scrubbing of creator data from leaked assets to ensure privacy is maintained even when files are distributed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Timeline */}
            <section className="section-padding timeline-section" id="process">
                <div className="ambient-glow" style={{ bottom: '0px', right: '-200px' }} />
                <img src="/assets/606b42680261580004244ccf.png" alt="" style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', opacity: 0.03, pointerEvents: 'none', zIndex: 0, filter: 'grayscale(100%)' }} />
                <div className="container">
                    <div className="reveal text-center" style={{ marginBottom: '5rem' }}>
                        <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Methodology</span>
                        <h2 className="section-title text-gradient" style={{ margin: '0 auto' }}>Precision Logistics.</h2>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline-line-bg" />
                        <div className="timeline-line-fill" ref={timelineFillRef} id="timeline-fill" />
                        {[
                            { phase: 'PHASE_01', title: 'Asset Fingerprinting', desc: 'Upon onboarding, our system ingests and hashes your exclusive catalog. We create a digital biometric signature for your watermarks, facial data, and asset structures. The web is vast; we need to know exactly what we are hunting.' },
                            { phase: 'PHASE_02', title: 'Deep-Web Telemetry', desc: 'Our autonomous crawlers deploy across the surface and dark web. They monitor Telegram APIs, scrape heavily guarded forums, and index cyberlocker uploads matching your asset signatures in real-time. 24 hours a day, 7 days a week.' },
                            { phase: 'PHASE_03', title: 'Aggressive Nullification', desc: 'Detection equals destruction. Legal notices are automatically formatted and fired. API abuse reports hit Discord and Telegram immediately. Web hosts receive cease and desists threatening liability. We do not negotiate with pirates.' },
                            { phase: 'PHASE_04', title: 'Revenue Stabilization', desc: 'With the illicit funnels destroyed, traffic redirects back to your paywall. Exclusivity is restored. You receive an automated dashboard report detailing destroyed threats while you focus entirely on creation.' },
                        ].map(item => (
                            <div className="timeline-item reveal" key={item.phase} data-delay="100">
                                <div className="timeline-node" />
                                <div className="timeline-content">
                                    <span className="timeline-num">{item.phase}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        {/* Terminal */}
                        <div className="surveillance-container reveal delay-400">
                            <div className="surveillance-inner">
                                <div className="surveillance-sidebar">
                                    <div><div className="surveillance-header"><div className="pulse-dot-red" />LIVE SURVEILLANCE</div></div>
                                    <div>
                                        <div className="surveillance-stat">12.4<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>ms</span></div>
                                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Ping Latency</div>
                                    </div>
                                    <div>
                                        <div className="surveillance-stat">98.2<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>%</span></div>
                                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Enforcement Success</div>
                                    </div>
                                </div>
                                <div className="surveillance-main" id="terminal-feed">
                                    <div className="term-row"><span className="term-time">[00:41:12]</span><span className="term-action">Crawling node: x.com/search?q=leaks...</span><span className="term-status" style={{ color: 'var(--text-tertiary)' }}>Scanning</span></div>
                                    <div className="term-row"><span className="term-time">[00:41:14]</span><span className="term-action">Fingerprint Match: 'Client_Vip_Set.zip'</span><span className="term-status detected">DETECTED</span></div>
                                    <div className="term-row"><span className="term-time">[00:41:15]</span><span className="term-action">Target identified on host: MEGA.nz</span><span className="term-status" style={{ color: 'var(--text-tertiary)' }}>Verified</span></div>
                                    <div className="term-row"><span className="term-time">[00:41:18]</span><span className="term-action">Transmitting DMCA Takedown Notice RT-882</span><span className="term-status" style={{ color: 'var(--text-tertiary)' }}>Transmitted</span></div>
                                    <div className="term-row"><span className="term-time">[00:42:01]</span><span className="term-action">Host response: 200 OK — File purged.</span><span className="term-status resolved">RESOLVED</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div className="reveal">
                        <span className="section-eyebrow">Reputation</span>
                        <h2 className="section-title text-gradient">Trusted by the Elite.</h2>
                    </div>
                    <div className="quotes-grid reveal delay-200">
                        <div className="quote-card glass-panel">
                            <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="quote-text">"Before Kohza, dealing with subreddits leaking content felt like playing whack-a-mole while bleeding revenue. Since onboarding, our creators' exclusivity is actually exclusive again."</p>
                            <div className="quote-author">Top 50 Creator Agency</div>
                        </div>
                        <div className="quote-card glass-panel">
                            <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="quote-text">"The Telegram scraper is ruthlessly efficient. We had a massive mega-link hit the boards on a Friday night, Kohza had the source groups nuked by Saturday morning."</p>
                            <div className="quote-author">Independent Top 0.1% Creator</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section">
                <div className="cta-glow-bg" />
                <div className="container cta-content reveal">
                    <h2 className="cta-headline">Stop The Leaks.</h2>
                    <p className="cta-subtitle" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
                        Every hour your exclusive content remains exposed on Telegram mega-groups and adult forums, you are losing subscriber lifetime value. Stop relying on slow, automated DMCA form submission tools. Contact our dedicated enforcement team directly to initiate aggressive, permanent removal sequences and secure your revenue.
                    </p>
                    <div style={{ margin: '0 auto 4rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.1rem', color: '#fff', background: 'rgba(255,255,255,0.02)', padding: '2rem 3rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>EMAIL</span>
                            <a href="mailto:takedowns@kohza.org" style={{ color: 'var(--of-blue)', textDecoration: 'none', fontWeight: 500, fontSize: '1.3rem' }}>takedowns@kohza.org</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>PHONE/WHATSAPP</span>
                            <a href="tel:+447478036904" style={{ color: 'var(--of-blue)', textDecoration: 'none', fontWeight: 500, fontSize: '1.3rem' }}>+44 7478036904</a>
                        </div>
                    </div>
                    <div className="cta-actions">
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn-massive">Fill The Form</a>
                    </div>
                </div>
            </section>
        </>
    )
}
