export const platforms = {
    telegram: {
        id: 'telegram',
        name: 'Telegram',
        title: 'Telegram Leak Removal & Channel Takedown Services',
        description: 'KOHZA specializes in shutting down unauthorized Telegram mega-groups, leak channels, and bot-operated distribution rings that distribute your copyrighted private content.',
        stats: { time: '<24H', rate: '98%' },
        threats: [
            'Mega-groups distributing leaked OFM content',
            'Bot networks selling access to private course files',
            'Channel admins ignoring standard manual DMCA requests'
        ],
        solutions: [
            'Direct line to Telegram abuse teams for rapid channel unpublishing',
            'Automated scraper deployment to track new leaks as they appear',
            'Network-level interventions against repeat offenders'
        ],
        heroBg: '/assets/evidence/3.png'
    },
    instagram: {
        id: 'instagram',
        name: 'Instagram',
        title: 'Instagram Impersonator Removal & DMCA Services',
        description: 'We execute rapid takedowns of catfish accounts, fraudulent business profiles, and copyright-infringing content on Instagram that steals your revenue.',
        stats: { time: '<12H', rate: '99%' },
        threats: [
            'Fake profiles impersonating you or your brand',
            'Accounts selling your courses without authorization',
            'Unauthorized reshares of your premium visual content'
        ],
        solutions: [
            'Priority escalation to Meta IP and Brand Rights teams',
            'Immediate account suspension for serial impersonators',
            'Continuous monitoring for newly created fake profiles'
        ],
        heroBg: '/assets/evidence/2.jpg'
    },
    onlyfans: {
        id: 'onlyfans',
        name: 'OnlyFans',
        title: 'Protect Your PPVs. Wipe OnlyFans Leaks from the Web.',
        description: 'Your premium content belongs behind a paywall. We aggressively track, fingerprint, and eradicate leaked exclusivity across Reddit, Mega, and offshore cyberlockers so you stop losing subscribers.',
        stats: { time: '<24H', rate: '97%' },
        threats: [
            'Subscribers ripping & freely distributing $50+ PPV content',
            'Organized scraper bots auto-posting your sets to free adult forums',
            'Viral Reddit threads stealing traffic that should be converting'
        ],
        solutions: [
            'Automated DMCA takedowns hitting cyberlockers at the source',
            'Subreddit infiltration to nuke leak threads and ban offenders',
            'Continuous cryptographic monitoring to instantly catch re-uploads'
        ],
        heroBg: '/assets/of-blue-neon.jpg',
        accentColor: '#00AFF0',
        accentGlow: 'rgba(0, 175, 240, 0.4)',
        evidence: [
            '/assets/of-evidence/of1.png',
            '/assets/of-evidence/of2.png',
            '/assets/of-evidence/of3.png',
            '/assets/of-evidence/of4.png',
            '/assets/of-evidence/of5.png',
            '/assets/of-evidence/of6.png',
            '/assets/of-evidence/of7.png'
        ]
    },
    discord: {
        id: 'discord',
        name: 'Discord',
        title: 'Discord Server Takedown & Course Leak Removal',
        description: 'We infiltrate and dismantle unauthorized Discord trading servers and private groups distributing your high-ticket courses and intellectual property.',
        stats: { time: '<48H', rate: '96%' },
        threats: [
            'Private servers trading stolen course archives',
            'Group buys organized to bypass your paywalls',
            'Communities actively sharing leaked software and tools'
        ],
        solutions: [
            'Deep reconnaissance into invite-only Discord communities',
            'Direct server takedown escalations via Discord Trust & Safety',
            'Identification and permanent bans for the original leakers'
        ],
        heroBg: '/assets/evidence/1.jpg'
    },
    mega: {
        id: 'mega',
        name: 'MEGA.nz',
        title: 'MEGA.nz Folder Takedown & Cyberlocker Removal',
        description: 'We specialize in issuing compliant, un-ignorable DMCA takedowns against MEGA.nz folders, Google Drive links, and offshore cyberlockers hosting your content.',
        stats: { time: '<2H', rate: '99%' },
        threats: [
            'Massive structured folders of your premium course modules',
            'Terabytes of leaked creator content hosted anonymously',
            'Links distributed freely across the open web'
        ],
        solutions: [
            'Automated API-level DMCA takedown submissions',
            'Persistent link invalidation to break the distribution chain',
            'Upstream registrar interventions for bulletproof offshore hosts'
        ],
        heroBg: '/assets/a-hyperrealistic-cinematic-shot-of-glowing-server-.jpeg'
    },
    reddit: {
        id: 'reddit',
        name: 'Reddit',
        title: 'Reddit Leak Removal & Thread Takedown Services',
        description: 'We track and remove unauthorized links, deepfakes, and pirated materials shared across niche Reddit communities and piracy subreddits.',
        stats: { time: '<12H', rate: '98%' },
        threats: [
            'Dedicated subreddits built entirely around leaking content',
            'Viral threads distributing your courses to thousands',
            'Users organizing group buys in the comments'
        ],
        solutions: [
            'Subreddit-level escalation for repeated copyright infringement',
            'Rapid thread and comment deletion via Reddit Legal',
            'Monitoring competitor subreddits for secondary leaks'
        ],
        heroBg: '/assets/pirate-forums.png'
    }
};

export const getAllPlatforms = () => Object.values(platforms);
export const getPlatformById = (id) => platforms[id.toLowerCase()];
