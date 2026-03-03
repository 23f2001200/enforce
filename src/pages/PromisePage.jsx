import { useScrollReveal } from '../hooks/useScrollReveal'

export default function PromisePage() {
    useScrollReveal()

    return (
        <>
            <div className="scanlines" aria-hidden="true" />

            <main className="promise-hero reveal-on-scroll">
                <div className="case-file-tag" style={{ marginBottom: '2rem' }}>
                    <span className="mono" style={{ color: 'var(--red)' }}>KOHZA // OUR PROMISE</span>
                </div>

                <h1 className="promise-title">
                    Our<br />
                    <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--red)' }}>Promise.</span>
                </h1>

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
            </main>

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
                    <span className="section-tag mono">// SECURE YOUR ASSETS</span>
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

            <style>{`
        .promise-hero {
          padding: 180px 24px 80px;
          max-width: 800px;
          margin: 0 auto;
        }
        .promise-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 2rem;
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
          .promise-hero { padding: 120px 20px 60px; }
          .promise-title { font-size: 2.5rem; }
        }
      `}</style>
        </>
    )
}
