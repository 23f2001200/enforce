import { useEffect, Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Lazy load below-the-fold components
const VideoPlayer = lazy(() => import('../components/VideoPlayer'))
const FaqAccordion = lazy(() => import('../components/FaqAccordion'))

export default function HomePage() {
    useScrollReveal()

    // Video modal inline styles (moved from inline <style> in original HTML)
    return (
        <>
            <Helmet>
                <title>Digital Enforcement & DMCA Takedowns | KOHZA</title>
                <meta name="description" content="KOHZA is a private digital enforcement unit specializing in DMCA takedowns, unauthorized content removal, and immediate platform-level suppression of leaked material on Telegram, Reddit, and cyberlockers." />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "KOHZA",
                            "url": "https://kohza.org",
                            "logo": "https://kohza.org/assets/-ultra-photoreal-cinematic-portrait-website-hero-b.jpeg",
                            "description": "A private digital enforcement bureau specializing in DMCA takedowns and pirated content removal.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "takedowns@kohza.org",
                                "contactType": "customer service"
                            }
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Which platforms are under surveillance?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We actively monitor 52+ networks including Instagram, Twitter/X, Reddit, Telegram, Discord, Google Drive, Mega, torrent trackers, and custom-built leak forums. If it exists on the internet, we are watching it."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How quickly is a takedown executed?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "On major platforms: 2–24 hours. For non-compliant or bulletproof hosts, we escalate to upstream ISPs and CDN providers — typically resolved within 48–72 hours."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What if they re-upload?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Every removed asset is cryptographically fingerprinted. Re-upload attempts across any monitored network trigger an automatic secondary strike with no further input required from you. The cycle ends permanently."
                                    }
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <div className="scanlines" aria-hidden="true" />

            <h1 className="sr-only">Digital Enforcement & DMCA Takedown Services | KOHZA</h1>

            {/* ========== HERO ========== */}
            <section className="hero" id="hero">
                <div className="hero-bg-wrap">
                    <img src="/assets/-ultra-photoreal-cinematic-portrait-website-hero-b.webp" alt="Cinematic operative monitoring screens" className="hero-bg-img" aria-hidden="true" width="1440" height="724" />
                    <div className="hero-bg-overlay" />
                </div>
                <div className="hero-inner reveal-on-scroll">
                    <div className="case-file-tag">
                        <span className="mono">CASE BUREAU — ACTIVE OPS</span>
                    </div>
                    <h2 className="hero-headline">
                        We find them.<br />
                        <span className="serif-italic">We make them disappear.</span>
                    </h2>
                    <p className="hero-sub" data-nosnippet="false">
                        <strong>What is KOHZA?</strong> KOHZA is a private digital enforcement unit specializing in DMCA takedowns, unauthorized content removal, and immediate platform-level suppression of leaked material. We maintain a 98% takedown success rate in under 24 hours across Telegram, Reddit, and mega-aggregators.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-red btn-large">Open a Case</a>
                        <a href="#protocol" className="btn btn-outline btn-large">View Protocol</a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span className="mono">SCROLL</span>
                    <div className="scroll-line" />
                </div>
            </section>

            {/* ========== STATS ========== */}
            <div className="stats-bar">
                <div className="stats-inner reveal-on-scroll">
                    <div className="stat">
                        <span className="stat-num">98<span className="stat-pct">%</span></span>
                        <span className="stat-label mono">Removal Rate</span>
                    </div>
                    <div className="stat-sep" />
                    <div className="stat">
                        <span className="stat-num">52<span className="stat-pct">+</span></span>
                        <span className="stat-label mono">Platforms Surveilled</span>
                    </div>
                    <div className="stat-sep" />
                    <div className="stat">
                        <span className="stat-num">&lt;24<span className="stat-pct">h</span></span>
                        <span className="stat-label mono">Avg. Strike Time</span>
                    </div>
                    <div className="stat-sep" />
                    <div className="stat">
                        <span className="stat-num">∞</span>
                        <span className="stat-label mono">Ongoing Surveillance</span>
                    </div>
                </div>
            </div>

            {/* ========== THE PROBLEM ========== */}
            <section className="section section-problem" id="problem">
                <div className="section-inner">
                    <div className="problem-layout reveal-on-scroll">
                        <div className="problem-image-col">
                            <div className="evidence-stack">
                                <div className="evidence-frame evidence-card-1">
                                    <img src="/assets/evidence/1.webp" alt="Leaked Course Evidence 01" className="evidence-photo" width="400" height="244" />
                                    <div className="evidence-label mono">EVIDENCE — LEAK 01</div>
                                </div>
                                <div className="evidence-frame evidence-card-2">
                                    <img src="/assets/evidence/2.webp" alt="Leaked Course Evidence 02" className="evidence-photo" width="400" height="198" />
                                    <div className="evidence-label mono">EVIDENCE — LEAK 02</div>
                                </div>
                                <div className="evidence-frame evidence-card-3">
                                    <img src="/assets/evidence/3.webp" alt="Leaked Course Evidence 03" className="evidence-photo" width="400" height="223" />
                                    <div className="evidence-label mono">EVIDENCE — LEAK 03</div>
                                </div>
                            </div>
                        </div>
                        <div className="problem-text-col">
                            <span className="section-tag mono">// THREAT ASSESSMENT</span>
                            <h2 className="section-title">Your content is already <span className="serif-italic">out there.</span></h2>
                            <p className="body-text">
                                If you produce anything of value — courses, exclusive media, brand content — shadow operators have already scraped it. They are distributing authorized copies of your work right now across networks you don't monitor.
                            </p>
                            <div className="threat-list">
                                <div className="threat-item">
                                    <span className="threat-tag mono">THREAT-01</span>
                                    <h3>The Whack-A-Mole Effect</h3>
                                    <p>One DMCA notice. Re-uploaded on a new domain within hours. Manual enforcement doesn't scale against automated piracy rings.</p>
                                </div>
                                <div className="threat-item">
                                    <span className="threat-tag mono">THREAT-02</span>
                                    <h3>Impersonation Operations</h3>
                                    <p>Fake accounts running under your face. Defrauding your audience. Every day they stay online costs you clients, revenue, and credibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== OPERATIONS ========== */}
            <section className="section section-ops" id="operations">
                <div className="section-inner">
                    <div className="section-header reveal-on-scroll">
                        <span className="section-tag mono">// ACTIVE OPERATIONS</span>
                        <h2 className="section-title">What the <span className="serif-italic">Bureau</span> handles.</h2>
                    </div>
                    <div className="ops-grid">
                        <div className="ops-card reveal-on-scroll">
                            <div className="ops-card-header mono">OP-001 // COURSE PIRACY</div>
                            <h3 className="ops-title">Pirated Courses &<br />Info Products</h3>
                            <p className="ops-desc">High-ticket courses, coaching programs, and info products ripped and distributed across Telegram, Discord, and dark-web trackers. We locate every copy and initiate immediate removal.</p>
                            <div className="ops-tags">
                                <span className="tag mono">Telegram</span>
                                <span className="tag mono">Reddit</span>
                                <span className="tag mono">Torrent Trackers</span>
                                <span className="tag mono">Cyberlockers</span>
                            </div>
                        </div>
                        <div className="ops-card reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <div className="ops-card-header mono">OP-002 // IMPERSONATION</div>
                            <h3 className="ops-title">Fake Accounts &<br />Identity Theft</h3>
                            <p className="ops-desc">Fraudulent Instagram, Twitter, and TikTok accounts built to deceive your audience and extract money in your name. We compile evidence and execute platform-level takedowns within hours.</p>
                            <div className="ops-tags">
                                <span className="tag mono">Instagram</span>
                                <span className="tag mono">Twitter / X</span>
                                <span className="tag mono">TikTok</span>
                                <span className="tag mono">Facebook</span>
                            </div>
                        </div>
                        <div className="ops-card reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <div className="ops-card-header mono">OP-003 // EXCLUSIVE CONTENT</div>
                            <h3 className="ops-title">Leaked Creator &<br />OFM Content</h3>
                            <p className="ops-desc">Exclusive creator content and private media distributed without consent via link aggregators and re-upload networks. We identify and permanently suppress every unauthorized copy.</p>
                            <div className="ops-tags">
                                <span className="tag mono">Aggregator Sites</span>
                                <span className="tag mono">Telegram</span>
                                <span className="tag mono">Imageboards</span>
                                <span className="tag mono">Leak Forums</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIAL ========== */}
            <section className="section section-case" id="testimonial">
                <div className="section-inner">
                    <div className="case-layout reveal-on-scroll">
                        <div className="case-text-col">
                            <span className="section-tag mono">// FIELD REPORT — CLOSED CASE</span>
                            <h2 className="section-title">The client <span className="serif-italic">speaks.</span></h2>
                            <blockquote className="case-quote">
                                "They came fast and removed the listings fast. For a guy who suffers from problems like these, they are the best to do this."
                            </blockquote>
                            <div className="case-subject">
                                <div className="subject-id mono">SUBJECT: RICHARD WONDERS</div>
                                <div className="subject-role mono">Content Creator & Entrepreneur</div>
                                <div className="subject-status mono status-closed">CASE STATUS: CLOSED — RESOLVED</div>
                            </div>
                        </div>
                        <div className="case-video-col">
                            <Suspense fallback={<div className="video-skeleton">Loading Evidence...</div>}>
                                <VideoPlayer />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== WHO WE ARE ========== */}
            <section className="section section-bureau" id="about">
                <div className="bureau-bg-wrap">
                    <img src="/assets/evidence_bg.webp" alt="" className="bureau-bg-img" aria-hidden="true" width="1440" height="724" />
                    <div className="bureau-bg-overlay" />
                </div>
                <div className="section-inner">
                    <div className="bureau-layout reveal-on-scroll">
                        <div className="bureau-text-col">
                            <span className="section-tag mono">// ORGANIZATION PROFILE</span>
                            <h2 className="section-title">
                                Unknown.<br />
                                <span className="serif-italic">Untraceable.<br />Effective.</span>
                            </h2>
                            <p className="body-text">Kohza does not advertise. We do not list our operatives. We exist to serve a single function: protect premium intellectual property from those who profit from stealing it.</p>
                            <p className="body-text">Our operatives surveil 52+ networks around the clock. We use cryptographic evidence chains, upstream ISP interventions, and zero-warning takedown protocols to permanently neutralize infringement operations.</p>
                            <ul className="bureau-creds">
                                <li><span className="mono bullet">▸</span> Zero-Tolerance Enforcement Policy</li>
                                <li><span className="mono bullet">▸</span> Cryptographic Evidence Chain</li>
                                <li><span className="mono bullet">▸</span> Upstream Network Intervention</li>
                                <li><span className="mono bullet">▸</span> Continuous 24/7 Threat Surveillance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROTOCOL ========== */}
            <section className="section section-protocol" id="protocol">
                <div className="section-inner">
                    <div className="protocol-header reveal-on-scroll">
                        <span className="section-tag mono">// ENFORCEMENT PROTOCOL</span>
                        <h2 className="section-title">The <span className="serif-italic">Protocol</span></h2>
                    </div>
                    <div className="protocol-steps">
                        {[
                            { num: '01', title: 'Scan & Locate', desc: 'Automated systems continuously sweep social platforms, cyberlockers, darknet forums, and encrypted channels for unauthorized reproductions of your assets. Every match is logged with timestamp and URL.' },
                            { num: '02', title: 'Build the Evidence File', desc: 'Each discovery is compiled into a sealed evidence package — cryptographically hashed screenshots, metadata captures, and a full chain of custody. Legally admissible. Court-ready.' },
                            { num: '03', title: 'Strike', desc: 'Compliance notices are issued directly to web hosts, CDN providers, and upstream ISPs. No warnings. Immediate suspension demands on major platforms execute within 2 to 24 hours.' },
                            { num: '04', title: 'Persistent Suppression', desc: 'Every removed asset is fingerprinted. Re-upload attempts across any monitored network trigger an automatic secondary strike — no manual intervention required. The cycle never starts again.' },
                        ].map(step => (
                            <div className="protocol-step reveal-on-scroll" key={step.num}>
                                <div className="step-number mono">{step.num}</div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="section section-intel" id="faq">
                <div className="section-inner">
                    <div className="section-header reveal-on-scroll">
                        <span className="section-tag mono">// INTELLIGENCE BRIEF</span>
                        <h2 className="section-title">Frequently <span className="serif-italic">Asked</span></h2>
                    </div>
                    <Suspense fallback={<div className="faq-skeleton">Loading Protocol Guidelines...</div>}>
                        <FaqAccordion />
                    </Suspense>
                </div>
            </section>

            {/* ========== CONTACT ========== */}
            <section className="section section-contact" id="contact">
                <div className="contact-bg-wrap">
                    <img src="/assets/phone%20on%20table.webp" alt="" className="contact-bg-img" aria-hidden="true" width="1440" height="724" />
                    <div className="contact-bg-overlay" />
                </div>
                <div className="section-inner reveal-on-scroll center-text">
                    <span className="section-tag mono">// INITIATE OPERATION</span>
                    <h2 className="contact-headline">
                        Ready to take back<br />
                        <span className="serif-italic">what is yours?</span>
                    </h2>
                    <p className="contact-sub">Submit your case details securely. We will respond within 24 hours with an operational assessment and next steps.</p>
                    <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="btn btn-red btn-large">Fill The Form</a>
                    <div className="contact-comms mono">
                        SECURE COMMS: <a href="mailto:takedowns@kohza.org">takedowns@kohza.org</a>
                    </div>
                </div>
            </section>
        </>
    )
}
