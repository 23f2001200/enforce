import { Helmet } from 'react-helmet-async'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'

function ContactForm() {
    const [state, handleSubmit] = useForm('xwvngdel')

    if (state.succeeded) {
        return (
            <div className="cp-success">
                <svg className="cp-success-check" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                    <circle cx="26" cy="26" r="25" stroke="var(--red)" strokeWidth="1.5" />
                    <path d="M15 26.5l8 8 14-15" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="cp-success-title">We'll be in touch.</h2>
                <p className="cp-success-body">
                    Your message landed safely. Expect a reply within 24 hours.
                </p>
                <a href="mailto:contact@kohza.in" className="cp-email-chip">
                    contact@kohza.in
                </a>
            </div>
        )
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit} className="cp-form" noValidate>
            <div className="cp-row cp-row-two">
                <div className="cp-field">
                    <label htmlFor="name" className="cp-label">Name <span className="cp-req">*</span></label>
                    <input id="name" type="text" name="name" className="cp-input" placeholder="Your name" required autoComplete="name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="cp-err" />
                </div>
                <div className="cp-field">
                    <label htmlFor="phone" className="cp-label">Phone <span className="cp-opt">optional</span></label>
                    <input id="phone" type="tel" name="phone" className="cp-input" placeholder="+1 (555) 000-0000" autoComplete="tel" />
                </div>
            </div>

            <div className="cp-field">
                <label htmlFor="email" className="cp-label">Email <span className="cp-req">*</span></label>
                <input id="email" type="email" name="email" className="cp-input" placeholder="you@example.com" required autoComplete="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="cp-err" />
            </div>

            <div className="cp-field">
                <label htmlFor="message" className="cp-label">Message <span className="cp-req">*</span></label>
                <textarea id="message" name="message" className="cp-input cp-textarea" rows={5} placeholder="Tell us what's going on…" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="cp-err" />
            </div>

            <ValidationError errors={state.errors} className="cp-err" />

            <button type="submit" id="contact-submit-btn" className="cp-submit" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send Message →'}
            </button>
        </form>
    )
}

