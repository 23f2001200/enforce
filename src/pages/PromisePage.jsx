import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const QuickContactForm = lazy(() => import('../components/QuickContactForm'))

export default function PromisePage() {
    useScrollReveal()

    return (
        <>
            <Helmet>
                <title>Our Promise & Methodology | KOHZA</title>
                <meta name="description" content="We don't just hide links from Google; we remove pirated content from the source server. Review our digital enforcement promise here." />
            </Helmet>

            <div className="scanlines" aria-hidden="true" />

            <h1 className="sr-only">Our Promise: Permanent Takedown of Pirated Content</h1>

            {/* ========== HERO with bg image + promise text ========== */}
            <header className="promise-header">
                {/* Background image */}
                <div className="promise-bg-wrap">
                    <img
                        src="/assets/hyper-promise.jpeg"
                        alt=""
                        className="promise-bg-img"
                        aria-hidden="true"
                    />
                    <div className="promise-bg-overlay" />
                </div>

                <div className="promise-header-inner reveal-on-scroll">
                    <div className="case-file-tag" style={{ marginBottom: '2rem' }}>
                        <span className="mono" style={{ color: 'var(--red)' }}>KOHZA — OUR PROMISE</span>
                    </div>

                    <h2 className="promise-title">
                        Our<br />
                        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--red)' }}>Promise.</span>
                    </h2>

                    <div className="promise-content">
                        <p>When it comes down to it, there is only one thing that matters: <strong style={{ color: '#fff' }}>results.</strong></p>

                        <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 500 }}>
                            Can you or can you not remove the links sharing my content?
                        </p>

                        <p>
                            The answer should be simple. But most companies in this space give you vague answers while hiding a dirty secret — they remove the link from Google search results, but your content is still sitting live on the server. Nothing actually got taken down.
                        </p>

                        <p>We do things differently. Here is our promise:</p>

                        <div className="promise-quote">
                            "If a website is hosting your course on their own server, or has listed your product on their website without permission — we will get it removed from the source. Completely gone. Not just hidden. Actually deleted."
                        </div>

                        <p>We are specifically focused on two situations:</p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>Direct hosting</strong> — a website has your course files uploaded on their own servers and is distributing them for free or for a price.</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>Unauthorized listings</strong> — a website has put your course or product up for sale without your permission.</li>
                        </ul>

                        <p>In both cases, we go after the source. We contact the host, the registrar, and whoever needs to be contacted to get that content pulled from the internet permanently.</p>

                        <p>We do not make this promise lightly. Every situation is different. Some removals happen in hours. Others take longer. But we have seen enough and done enough to know that we will get the job done.</p>
                    </div>
                </div>
            </header>

            {/* ========== CONTACT ========== */}
            <section className="section section-contact" id="contact" style={{ paddingTop: '20px' }}>
                <div className="contact-bg-wrap" style={{ height: '100%' }}>
                    <img
                        src="/assets/-ultra-photoreal-cinematic-portrait-website-hero-b.jpeg"
                        alt=""
                        className="contact-bg-img"
                        aria-hidden="true"
                        style={{ opacity: 0.15 }}
                    />
                    <div className="contact-bg-overlay" style={{ background: 'linear-gradient(to top, var(--bg-body), transparent)' }} />
                </div>
                <div className="section-inner reveal-on-scroll center-text">
                    <h2 className="contact-headline">
                        Ready to take back<br />
                        <span className="serif-italic">what is yours?</span>
                    </h2>
                    <p className="contact-sub">Submit your case details securely. We will respond within 24 hours with an operational assessment and next steps.</p>

                    <div style={{ marginTop: '40px', textAlign: 'left' }}>
                        <Suspense fallback={<div className="faq-skeleton center-text">Loading Secure Form...</div>}>
                            <QuickContactForm />
                        </Suspense>
                    </div>
                    <div className="contact-comms mono">
                        SECURE COMMS: <a href="mailto:contact@kohza.in">contact@kohza.in</a>
                    </div>
                </div>
            </section>

            <style>{`
                .promise-header {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    padding-top: 80px; /* navbar height */
                }
                .promise-bg-wrap {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .promise-bg-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 30%;
                    filter: brightness(0.3) contrast(1.1);
                    opacity: 0.5;
                }
                .promise-bg-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to bottom,
                        rgba(5,5,8,0.4) 0%,
                        rgba(5,5,8,0.7) 50%,
                        rgba(5,5,8,0.95) 85%,
                        var(--bg-body, #060608) 100%
                    );
                }
                .promise-header-inner {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 80px 24px 100px;
                    width: 100%;
                }
                .promise-title {
                    font-size: clamp(3rem, 7vw, 5rem);
                    line-height: 1.05;
                    margin-bottom: 3rem;
                    color: #fff;
                }
                .promise-content {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                }
                .promise-content p { margin-bottom: 1.5rem; }
                .promise-quote {
                    border-left: 2px solid var(--red);
                    padding-left: 1.5rem;
                    margin: 3rem 0;
                    font-size: 1.3rem;
                    color: #fff;
                    font-style: italic;
                    font-family: 'Playfair Display', serif;
                }
                @media (max-width: 768px) {
                    .promise-header { min-height: auto; padding-top: 100px; }
                    .promise-title { font-size: 2.5rem; }
                    .promise-header-inner { padding: 40px 20px 80px; }
                }
            `}</style>
        </>
    )
}
