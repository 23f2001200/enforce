import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LinkInBioEduPage() {
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
            className="funnel-container long-form edu-theme"
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
                <div className="badge-alert edu-alert blinking-alert">
                    <span className="blink-dot"></span> INTELLECTUAL PROPERTY THEFT
                </div>
                <h1 className="funnel-headline">Your $997 Course Was Just Downloaded For Free.</h1>
            </div>

            <div className="funnel-body">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <p>You spent 6 months building your flagship course. You launched it. You made sales.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>The Group-Buy Nightmare</h3>
                    <p>But here is what actually happened: One person bought it. They scraped all 40 of your modules. Now, your life's work is sitting in a 50GB MEGA.nz folder, being distributed in private Discord "group-buy" servers where hundreds of people chip in $5 to steal your $997 product.</p>
                    <p className="highlight-text">Every time that MEGA link is shared, a student who would have paid you full price downloads it for free.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>Why Your Takedowns Bounce</h3>
                    <p>Sending a manual DMCA to a forum post does nothing if the underlying MEGA.nz folder is still live. The pirates just generate a new link to the same folder and laugh.</p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className="stats-box edu-stats">
                    <div className="stat">
                        <span className="stat-number">1 Sale</span>
                        <span className="stat-label">Results in 400+ pirated downloads on average.</span>
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}>
                    <h3>The API-Level Killswitch.</h3>
                    <p>KOHZA doesn't use public web forms. We utilize direct API-level escalations through established legal entities to strike the underlying source files on offshore cyberlockers. When we hit a MEGA folder, it dies instantly — and every single pirate link pointing to it shatters simultaneously.</p>
                    <p className="final-pitch">Stop letting them devalue your expertise.</p>
                </motion.div>
            </div>

            <AnimatePresence>
                {showCta && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="funnel-sticky-cta"
                    >
                        <a href="https://tally.so/r/rjlpyL" target="_blank" rel="noreferrer" className="funnel-btn primary-btn edu-btn pulse-btn">
                            Protect Your IP. Open A Case.
                        </a>
                        <div className="security-lock" style={{ color: '#5865F2' }}>
                            <span className="lock-icon">🔒</span> 256-Bit Encrypted Portal.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

