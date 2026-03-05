import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LinkInBioOfmPage() {
    const [showCta, setShowCta] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)

        // Delay the CTA reveal to ensure they read the hook
        const timer = setTimeout(() => {
            setShowCta(true)
        }, 3500)

        return () => clearTimeout(timer)
    }, [])

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="funnel-container long-form ofm-theme"
        >
            <div className="funnel-navbar">
                <span className="logo-bracket">[</span>KOHZA<span className="logo-bracket">]</span>
            </div>

            <div className="funnel-progress">
                <div className="progress-text">Step 2 of 2: Threat Analysis</div>
                <div className="progress-track">
                    <motion.div
                        initial={{ width: "50%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                        className="progress-fill"
                    />
                </div>
            </div>

            <div className="funnel-hero">
                <div className="badge-alert blinking-alert">
                    <span className="blink-dot"></span> LIVE LEAKS DETECTED
                </div>
                <h1 className="funnel-headline">Your PPVs Are Being Traded Right Now.</h1>
                <h2 className="funnel-subheadline">(You just can't see them.)</h2>
            </div>

            <div className="funnel-body">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <p>You probably check Reddit and Twitter. You report the links you find. You think your paywall is holding.</p>
                    <p className="highlight-text">But the real piracy is invisible. It's off-grid.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>The Telegram Mega-Group Problem</h3>
                    <p>Your $50 PPVs are currently sitting in encrypted Telegram mega-groups with 15,000+ members who are trading them for free. When you drop a new set, bot networks automatically scrape it and mirror it across the dark web within 15 minutes.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>Manual DMCAs Fail Here.</h3>
                    <p>You can't send a standard DMCA form to an encrypted chat network. You are bleeding subscriber revenue every single hour your content remains in these unregulated zones.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className="stats-box">
                    <div className="stat">
                        <span className="stat-number">36%</span>
                        <span className="stat-label">Of leaks found by creators manually.</span>
                    </div>
                    <div className="stat highlight">
                        <span className="stat-number">94%+</span>
                        <span className="stat-label">Of leaks found & destroyed by KOHZA.</span>
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>We Strike The Infrastructure.</h3>
                    <p>KOHZA doesn't play whack-a-mole. We use direct compliance escalations to infiltrate these closed networks, extract the raw message IDs, and strike the underlying infrastructure to trigger permanent bans.</p>
                    <p className="final-pitch">Your content is your livelihood. We are the intelligence unit that protects it.</p>
                </motion.div>
            </div>

            <AnimatePresence>
                {showCta && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="funnel-sticky-cta"
                    >
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="funnel-btn primary-btn pulse-btn">
                            Stop The Bleed. Open A Case.
                        </a>
                        <div className="security-lock">
                            <span className="lock-icon">🔒</span> 256-Bit Encrypted Portal.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

