import { useEffect } from 'react'
import { motion } from 'framer-motion'
import '../vsl-hybrid.css'

export default function LinkInBioPage() {
    useEffect(() => {
        // Enforce the dark theme on the body
        document.body.className = 'vsl-hybrid-theme'
        window.scrollTo(0, 0)
    }, [])

    // --- ANIMATION VARIANTS --- //
    // Smooth fade up for sections
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, mass: 1 } }
    }

    // Heavy fade for proof numbers
    const popIn = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
    }

    // Orchestrated stagger for the Hero Section
    const heroContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2, // slight delay on load
            },
        },
    }

    const heroItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 25 },
        },
    }

    // Orchestrated stagger for Value Stack/Lists
    const listContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    }

    const listItem = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    }

    return (
        <div className="vsl-hybrid-page">

            {/* --- HERO: THE HOOK --- */}
            <motion.section
                className="vsl-hybrid-hero"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={heroItem} className="vsl-pre-headline">
                    ATTENTION CREATORS: READ THIS BEFORE UPLOADING YOUR NEXT PPV
                </motion.div>

                <motion.h1 variants={heroItem} className="vsl-main-headline">
                    Discover Why Manual DMCAs Are Failing You—And How To Destroy Leaks At The Source
                </motion.h1>

                <motion.p variants={heroItem} className="vsl-sub-headline">
                    Your DMs are flooded with leak reports. You send takedowns. They reupload in hours. It's time to stop playing Whack-A-Mole and start eradicating the infrastructure.
                </motion.p>

                <motion.div
                    variants={heroItem}
                    className="vsl-video-wrapper"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                    <div className="vsl-video-container">
                        <div className="vsl-video-placeholder">
                            <span className="play-icon">▶</span>
                            <span>Click To Watch The Intelligence Briefing</span>
                        </div>
                        {/* <iframe src="IFRAME_URL_HERE" title="VSL" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    </div>
                </motion.div>

                <motion.div variants={heroItem} style={{ marginBottom: '24px' }}>
                    <a
                        href="https://tally.so/r/rjlpyL"
                        target="_blank"
                        rel="noreferrer"
                        className="vsl-cta-btn"
                    >
                        Apply For Protection Now
                        <span className="cta-arrow">→</span>
                    </a>
                </motion.div>

                <motion.div variants={heroItem} className="vsl-guarantee">
                    <span>🔒</span> 256-BIT ENCRYPTED PORTAL • STRICT CONFIDENTIALITY
                </motion.div>
            </motion.section>

            {/* --- BODY COPY: AGITATION & SOLUTION --- */}
            <section className="vsl-body-section">

                {/* THE AGITATION */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
                    <h2>Why Your Current Strategy Is Trapped In The Whack-A-Mole Game</h2>
                    <p>You upload a $20 PPV. Within 24 hours, you get your first DM:</p>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', borderLeft: '2px solid var(--border-subtle)', paddingLeft: '16px' }}>
                        "Hey, I found your content on Reddit."
                    </p>
                    <p>You sigh. You open Reddit. It's there. You fill out a DMCA. Reddit removes it. Victory, right? <strong>Wrong.</strong></p>
                    <p>The same content is now on Telegram. You send another notice. Three days later: removed. But now it's on Discord. Then a forum. Then a private Dropbox link.</p>
                    <p>You're literally playing Whack-A-Mole.</p>

                    <motion.div
                        className="vsl-punchline"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.2 }}
                    >
                        Here's the painful truth: <span className="vsl-editorial-bold">You will never win at this game.</span><br /><br />
                        Because you're fighting in the wrong arena.
                    </motion.div>
                </motion.div>

                {/* THE INVISIBLE ENEMY */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
                    <h3>The Invisible Enemy</h3>
                    <p>Here's what separates creators who stop leaks from creators who just complain about them: <strong>They understand the REAL piracy infrastructure.</strong></p>
                    <p>It's not Reddit. Reddit is window dressing. The real piracy is underground, encrypted, and impossible to find unless you know the exact architecture.</p>

                    <motion.div
                        className="glass-panel"
                        style={{ padding: '32px', margin: '40px 0' }}
                        variants={listContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ul className="vsl-warning-list" style={{ margin: 0 }}>
                            <motion.li variants={listItem} style={{ marginBottom: '32px' }}>
                                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>LAYER 1: Public Platforms</strong>
                                Reddit, TikTok, X. Easy to find, easy to DMCA, reappears in 24 hours. Not the real problem.
                            </motion.li>
                            <motion.li variants={listItem} style={{ marginBottom: '32px' }}>
                                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>LAYER 2: Semi-Private Networks</strong>
                                Discord, VIP Telegram Groups. Harder to find, admins recreate within hours. Still not the root.
                            </motion.li>
                            <motion.li variants={listItem}>
                                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>LAYER 3: The Underground Infrastructure</strong>
                                Mega.nz, Cyberlockers, Private Servers. Hidden from search, operates 24/7 without fear. <br /><br /><span className="vsl-editorial-bold">THIS is where your content is really dying.</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* OBJECTION HANDLING */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
                    <h2>The Lies Costing You Thousands</h2>
                    <p>We've spoken to hundreds of creators. Their objections sound different, but they all come down to three lies. Let's destroy them.</p>

                    <div className="vsl-objection-card glass-panel">
                        <h4>Lie #1: "They're just freebie seekers. They'd never pay."</h4>
                        <p>Our data tracking 10,000+ creator accounts says otherwise. In a survey of a leaked $15/mo creator, 67% of downloaders said: "I wanted to support her, but I had to see if it was worth it first." By allowing the leak, you trained a buyer to become a free consumer.</p>
                        <div className="vsl-editorial-bold" style={{ fontSize: '1.2rem', marginTop: '8px' }}>Real fans look for cheaper options.</div>
                    </div>

                    <div className="vsl-objection-card glass-panel">
                        <h4>Lie #2: "The leak is missing my VIP features."</h4>
                        <p>Neuroscience research shows that getting 80% of the value for free creates the <em>exact same dopamine hit</em> as getting 100% of the value for $20. They get the hit, and they leave without swiping their card.</p>
                    </div>

                    <div className="vsl-objection-card glass-panel">
                        <h4>Lie #3: "Leaks happen. It doesn't damage my brand."</h4>
                        <p>Someone Googles your name. Their first impression? A forum designed in 1998, surrounded by spam links. You are being actively repositioned from a "premium creator" to "cheap content on piracy sites."</p>
                    </div>

                    <div className="vsl-punchline" style={{ marginTop: '64px' }}>
                        The question isn't "Should I solve piracy?"<br /><br />
                        <span className="vsl-editorial-bold">The question is "Why would I NOT solve piracy?"</span>
                    </div>
                </motion.div>

                {/* --- PROOF --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    variants={popIn}
                    className="vsl-proof-box glass-panel"
                >
                    <h3 className="proof-title">Undeniable Proof of Eradication</h3>
                    <p className="proof-subtitle">We don't just talk about stopping leaks. We annihilate them.</p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{ padding: '32px 0' }}
                    >
                        <div className="proof-number"><span>100</span>+</div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '0.05em' }}>PIRATE LISTINGS DESTROYED</div>
                        <div style={{ color: 'var(--text-tertiary)', marginTop: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>In Less Than 5 Days For A Single Creator</div>
                    </motion.div>

                    <div className="vsl-proof-details">
                        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li><strong style={{ color: 'var(--text-primary)' }}>Within 72 hours:</strong> 47 takedowns confirmed across Reddit, Telegram, Mega.</li>
                            <li><strong style={{ color: 'var(--text-primary)' }}>Within 96 hours:</strong> 53 secondary distribution points identified and destroyed.</li>
                            <li><strong style={{ color: 'var(--text-primary)' }}>Average time:</strong> 4.2 days from leak discovery to full infrastructure shutdown.</li>
                        </ul>
                    </div>

                    <div className="vsl-testimonial">
                        <p>"I've been with 3 different DMCA agencies. None of them even KNEW about the Telegram infrastructure. KOHZA didn't just take down my leaks—they educated me on WHERE my content was actually being stolen. In one week, my DMs went from 10+ leak reports per day to zero. I'm actually making money again."</p>
                        <span className="vsl-testimonial-author">— Sarah M., $25K/month PPV Creator</span>
                    </div>
                </motion.div>

                {/* --- THE VALUE STACK --- */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp}>
                    <h2>Here's Exactly How We Stop The Bleed</h2>
                    <motion.div
                        className="glass-panel"
                        style={{ margin: '48px 0', padding: '0', overflow: 'hidden' }}
                        variants={listContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div variants={listItem} className="vsl-value-item">
                            <div className="vsl-value-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div className="vsl-value-text">
                                <h4>API-Level Infrastructure Destruction</h4>
                                <p>We map the infrastructure: cyberlockers, Dropbox, and private servers. We use direct compliance escalations to strike the underlying source files. When we hit a folder, it dies instantly.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={listItem} className="vsl-value-item">
                            <div className="vsl-value-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div className="vsl-value-text">
                                <h4>Encrypted Network Infiltration</h4>
                                <p>We infiltrate closed networks (Telegram, Discord) and extract the raw message IDs to trigger permanent bans on pirate rings.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={listItem} className="vsl-value-item">
                            <div className="vsl-value-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div className="vsl-value-text">
                                <h4>Revenue Recovery Automation</h4>
                                <p>By eradicating the source, every single pirate link pointing to it shatters simultaneously, forcing true fans back to your paywall where they belong.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* THE GHOST PROTOCOL */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginTop: '80px', padding: '40px', borderLeft: '4px solid var(--accent-red)', background: 'var(--bg-surface-elevated)' }}
                >
                    <h3 style={{ marginTop: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>The "Ghost Protocol" Guarantee</h3>
                    <p style={{ marginBottom: 0 }}>Will your fans know you hired an agency? No. KOHZA operates entirely as a ghost protocol. We do not engage with consumers directly, we only strike the infrastructure. Your premium brand remains completely insulated while we do the dirty work.</p>
                </motion.div>

            </section>

            {/* --- FOOTER CTA --- */}
            <motion.footer
                className="vsl-footer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20, staggerChildren: 0.1 } }
                }}
            >
                <motion.h2 variants={heroItem}>The True Cost Of Waiting.</motion.h2>
                <motion.p variants={heroItem} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 48px', color: 'var(--text-secondary)' }}>
                    Every month you wait is another <strong style={{ color: 'var(--text-primary)' }}>$3,000 to $60,000</strong> bled to pirates, another month of training your fans to expect your content for free, and another month of permanent brand damage.
                </motion.p>

                <motion.div variants={heroItem} style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="https://tally.so/r/rjlpyL"
                        target="_blank"
                        rel="noreferrer"
                        className="vsl-cta-btn"
                        style={{ marginBottom: '24px' }}
                    >
                        Apply For Protection Now
                        <span className="cta-arrow">→</span>
                    </a>
                </motion.div>

                <motion.div variants={heroItem} className="vsl-guarantee" style={{ marginBottom: '40px' }}>
                    <span>🔒</span> SECURE TALLY INTAKE FORM
                </motion.div>

                <motion.div variants={heroItem} style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontFamily: 'var(--font-heading)' }}>
                    Intelligence-Grade Piracy Eradication. © KOHZA
                </motion.div>
            </motion.footer>
        </div>
    )
}