export default function ContactPage() {
    useEffect(() => {
        const prev = document.body.style.background
        document.body.style.background = '#161616'
        return () => { document.body.style.background = prev }
    }, [])

    return (
        <>
            <Helmet>
                <title>Contact Us | KOHZA</title>
                <meta name="description" content="Get in touch with KOHZA. Report pirated content or ask about our takedown services. We respond within 24 hours." />
            </Helmet>

            <div className="scanlines" aria-hidden="true" />
            <h1 className="sr-only">Contact KOHZA</h1>

            <div className="cp-page">
                {/* ── LEFT PANEL ── */}
                <div className="cp-left">
                    <div className="cp-left-inner">
                        <p className="cp-eyebrow mono">KOHZA — GET IN TOUCH</p>
                        <h2 className="cp-headline">
                            Let's talk.
                        </h2>
                        <p className="cp-desc">
                            Whether you've found pirated content, need a platform takedown, or just want to know how we can help — drop us a message and we'll get back to you within 24 hours.
                        </p>

                        <div className="cp-divider" />

                        <div className="cp-contact-options">
                            <a href="mailto:contact@kohza.in" className="cp-contact-row">
                                <span className="cp-contact-icon" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </span>
                                <span>
                                    <span className="cp-contact-label">Email us directly</span>
                                    <span className="cp-contact-value">contact@kohza.in</span>
                                </span>
                            </a>

                            <div className="cp-contact-row cp-no-hover">
                                <span className="cp-contact-icon" aria-hidden="true">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </span>
                                <span>
                                    <span className="cp-contact-label">Response time</span>
                                    <span className="cp-contact-value">Within 24 hours</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL / FORM ── */}
                <div className="cp-right">
                    <div className="cp-form-wrap">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <style>{`
                /* ── PAGE SHELL ── */
                .cp-page {
                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background: #161616;
                }

                /* ── LEFT ── */
                .cp-left {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 120px 64px 80px;
                    background: #111;
                    border-right: 1px solid rgba(255,255,255,0.07);
                }
                .cp-left-inner {
                    max-width: 420px;
                    width: 100%;
                }
                .cp-eyebrow {
                    font-size: 0.7rem;
                    letter-spacing: 0.15em;
                    color: var(--red);
                    margin-bottom: 20px;
                }
                .cp-headline {
                    font-size: clamp(2.8rem, 5vw, 4.2rem);
                    font-weight: 400;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    color: #fff;
                    margin-bottom: 20px;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                }
                .cp-desc {
                    font-size: 1rem;
                    line-height: 1.75;
                    color: #999;
                    margin-bottom: 0;
                }
                .cp-divider {
                    height: 1px;
                    background: rgba(255,255,255,0.07);
                    margin: 36px 0;
                }
                .cp-contact-options {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .cp-contact-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 20px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 4px;
                    text-decoration: none;
                    transition: background 200ms, border-color 200ms;
                    cursor: pointer;
                }
                .cp-contact-row:not(.cp-no-hover):hover {
                    background: rgba(204,0,0,0.06);
                    border-color: rgba(204,0,0,0.2);
                }
                .cp-contact-row:not(.cp-no-hover):hover .cp-contact-icon {
                    color: var(--red);
                }
                .cp-no-hover { cursor: default; }
                .cp-contact-icon {
                    color: #555;
                    flex-shrink: 0;
                    transition: color 200ms;
                }
                .cp-contact-label {
                    display: block;
                    font-size: 0.72rem;
                    letter-spacing: 0.06em;
                    color: #555;
                    text-transform: uppercase;
                    margin-bottom: 3px;
                }
                .cp-contact-value {
                    display: block;
                    font-size: 0.92rem;
                    color: #ddd;
                }

                /* ── RIGHT / FORM ── */
                .cp-right {
                    display: flex;
                    align-items: center;
                    padding: 120px 64px 80px;
                    background: #161616;
                }
                .cp-form-wrap {
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                }

                /* ── FORM ── */
                .cp-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .cp-row-two {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                .cp-field {
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }
                .cp-label {
                    font-size: 0.85rem;
                    color: #aaa;
                    font-weight: 500;
                }
                .cp-req { color: var(--red); }
                .cp-opt {
                    font-size: 0.75rem;
                    color: #555;
                    font-weight: 400;
                }
                .cp-input {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 4px;
                    color: #eee;
                    font-family: var(--font-sans);
                    font-size: 0.95rem;
                    padding: 13px 16px;
                    outline: none;
                    transition: border-color 180ms, background 180ms, box-shadow 180ms;
                    -webkit-appearance: none;
                    appearance: none;
                }
                .cp-input::placeholder { color: #444; }
                .cp-input:focus {
                    border-color: rgba(204,0,0,0.45);
                    background: rgba(255,255,255,0.07);
                    box-shadow: 0 0 0 3px rgba(204,0,0,0.08);
                }
                .cp-textarea {
                    resize: vertical;
                    min-height: 130px;
                    line-height: 1.65;
                }
                .cp-err {
                    font-size: 0.78rem;
                    color: var(--red);
                }
                .cp-submit {
                    width: 100%;
                    padding: 15px 24px;
                    background: var(--red);
                    color: #fff;
                    border: 1px solid var(--red);
                    border-radius: 4px;
                    font-family: var(--font-sans);
                    font-size: 1rem;
                    font-weight: 600;
                    letter-spacing: 0.01em;
                    cursor: pointer;
                    transition: background 200ms, box-shadow 200ms, transform 150ms;
                    margin-top: 4px;
                }
                .cp-submit:hover:not(:disabled) {
                    background: #a80000;
                    box-shadow: 0 4px 20px rgba(204,0,0,0.35);
                    transform: translateY(-1px);
                }
                .cp-submit:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }

                /* ── SUCCESS ── */
                .cp-success {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 8px 0;
                }
                .cp-success-check {
                    animation: cp-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
                }
                @keyframes cp-pop {
                    from { opacity: 0; transform: scale(0.7); }
                    to   { opacity: 1; transform: scale(1); }
                }
                .cp-success-title {
                    font-size: 2rem;
                    font-weight: 400;
                    letter-spacing: -0.02em;
                    color: #fff;
                    margin: 0;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                }
                .cp-success-body {
                    font-size: 1rem;
                    color: #999;
                    line-height: 1.7;
                    margin: 0;
                }
                .cp-email-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 100px;
                    font-size: 0.85rem;
                    color: #bbb;
                    text-decoration: none;
                    transition: border-color 200ms, color 200ms;
                    margin-top: 4px;
                }
                .cp-email-chip:hover {
                    border-color: rgba(204,0,0,0.35);
                    color: #fff;
                }

                /* ── RESPONSIVE ── */
                @media (max-width: 860px) {
                    .cp-page {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }
                    .cp-left {
                        padding: 110px 32px 48px;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.07);
                    }
                    .cp-left-inner { max-width: 100%; }
                    .cp-right { padding: 48px 32px 80px; }
                    .cp-form-wrap { max-width: 100%; }
                }
                @media (max-width: 520px) {
                    .cp-left { padding: 100px 22px 40px; }
                    .cp-right { padding: 40px 22px 70px; }
                    .cp-row-two {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
            `}</style>
        </>
    )
}
