import { useForm, ValidationError } from '@formspree/react'

/**
 * Compact inline contact form — drop anywhere on the page.
 * Uses the same Formspree endpoint as ContactPage.
 */
export default function QuickContactForm() {
    const [state, handleSubmit] = useForm('xwvngdel')

    if (state.succeeded) {
        return (
            <div className="qcf-success">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="15" stroke="var(--red)" strokeWidth="1.5" />
                    <path d="M9 16.5l5 5 9-10" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="qcf-success-text">Got it — we'll be in touch within 24 hours.</p>
            </div>
        )
    }

    return (
        <form className="qcf" onSubmit={handleSubmit} noValidate>
            <div className="qcf-row">
                <div className="qcf-field">
                    <input
                        id="qcf-name"
                        type="text"
                        name="name"
                        className="qcf-input"
                        placeholder="Your name *"
                        required
                        autoComplete="name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="qcf-err" />
                </div>
                <div className="qcf-field">
                    <input
                        id="qcf-email"
                        type="email"
                        name="email"
                        className="qcf-input"
                        placeholder="Email address *"
                        required
                        autoComplete="email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="qcf-err" />
                </div>
            </div>
            <div className="qcf-row">
                <div className="qcf-field">
                    <input
                        id="qcf-phone"
                        type="tel"
                        name="phone"
                        className="qcf-input"
                        placeholder="Phone (optional)"
                        autoComplete="tel"
                    />
                </div>
                <div className="qcf-field">
                    <select
                        id="qcf-category"
                        name="category"
                        className="qcf-input qcf-select"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled hidden>Select your category *</option>
                        <option value="OnlyFans / Creator">OnlyFans / Creator</option>
                        <option value="Course / Info Product">Course / Info Product</option>
                        <option value="Brand / Corporate">Brand / Corporate</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="qcf-field">
                <textarea
                    id="qcf-message"
                    name="message"
                    className="qcf-input qcf-textarea"
                    placeholder="What do you need help with?"
                    rows={3}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="qcf-err" />
            </div>
            <ValidationError errors={state.errors} className="qcf-err" />

            <div className="qcf-submit-wrap">
                <button type="submit" className="btn btn-red btn-large qcf-submit" disabled={state.submitting}>
                    {state.submitting ? 'Sending…' : 'Send Message'}
                </button>
            </div>
        </form>
    )
}
