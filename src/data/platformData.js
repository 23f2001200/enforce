export const platforms = {
    telegram: {
        id: 'telegram',
        name: 'Telegram',
        title: 'There Is A Channel Leaking You Right Now. We Kill It.',
        headlineMain: 'There Is A Channel Leaking You Right Now.',
        headlineSub: 'We Kill It.',
        description: 'Telegram\'s encrypted architecture makes it the #1 platform for organized content piracy. Mega-groups with thousands of members are trading your exclusive content for free right now — and standard DMCA requests bounce off. KOHZA has the direct escalation channels to shut them down hard and fast.',
        stats: { time: '<24H', rate: '98%' },
        threats: [
            'Encrypted mega-groups of 10,000+ members trading your PPVs for free',
            'Bot channels auto-posting new leaks the moment your content drops',
            'Channel admins going dark — ignoring every manual DMCA you send'
        ],
        solutions: [
            'Direct line to Telegram\'s abuse team — we bypass the public form entirely',
            'Channel-wide unpublishing, not just post deletion — the whole operation goes down'
        ],
        impact: [
            { value: '$15k+', label: 'Avg Monthly Revenue Recovered' },
            { value: '8.4k', label: 'Pirate Users Banned Per Sweep' },
            { value: '100%', label: 'Hash-Matched Re-uploads Blocked' }
        ],
        faq: [
            { q: 'Can you take down private, invite-only Telegram groups?', a: 'Absolutely. Our operatives infiltrate closed and premium-only leak groups to extract the raw message IDs and file hashes required for infrastructure-level deletion.' },
            { q: 'Will the leakers know who reported them?', a: 'No. All escalations are executed through KOHZA\'s proprietary legal entities. Your identity and brand remain completely anonymous and shielded from retaliation.' },
            { q: 'What if they just create a backup channel?', a: 'Telegram pirates always have backups. That’s why we don\'t just delete the messages — we strike the channel itself to trigger a permanent ban, and log your file hashes to auto-flag any future uploads instantly.' }
        ],
        heroBg: '/assets/evidence/3.png',
        accentColor: '#229ED9',
        accentGlow: 'rgba(34, 158, 217, 0.4)'
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
        impact: [
            { value: '2.5M+', label: 'Fake Followers Redirected' },
            { value: '11k+', label: 'Impersonators Suspended' },
            { value: '<12H', label: 'Average Meta Escalation Time' }
        ],
        faq: [
            { q: 'What if the impersonator blocks me so I can\'t see their profile?', a: 'Our systems don\'t rely on your personal account. We monitor the platform from independent nodes and use reverse-image searching to find fake profiles even if they\'ve blocked the original creator.' },
            { q: 'Can you get the usernames back?', a: 'Once an impersonator is suspended, the handle typically enters a cooldown period. We can provide guidance on claiming the handle through official Meta channels once it becomes available.' },
            { q: 'They keep making new accounts. How do you stop this?', a: 'Serial impersonators are escalated to Meta\'s legal teams for device-level and IP-level bans, preventing them from creating new accounts on the platform.' }
        ],
        heroBg: '/assets/instagram-hero-bg.jpeg',
        accentColor: '#E1306C',
        accentGlow: 'rgba(225, 48, 108, 0.4)',
        evidence: [
            '/assets/instagram-downs/ig1.jpg',
            '/assets/instagram-downs/ig2.jpg',
            '/assets/instagram-downs/ig3.jpg',
            '/assets/instagram-downs/ig4.jpg',
            '/assets/instagram-downs/ig5.jpg',
            '/assets/instagram-downs/ig6.jpg',
            '/assets/instagram-downs/ig7.jpg',
            '/assets/instagram-downs/ig8.jpg',
            '/assets/instagram-downs/ig9.jpg',
            '/assets/instagram-downs/ig10.jpg',
            '/assets/instagram-downs/ig11.jpg',
            '/assets/instagram-downs/ig12.jpg',
            '/assets/instagram-downs/ig13.jpg',
            '/assets/instagram-downs/ig14.jpg',
            '/assets/instagram-downs/ig15.jpg'
        ]
    },
    onlyfans: {
        id: 'onlyfans',
        name: 'OnlyFans',
        title: 'You Are Actively Being Leaked. Let Us Stop The Bleed.',
        headlineMain: 'You Are Actively Being Leaked.',
        headlineSub: 'Let Us Stop The Bleed.',
        description: 'Even if you haven\'t seen it, your premium PPVs and subscription content are actively being traded on pirate forums and cyberlockers right now. Every day your content remains free, you are losing paying subscribers. We are the specialists who find the invisible leaks and eradicate them immediately.',
        stats: { time: '<24H', rate: '97%' },
        threats: [
            'Invisible piracy: Your PPVs are being traded right now by people who will never pay you',
            'Revenue bleed: Potential fans are Googling your name and finding your content for free',
            'Viral Reddit threads & encrypted Megas bypassing your paywall daily'
        ],
        solutions: [
            'We are the specialists: Immediate, host-level takedowns against offshore cyberlockers',
            'Continuous cryptographic hashing ensures deleted leaks stay dead permanently'
        ],
        impact: [
            { value: '2.5x', label: 'Average Subscriber Growth Post-Cleanup' },
            { value: '0.9TB', label: 'Avg Pirated Content Removed Per Creator' },
            { value: '24/7', label: 'Continuous Dark Web Monitoring' }
        ],
        faq: [
            { q: 'My leaks are spread across dozens of different forums. Can you get them all?', a: 'Yes. We don\'t rely on manual searching. Our proprietary scraping engines map the entire distribution tree across Cyberlockers, Reddit, Telegram, and dark web forums simultaneously.' },
            { q: 'How long until my stolen content is actually gone?', a: 'The majority of high-traffic surface links are neutralized within 12-24 hours. Deep web and offshore cyberlockers take slightly longer due to host evasion tactics, but we pursue them relentlessly until destruction.' },
            { q: 'Do I need to keep sending you links to take down?', a: 'No. After onboarding, you provide us with your source content. We fingerprint it and our systems automatically hunt down and destroy matching files across the web without you needing to lift a finger.' }
        ],
        heroBg: '/assets/of-hero-bg.jpeg',
        accentColor: '#00AFF0',
        accentGlow: 'rgba(0, 175, 240, 0.4)',
        evidenceHeadline: 'Proof that your content is being actively leaked in mass.',
        evidenceBadge: 'ACTIVE LEAKS',
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
        title: 'Your Content Is Being Traded On Discord Right Now. We Shut It Down.',
        headlineMain: 'Your Content Is Being Traded On Discord Right Now.',
        headlineSub: 'We Shut It Down.',
        description: 'Invite-only Discord servers are the #1 black market for stolen courses, pirated software, and leaked intellectual property. Thousands of members share your high-ticket content for free behind closed doors — and you have no idea it\'s happening. KOHZA infiltrates, identifies, and permanently dismantles these operations.',
        stats: { time: '<48H', rate: '96%' },
        threats: [
            'Invite-only servers with thousands of members trading your courses for free — completely invisible to you',
            'Organised group buys pooling money to buy your content once and distribute it to hundreds',
            'Bot-automated channel archives that mirror every new release you drop within minutes'
        ],
        solutions: [
            'Deep undercover reconnaissance into private, invite-only Discord communities',
            'Permanent platform bans for the original leakers so they cannot rebuild elsewhere'
        ],
        impact: [
            { value: '96%', label: 'Server Infiltration Success Rate' },
            { value: '48H', label: 'Average Server Deletion Time' },
            { value: 'Zero', label: 'Traceability Back To You' }
        ],
        faq: [
            { q: 'How do you get into locked Discord servers?', a: 'We maintain a highly developed network of undercover accounts and automated infiltration bots that gain access to gated piracy communities, bypassing verification walls to extract actionable server IDs and message links.' },
            { q: 'Isn\'t it impossible to ban a Discord server just for sharing links?', a: 'If you use their generic public forms, yes. KOHZA utilizes direct Trust & Safety escalation channels. We don\'t report links; we compile comprehensive dossiers of systemic TOS violations that force Discord to nuke the entire server.' },
            { q: 'Will my students/customers know I hired you?', a: 'No. Our operations are entirely stealth. We operate as an independent cybersecurity entity enforcing copyright, keeping your brand\'s relationship with your community untainted.' }
        ],
        heroBg: '/assets/discord-background.jpeg',
        accentColor: '#5865F2',
        accentGlow: 'rgba(88, 101, 242, 0.4)'
    },
    mega: {
        id: 'mega',
        name: 'MEGA.nz',
        title: 'Your Content Has A MEGA Folder. We\'ll Delete It In Under 24 Hours.',
        headlineMain: 'Your Content Has A MEGA Folder.',
        headlineSub: 'We\'ll Delete It In Under 24 Hours.',
        description: 'MEGA.nz is the world\'s most popular piracy infrastructure — end-to-end encrypted, anonymous, and nearly immune to standard DMCA routes. Stolen courses, creator content, and software are stored here in terabyte folders and shared openly. Standard takedowns bounce. KOHZA doesn\'t use the standard route.',
        stats: { time: '<24H', rate: '99%' },
        threats: [
            'Neatly organised 50GB+ folders of your full course library shared publicly with zero friction',
            'Anonymous encrypted hosting that ignores standard DMCA requests completely',
            'Links to your MEGA folders spread across forums, Reddit, and private Telegrams simultaneously'
        ],
        solutions: [
            'We bypass the public form — direct API-level DMCA submissions that MEGA\'s trust team cannot ignore',
            'Upstream registrar intervention for re-uploads so the same content cannot be re-hosted'
        ],
        impact: [
            { value: '50GB+', label: 'Avg Folder Size Destroyed' },
            { value: 'API', label: 'Direct Platform Integration' },
            { value: '100%', label: 'Link Invalidation Rate' }
        ],
        faq: [
            { q: 'MEGA ignores my DMCA requests. Why will they listen to you?', a: 'MEGA routinely ignores generic reports from web forms. We submit cryptographically verified, legally bulletproof take-downs via API through established legal entities, which their compliance team is legally obligated to action immediately.' },
            { q: 'The leakers are using password-protected archives. Is that a problem?', a: 'No. Our infiltration units acquire the decryption keys directly from the source forums and distribution channels, allowing us to decrypt, fingerprint, and strike the underlying hosted files regardless of encryption.' },
            { q: 'If you delete a MEGA link, can\'t they just generate a new one?', a: 'Standard services just flag the URL. We strike the underlying source file on their servers. When the file is deleted at the infrastructure level, every single link pointing to it dies simultaneously, and the uploader\'s account incurs a strike.' }
        ],
        heroBg: '/assets/mega-hero-bg.jpeg',
        accentColor: '#D9272E',
        accentGlow: 'rgba(217, 39, 46, 0.4)'
    },
    reddit: {
        id: 'reddit',
        name: 'Reddit',
        title: 'Your Paid Content Is Going Viral On Reddit For Free. We Stop It.',
        headlineMain: 'Your Paid Content Is Going Viral On Reddit For Free.',
        headlineSub: 'We Stop It.',
        description: 'Reddit is the engine room of modern piracy. Dedicated subreddits exist solely to distribute leaked creator content, organize group buys, and share deepfakes. When a thread goes viral, your paywall becomes useless. KOHZA tracks, targets, and nukes these communities directly via Reddit Legal.',
        stats: { time: '<12H', rate: '98%' },
        threats: [
            'Dedicated subreddits built entirely around bypassing your paywalls and sharing your content',
            'Viral leak threads hitting the front page of Google search results for your name',
            'Users organizing group buys in the comments to split the cost of your premium courses'
        ],
        solutions: [
            'Direct subreddit-level escalation for repeated copyright infringement to nuke the entire community',
            'Rapid thread and comment deletion via elevated access to Reddit Legal',
            'Permanent account suspension for serial uploaders and community ban enforcement'
        ],
        impact: [
            { value: '3.2M', label: 'Potential Impressions Prevented' },
            { value: '100%', label: 'Subreddit Eradication Rate' },
            { value: '<12H', label: 'Avg Thread Takedown Time' }
        ],
        faq: [
            { q: 'Can you get entire piracy subreddits banned?', a: 'Yes. If a subreddit is dedicated to distributing leaked content, we compile a systemic infringement dossier and escalate it directly to Reddit Legal, triggering a wholesale ban of the community under the Repeat Infringer Policy.' },
            { q: 'What about users asking for links via Reddit DMs?', a: 'We deploy automated honey-pot accounts and keyword tracking to identify users brokering leaks via DM. We extract the links they share and strike both the external host and their Reddit account for distribution.' },
            { q: 'How fast can a viral leak thread be removed?', a: 'Extremely fast. Because Reddit threads index immediately on Google, speed is critical. Our direct escalations typically see front-page leak threads nuked within hours, cutting off the viral distribution curve before it peaks.' }
        ],
        heroBg: '/assets/reddit-hero-bg.jpeg',
        accentColor: '#FF4500',
        accentGlow: 'rgba(255, 69, 0, 0.4)'
    }
};

export const getAllPlatforms = () => Object.values(platforms);
export const getPlatformById = (id) => platforms[id.toLowerCase()];
