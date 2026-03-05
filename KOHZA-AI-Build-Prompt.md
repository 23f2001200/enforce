# KOHZA VSL Funnel Website - Complete AI Build Specification

## EXECUTIVE SUMMARY

Generate a **production-ready, single-file HTML VSL (Video Sales Letter) landing page** for KOHZA—a digital content protection and piracy removal service targeting high-earning PPV creators ($5K+/month).

The page must implement the complete 7-step conversion funnel architecture, combining psychological persuasion principles with technical precision. Total word count: ~2,500-3,500 words. Total page length: single-file HTML with embedded CSS and minimal JavaScript.

---

## DESIGN SYSTEM & VISUAL SPECIFICATIONS

### Color Palette (Use EXACTLY)
- **Background:** Pure white (`#FFFFFF`)
- **Primary Text:** Charcoal dark (`#1a1a1a`)
- **CTA Buttons:** Bright red (`#E63946`), hover state darker red (`#D62828`)
- **Accent/Proof Box Background:** Light gray (`#F5F5F5`)
- **Borders:** Dark charcoal (`#333333`)
- **Proof Box Border:** Subtle shadow, thin dark line

### Typography
- **Headline Font:** Sans-serif (Arial, Inter, or Roboto), bold weight
- **Body Font:** Sans-serif (Arial, Inter, or Roboto), regular weight
- **Minimum Font Size:** 18-20px for body text, 16px minimum (prevents auto-zoom on mobile)
- **Line Height:** 1.6 (comfortable reading)
- **Pre-Headline:** ALL CAPS, bold, high contrast

### Layout & Spacing
- **Max Width:** 960px desktop (responsive to mobile full-width)
- **Mobile-First Responsive:** 100% width on mobile, padding 16px sides
- **Button Touch Target:** Minimum 44px × 44px
- **Section Padding:** 40-60px vertical, 20-30px horizontal
- **Line Height:** 1.6 for paragraphs (easy scan)

### Visual Hierarchy
- Remove ALL distractions: No navigation header, no footer links, no chatbot, no floating bars
- Single exit path: Apply button or close browser
- Every element serves conversion

---

## PAGE STRUCTURE & SECTIONS (7-Step Funnel)

### SECTION 1: Hook & Video (Above the Fold - 500px minimum visible)

**Pre-Headline (4-6 words, ALL CAPS)**
```
ATTENTION CREATORS: READ THIS BEFORE UPLOADING YOUR NEXT PPV
```
- Font: 14px, bold, charcoal dark
- Letter spacing: 0.05em
- Margin bottom: 12px

**Main Headline (8-12 words, Bold)**
```
Discover Why Manual DMCAs Are Failing You—And How To Destroy Leaks At The Source
```
- Font: 48px bold on desktop, 32px on mobile
- Color: Charcoal dark (#1a1a1a)
- Margin bottom: 16px
- Line height: 1.2

**Sub-Headline (2 paragraphs)**
```
Your Instagram DMs are flooded with reports about leaks. You send DMCAs. Reddit takes them down. Telegram groups reupload them within hours. It's never-ending.

But what if the real problem isn't the leak—it's that you're fighting the war on the wrong battlefield?
```
- Font: 20px, regular weight, charcoal dark
- Line height: 1.6
- Margin bottom: 24px
- First paragraph: lighter tone, relatable specificity
- Second paragraph: BOLD for "wrong battlefield" (use `<strong>` tag)

**Hero Video Placeholder**
- Display: Vertical video (9:16 aspect ratio) or 16:9 playable responsive
- Placeholder: Vimeo embed (will need video URL: `https://vimeo.com/[VIDEO_ID]`)
- Video: 60-90 seconds, professional voiceover, works muted with captions
- Lazy loading: Video only loads on scroll (performance optimization)
- Thumbnail: Dark, with red play button overlay
- Note: Use `<iframe>` for Vimeo embed, width 100%, max-width 600px

```html
<iframe 
  src="https://player.vimeo.com/video/[VIDEO_ID]" 
  width="100%" 
  max-width="600px"
  height="auto"
  aspect-ratio="9 / 16"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

**Primary CTA Button (Below Video)**
- **Text:** "Apply For Protection Now"
- **Style:** 
  - Width: 100% on mobile (max 500px), centered
  - Height: 50-60px
  - Background: Bright red (#E63946)
  - Text: White, 18px bold
  - Hover: Darker red (#D62828)
  - Border radius: 8px
  - Animation: Subtle pulse effect (opacity: 0.8 → 1 every 2s)
- **Link:** 
  ```
  https://tally.so/r/m0wqkx?utm_source=kohza-vsl&utm_medium=landing&utm_campaign=main&utm_content=primary-cta
  ```
- **Margin:** 24px top, 40px bottom

---

### SECTION 2: Whack-A-Mole Pain (Agitate & Validate)

**Section Header**
```
Why Your Current Strategy Is Trapped In The Whack-A-Mole Game
```
- Font: 36px bold on desktop, 28px on mobile
- Color: Charcoal dark
- Margin bottom: 32px
- Centered

**Pain Validation Paragraph (Specific, Visceral)**
```
You upload a $20 PPV to TikTok. Within 24 hours, you get your first DM:

"Hey, I found your content on Reddit"

You sigh. You open Reddit. It's there. You fill out a DMCA. Reddit removes it. Victory, right?

Wrong.

The same content is now on Telegram.

You find the Telegram group. You send a takedown notice to Telegram's abuse team. Three days later: removed.

But now it's on Discord. Then a forum. Then Mega.nz. Then someone's private Dropbox link.

You're literally playing Whack-A-Mole.

Here's the painful truth: You will never win at this game.

Because you're fighting in the wrong arena.
```
- Font: 18px, line height 1.8
- Use paragraph tags `<p>`, not divs
- Emphasis: Bold "You will never win at this game." and "wrong arena"
- Margin between paragraphs: 16px
- Color: Charcoal dark

**Hidden Enemy Introduction**
```
Here's what separates creators who stop leaks from creators who just complain about them:

They understand the REAL piracy infrastructure.

It's not Reddit. Reddit is window dressing.

The real piracy is underground, encrypted, and impossible to find unless you know the exact architecture.
```
- Font: 18px, line height 1.6
- Emphasis: Bold "REAL piracy infrastructure"

**Three Layers of Piracy (Use Structured List)**
```
LAYER 1: Public Platforms (Reddit, TikTok Comments, YouTube)
├─ Easy to find
├─ Easy to DMCA
└─ Reappears within 24 hours (because the infrastructure is still alive)

LAYER 2: Semi-Private Networks (Discord Servers, Private Telegram Groups, Facebook Groups)
├─ Harder to find (requires infiltration)
├─ Can be reported, but admins rebrand/recreate within hours
└─ Still not the real problem

LAYER 3: The Underground Infrastructure (Encrypted Telegram Rings, Mega.nz, Cyberlockers, Private Servers)
├─ Hidden from casual searches
├─ Monetized (pirates sell your PPV as part of bundles)
├─ Operates 24/7 without fear of takedowns
└─ THIS is where your content is really dying
```
- Display: Use `<div>` with monospace font (Courier) or styled `<pre>` tag
- Background: Light gray (#F5F5F5)
- Padding: 20px
- Border-left: 4px solid red (#E63946)
- Font: 16px, line height 1.5
- Emphasis: Bold "THIS is where your content is really dying"

**Revenue Impact Paragraph**
```
You think: "Okay, it's on Telegram. But how many people are actually downloading it?"

The answer will shock you.

On average, a single encrypted Telegram group distributes your $20 PPV to 500-2,000 users within 30 days.

If 30% of those users would have been paying subscribers, you've lost $3,000-$12,000 per leak.

And that's ONE leak.

Most creators with a consistent PPV schedule have 3-5 active leaks circulating at any given time.

Do the math. $6,000-$60,000 per month, bleeding silently.

And you have no idea it's happening.
```
- Font: 18px, bold for "$3,000-$12,000" and "$6,000-$60,000"
- Highlight box: Light red background (#FFE5E5) for the math section
- Padding: 20px
- Border-radius: 8px
- Margin: 24px 0

**Section Margin Bottom:** 60px

---

### SECTION 3: Objection Annihilation (Kill Every Excuse)

**Section Header**
```
The Lies You're Telling Yourself (And Why They're Costing You Money)
```
- Font: 36px bold
- Margin bottom: 12px

**Framing Paragraph**
```
We've spoken to hundreds of creators. Their objections sound different, but they all come down to three lies. Let's destroy them right now.
```
- Font: 18px, italic
- Color: Charcoal dark
- Margin bottom: 32px

#### OBJECTION #1: The "Freebie Seeker" Myth

**Objection Title**
```
Objection #1: "The people downloading my leaked PPV weren't going to pay anyway. They're bargain hunters. Freebie seekers. I'm not losing real money."
```
- Font: 20px bold
- Color: Charcoal dark
- Margin top: 32px
- Margin bottom: 16px
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-left: 4px solid red

**Destruction - Data Point**
```
This is backwards.

Our data (tracking 10,000+ creator accounts over 3 years) shows the opposite:

Real fans LOOK for cheaper options.

Actual case study: Creator with 500 paying PPV subscribers (at $15/month = $7,500/month revenue). A leak of her content hit Telegram. Within 2 weeks, 1,200 people downloaded it.

Survey follow-up: 67% of downloaders said "I wanted to support her, but I had to see if it was worth $15 first."

Translation: They were POTENTIAL BUYERS who turned into free consumers because they got the free trial from the leak.

Of those 1,200 people, even if only 15-20% become paying subscribers (a conservative estimate), that's 180-240 new subscribers.

At $15/month, that's $2,700-$3,600/month in recurring revenue.

The "freebie seekers" myth just cost this creator $32,400-$43,200/year in lost annual revenue.

Here's the psychological kicker: By allowing the leak to persist, you're actively training your audience that your content CAN be free. You're teaching them to wait for the leak instead of paying upfront.

Once that habit forms, it's almost impossible to break.
```
- Font: 18px, line height 1.8
- Emphasis: Bold for numbers ($32,400-$43,200/year), "POTENTIAL BUYERS", "almost impossible to break"
- Highlight box for final paragraph (light red background)
- Margin bottom: 32px

#### OBJECTION #2: The "Missing VIP Features" Fallacy

**Objection Title**
```
Objection #2: "The leaked version is missing the bonus material. My VIP subscribers get exclusive content the pirates don't have access to. So the leak isn't cannibalizing my sales."
```
- Same styling as Objection #1

**Destruction - Neuroscience Angle**
```
You're thinking about this wrong.

You're assuming people compare full value to leaked value, then do rational math.

They don't.

Neuroscience research shows: Getting 80% of the value for free creates the SAME dopamine hit as getting 100% of the value for $20.

Translation: The person downloading your leaked PPV doesn't think "This is 80% complete, I should buy the full version."

They think: "Wow, free amazing content. Great deal." Dopamine satisfied. Purchase motivation: zero.

Real example: A creator offered a $40 PPV. The complete version had 45 minutes of content. The leaked version had 38 minutes.

Both versions went viral on Telegram.

She expected the leak to drive conversions ("They'll see it's incomplete and buy the full version").

What actually happened: The 38-minute version was "good enough." Only 2% of people who saw the leaked version ever purchased the full version.

The missing 7 minutes wasn't worth $40 to them.

Even worse: These same people LEFT REVIEWS saying the leaked version was "the best content she's made." They're literally telling others: get the free version. Don't buy.

You think you're protected because the leak is incomplete.

You're actually distributing a FREE, SEVEN-MINUTE SAMPLE that's so good it prevents purchases.
```
- Font: 18px, line height 1.8
- Emphasis: Bold for "80%", "SAME dopamine hit", "Only 2%", "FREE, SEVEN-MINUTE SAMPLE"
- Highlight: Final paragraph in light red box

#### OBJECTION #3: The Brand Damage Misconception

**Objection Title**
```
Objection #3: "Leaks happen. Everyone's content gets leaked. It doesn't damage my brand."
```
- Same styling

**Destruction - Positioning Collapse**
```
This is where the real damage lives. It's invisible until it's too late.

Think about where your leaked PPV ends up:

It's not on curated platforms. It's on spam forums. Shady Telegram groups. Cyberlockers that host malware. Sketchy Discord servers moderated by bots.

Now imagine a potential fan, someone who's NEVER heard of you before, Googles your name.

Instead of finding your official accounts, they find:

"[Your Name] Full PPV Collection - Free Download"

On a forum that looks like it was designed in 1998, surrounded by spam links and sketchy ads.

Their first impression of you: "This person's content is cheap. It's on every piracy site. She must not be doing well."

They don't buy.

You didn't lose one $20 transaction. You lost a potential long-term subscriber because the FIRST introduction to your brand was on a piracy forum.

This isn't theory. We track brand sentiment before and after piracy strikes.

Creators with uncontrolled piracy report:

• 34% decrease in email open rates (people perceive lower perceived value)
• 26% lower conversion rates on new product launches (damaged authority)
• 41% increase in payment disputes (people questioning if it's worth paying)
• 52% higher churn (paid subscribers leave because they feel scammed—"If it's free on Reddit, why am I paying?")

Your leaked content isn't just costing you direct sales.

It's actively destroying your premium positioning in the market.

You're being repositioned from "high-value creator" to "cheap content on piracy sites."

And you can't see it happening until your revenue starts dropping.
```
- Font: 18px, line height 1.8
- Use bullet points for metrics (• character)
- Emphasis: Bold for percentages, "FIRST introduction", "destroying your premium positioning"
- Highlight: Statistics box (light red background)

**Objection Killer Close**
```
So let's be clear about what "ignoring piracy" really means:

It means:
✗ Training your audience that your content should be free
✗ Inviting new fans to discover you on piracy forums
✗ Losing $3,000-$60,000/month to people who would have paid
✗ Destroying your premium positioning in your market
✗ Increasing churn among your existing subscribers

When you frame it that way, the question isn't "Should I solve piracy?"

The question is: "Why would I NOT solve piracy?"

The only reason someone doesn't fix this is they don't know how.

We do.

And we're about to show you exactly how.
```
- Font: 18px
- Use `✗` character for check marks
- Emphasis: Bold for "Why would I NOT solve piracy?"
- Highlight box: Light red background
- Margin bottom: 60px

---

### SECTION 4: Proof of Authority (Establish Dominance)

**Proof Box Container**
- Background: Light gray (#F5F5F5)
- Border: 1px solid dark charcoal (#333333)
- Box shadow: 0 4px 12px rgba(0,0,0,0.08)
- Padding: 40px on desktop, 24px on mobile
- Border-radius: 12px
- Max width: 800px
- Centered on page
- Margin: 40px auto

**Proof Box Main Metric**
```
100+ Pirate Listings Destroyed In Less Than 5 Days For A Single Creator
```
- Font: 28px bold on desktop, 24px on mobile
- Color: Charcoal dark (#1a1a1a)
- Text align: center
- Margin bottom: 20px

**Proof Box Supporting Text**
```
One creator. One piracy outbreak. 

We identified 47 separate piracy locations (Reddit, Telegram, Mega, Discord, private forums, cyberlockers).

Within 72 hours: 47 takedowns confirmed.

Within 96 hours: 53 secondary distribution points identified and destroyed.

Average time from leak discovery to full infrastructure shutdown: 4.2 days.

Our internal success rate: 94% sustained protection (stays down for 6+ months without re-emergence).

This isn't theoretical. This isn't manual DMCA spam.

This is infrastructure-level warfare.
```
- Font: 16px, line height 1.6
- Color: Charcoal dark
- Text align: center
- Emphasis: Bold "94%", "4.2 days", "infrastructure-level warfare"
- Margin bottom: 20px

**Testimonial Inside Proof Box**
```
"I've been with 3 different DMCA agencies. None of them even KNEW about the Telegram infrastructure. KOHZA didn't just take down my leaks—they educated me on WHERE my content was actually being stolen. In one week, my Telegram DMs went from 10+ leak reports per day to zero. I'm actually making money again."

— Sarah M., $25K/month PPV Creator
```
- Font: 16px italic, line height 1.6
- Color: Charcoal dark (#1a1a1a)
- Border-left: 4px solid red (#E63946)
- Padding-left: 16px
- Margin top: 20px
- Margin bottom: 16px

**Testimonial Attribution**
```
Before: 10+ leak reports/day | After: 0 leak reports/day
```
- Font: 14px bold
- Color: Red (#E63946)
- Text align: left
- Margin bottom: 60px

---

### SECTION 5: The Value Stack (How We Solve It)

**Section Header**
```
Here's Exactly How We Stop The Bleed
```
- Font: 36px bold
- Color: Charcoal dark
- Margin bottom: 40px
- Centered

**Three-Pillar Container**
- Display: CSS Grid or Flexbox
- 3 columns on desktop, 1 column on mobile (stacked)
- Gap: 30px between columns
- Margin: 40px 0

#### PILLAR 1: API-Level Infrastructure Destruction

**Pillar Title**
```
THE STRIKE
```
- Font: 20px bold
- Color: Red (#E63946)
- Margin bottom: 12px

**Pillar Content**
```
We identify every platform where your content lives.
Not just surface-level Reddit and YouTube.
We map the infrastructure: Mega.nz accounts, Dropbox links, private servers, everything they're using to distribute.

Then we strike at the infrastructure level, not the symptom level.

Instead of reporting links one-by-one, we exploit the shared backend infrastructure they all rely on. When we take down the root—the account, the server, the mirror—all the links die simultaneously.

One strike. 100+ links destroyed.
```
- Font: 16px, line height 1.6
- Color: Charcoal dark
- Margin bottom: 16px

**Pillar Visual (ASCII Diagram or SVG)**
```
100+ Scattered Links → Infrastructure → Central Server → DESTROYED → All Links Dark
```
- Simple visual representation (diagram)
- Font: 14px monospace
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px

#### PILLAR 2: Encrypted Network Infiltration

**Pillar Title**
```
THE INFILTRATION
```
- Font: 20px bold
- Color: Red (#E63946)
- Margin bottom: 12px

**Pillar Content**
```
The underground distribution networks aren't public.

They're encrypted Telegram groups. Private Discord servers. Invite-only forums. They operate in the shadows specifically to avoid detection.

We have ongoing access to these networks. We track distribution patterns. We identify where YOUR content is being sold as part of "mega bundles."

When we find it, we report directly to network admins (not as a random user—as infrastructure providers who they respect).

Direct engagement with infrastructure operators = 100% faster removal than waiting 30 days for Telegram's abuse team to respond.
```
- Font: 16px, line height 1.6
- Color: Charcoal dark
- Emphasis: Bold "100% faster removal"

#### PILLAR 3: Revenue Recovery Automation

**Pillar Title**
```
THE AUTOMATION
```
- Font: 20px bold
- Color: Red (#E63946)
- Margin bottom: 12px

**Pillar Content**
```
Here's what most DMCA agencies miss:

Taking down a leak doesn't force people back to the paywall.

If someone downloaded your $20 PPV from Telegram on Monday, and you destroy the link on Tuesday, they already have the file. It's on their phone.

But here's what we do:

We set up automated re-detection. When the same content reappears in a NEW location (and it always does—pirates are persistent), we automatically trigger a new removal request PLUS inject a "suspension notice" into known distribution channels.

Translation: Pirates know that distributing your content costs them operational time.

After 3-4 cycles of this, they stop targeting you altogether. Your content becomes "too expensive to distribute."

Plus: We tie this back to your monetization. When a leak is fully cleared, we send a notification to your subscribers: "We just removed 50 pirate listings of [Content Name]." This INCREASES perceived value, not decreases it.
```
- Font: 16px, line height 1.6
- Color: Charcoal dark
- Emphasis: Bold "too expensive to distribute", "INCREASES perceived value"

**Value Stack Summary Section**

**WHAT YOU GET (Styled List)**
```
✓ Day 1: Complete piracy audit (we find every location your content exists)
✓ Day 2-3: Infrastructure mapping and strategic takedown plan
✓ Day 4-5: First wave of removals (100+ locations in parallel)
✓ Ongoing: Automated re-detection and continuous protection (6+ months minimum)
✓ Bonus: Monthly reports showing exactly what we stopped (builds your confidence)
```
- Font: 16px, line height 1.8
- Use `✓` character for checks
- Color: Charcoal dark
- Background: Light green (#F0F9F0)
- Padding: 20px
- Border-radius: 8px
- Margin: 20px 0

**WHAT YOU DON'T GET (Styled List)**
```
✗ Generic DMCA spam (slow, ineffective, you can do this yourself)
✗ Reactive-only service (we don't just respond to your reports—we hunt proactively)
✗ Band-aid solutions (we don't remove today's leak—we destroy the whole operation)
✗ Long contracts (start with our trial, no 12-month commitment)
```
- Font: 16px, line height 1.8
- Use `✗` character
- Color: Charcoal dark
- Background: Light red (#FFE5E5)
- Padding: 20px
- Border-radius: 8px
- Margin: 20px 0

**THE REAL DELIVERABLE**
```
Peace of mind. Knowing your premium content stays premium. Knowing your subscribers aren't watching your content on piracy forums. Knowing your brand isn't being destroyed by appearing on every seedy forum on the internet.

Most importantly: You're making money again.
```
- Font: 18px italic, line height 1.6
- Color: Charcoal dark
- Emphasis: Bold "Most importantly: You're making money again."
- Margin bottom: 60px

---

### SECTION 6: FAQs & De-Risking (Final Hesitations)

**Section Header**
```
Questions Before You Apply? We Answer Them Here.
```
- Font: 36px bold
- Color: Charcoal dark
- Margin bottom: 12px

**Subheader**
```
(Scroll through, or just apply—no gatekeeping.)
```
- Font: 16px italic, color gray
- Margin bottom: 32px

**FAQ Accordion or Expandable Sections**
- Use HTML `<details>` and `<summary>` tags for accordion effect
- OR display all FAQs visible (no accordion needed)
- Display visible (no accordion) recommended for VSL

#### FAQ #1: Privacy Concern

**Question**
```
If you infiltrate Telegram groups and Discord servers, won't your actions be traceable to me? Could this destroy my relationship with my fans?
```
- Font: 18px bold
- Color: Charcoal dark
- Margin bottom: 12px
- Cursor: pointer

**Answer**
```
Short Answer: No. Your name never appears. Your brand is never mentioned.

Long Answer: We operate under operational security protocols (OPSEC) that keep your involvement completely anonymous. 

When we report to Telegram admins, they see: "Infrastructure Compliance Team - KOHZA"
They don't see your name. They don't trace it back to you.

When we take down a link, the takedown looks like a standard DMCA notice (from a law firm, not from you directly). Your fans won't see KOHZA's name on the removal.

What your fans DO see: Your content stays exclusive. It doesn't leak everywhere.

Real scenario: One creator was worried that her Telegram fan group would think she "snitched" on the piracy ring. Truth: Her fans never even knew there was a simultaneous piracy ring. From their perspective, her content just stayed exclusive (as it should have).

Risk to you: Essentially zero. We exist in the background.
```
- Font: 16px, line height 1.6
- Color: Charcoal dark
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 24px
- Emphasis: Bold "Essentially zero"

#### FAQ #2: Speed/Effectiveness

**Question**
```
How fast actually does this work? What if the pirates just re-upload everything the next day?
```

**Answer**
```
Short Answer: First wave takes 4-5 days. Sustained protection works indefinitely.

Long Answer: Here's the timeline:

Days 1-2: We audit your content (finding every location). You think we're slow. We're actually mapping the entire operation.

Days 3-4: We execute first wave of takedowns (targeting the infrastructure, not individual links).

Days 5-7: Secondary wave (we catch re-uploads before they go viral).

By Day 8: Pirates test the waters ONE more time. We're waiting. They learn it's not worth the effort.

Empirical data from 500+ creator accounts: After this cycle repeats 3-4 times, re-upload attempts drop by 87%. After 6 months, 94% of creators report zero new piracy attempts.

But here's the real question you should ask: "What if they DO re-upload?"

Answer: We handle it. That's what "ongoing protection" means. 

You don't pay per leak. You pay for peace of mind. 

If it re-emerges, we destroy it again. No additional fees. No "that'll be extra."

Your only job: Sleep well knowing it's handled.
```
- Font: 16px, line height 1.6
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 24px
- Emphasis: Bold "87%", "94%", "peace of mind"

#### FAQ #3: Exclusivity

**Question**
```
Do you work with everyone? Will you take on my competitor too?
```

**Answer**
```
Short Answer: No. We work exclusively with high-earning creators.

Long Answer: This is intentional.

Here's why: We have limited infrastructure access and operational capacity. We literally cannot scale to everyone.

More importantly: We don't WANT to work with everyone.

If we protected both you AND your direct competitor, we'd be in a conflict of interest. We'd have inside knowledge of both operations. We couldn't give you our full attention.

So we're selective.

Here's our criteria:

✓ Minimum $5K/month in PPV/subscription revenue (if you're making less, traditional DMCA services are sufficient for you)
✓ Consistent content upload schedule (we need ongoing work to keep protection active)
✓ Serious about their business (you're not a one-off seller; you're a professional)
✓ Based in a country where we have legal infrastructure (US, UK, EU primarily)

This exclusivity isn't a limitation for you. It's a feature. It means:
- You get our full attention
- We have deep knowledge of your specific piracy patterns
- Your competitors CAN'T use us (even if they wanted to)
- Your investment is protected by our exclusivity

One creator told us: "I liked that you said no to others. Made me feel like you weren't just chasing every check."

Exactly.
```
- Font: 16px, line height 1.6
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 24px
- Use `✓` for bullets

#### FAQ #4: Cost (WITHOUT NAMING PRICE)

**Question**
```
What does this cost? Is it worth it?
```

**Answer**
```
Short Answer: You'll pay for this with your first protected sale. Everything after that is profit.

Long Answer: Let's do the math.

If we prevent ONE leak from costing you $3,000 in lost sales, we've paid for our entire service.

Most creators have 3-5 active leaks at any given time. 

Do the math yourself: 
- 3 leaks × $3,000 prevented loss = $9,000/month saved
- 5 leaks × $3,000 prevented loss = $15,000/month saved

Our service costs significantly less than that.

Meaning: Within 30-60 days, you've broken even. Everything after that is profit.

But here's the real question: What's the cost of doing NOTHING?

$3,000-$60,000/month (we already explained this in step 2).

So the question isn't: "Can I afford KOHZA?"

The question is: "Can I afford NOT to use KOHZA?"

Note: Price is revealed on the application form. We filter for serious applicants only.
```
- Font: 16px, line height 1.6
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 24px
- Emphasis: Bold "$9,000/month", "$15,000/month", "Can I afford NOT to use KOHZA?"

#### FAQ #5: Implementation

**Question**
```
How much work is this on my end? Do I have to give you passwords or access to my accounts?
```

**Answer**
```
Short Answer: Minimal work on your end. You don't share passwords or account access.

Long Answer: Here's what happens after you apply and get approved:

WEEK 1: Onboarding
- 15-minute call with our ops team
- You give us: Social links, past leak examples (screenshots of where you found your content), your revenue numbers (helps us understand the scope)
- You DON'T give us: Passwords, account access, payment info, anything sensitive

WEEK 2: Audit
- We go to work. You go about your business.
- No interruption to your normal operations
- No downtime, no disruption

WEEK 3: Execution
- We execute removals
- You get notification updates as we work (peace of mind)

ONGOING: You literally do nothing
- Monthly reports arrive automatically
- If new leaks emerge, we handle them
- You focus on creating content

The only requirement: You stay responsive to our team (reply to messages within 24 hours if we have questions). That's it.

Most creators tell us: "I expected this to be complicated. It was literally just uploading a Dropbox folder and then... I never thought about it again."

That's the goal.
```
- Font: 16px, line height 1.6
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 24px
- Use bold for "WEEK 1", "WEEK 2", "WEEK 3"

#### FAQ #6: Guarantee

**Question**
```
What if this doesn't work? What's your guarantee?
```

**Answer**
```
Short Answer: We don't make promises we can't keep. Here's what we actually guarantee.

Long Answer: Honest answer: We can't guarantee 100% protection forever.

Why not? Because new piracy vectors emerge constantly. New platforms, new technologies, new distribution channels.

What we CAN guarantee:

✓ 94% sustained protection (stays down for 6+ months minimum)
✓ 72-hour removal of newly detected piracy (we catch re-uploads fast)
✓ Full refund if we don't complete the initial audit and first wave of removals within 10 days (we haven't missed this deadline in 100+ client engagements)
✓ Monthly reporting so you can see the work we're doing

What we DON'T guarantee (because no honest service should):
✗ 100% permanent protection (piracy is an ongoing war, not a one-time battle)
✗ Zero re-uploads ever (pirates are persistent; we're just persistent too)

Real talk: If someone promises 100% permanent protection from piracy, they're lying.

We're not lying. We're just really, really good at staying ahead of the problem.

One creator said: "I appreciated that they didn't promise the moon. They promised to be my partner in managing this. That's worth way more."

Exactly.
```
- Font: 16px, line height 1.6
- Background: Light gray (#F5F5F5)
- Padding: 16px
- Border-radius: 8px
- Margin bottom: 60px
- Use `✓` and `✗` for bullets

---

### SECTION 7: Final Close (Last 200px - Make Inaction Impossible)

**Closing Copy (Urgency + Reframe)**
```
Ready To Stop The Bleed?

Your content is being stolen right now. 

Not tomorrow. Now.

In the next 24 hours, someone will download your PPV and upload it to Telegram. Then Discord. Then a forum.

You can pretend it's not happening. Most creators do.

Or you can do something about it.

We've spent 3 years building the infrastructure to stop this. We've destroyed 100+ piracy operations. We've recovered millions in lost revenue for creators like you.

The question isn't whether you CAN stop this.

The question is: Are you going to?
```
- Font: 20px on desktop, 18px on mobile
- Color: Charcoal dark (#1a1a1a)
- Line height: 1.8
- Emphasis: Bold "Right now", "Are you going to?"
- Margin bottom: 32px

**Final CTA Button**
- **Text:** "Apply For Protection Now"
- **Style:** 
  - Width: 100% on mobile, 500px max on desktop, centered
  - Height: 60px
  - Background: Bright red (#E63946)
  - Text: White, 20px bold
  - Hover: Darker red (#D62828)
  - Border radius: 8px
  - Animation: Pulse effect
- **Link:** 
  ```
  https://tally.so/r/m0wqkx?utm_source=kohza-vsl&utm_medium=landing&utm_campaign=final-close
  ```
- **Margin:** 24px bottom

**Sub-Text (Friction Removal)**
```
No credit card required. No commitment. Just answer a few questions about your specific situation, and we'll determine if you're a fit.

Usually takes 3 minutes. One question per screen.

Apply now →
```
- Font: 14px
- Color: Gray (#666)
- Text align: center
- Margin top: 16px

---

## TECHNICAL SPECIFICATIONS

### HTML Structure Requirements
- Valid HTML5 semantic markup
- One `<h1>` per page (main headline)
- Proper heading hierarchy (h1, h2, h3, etc.)
- Use `<main>` for primary content
- Use `<section>` for each major section
- All text in semantic tags: `<p>`, `<ul>`, `<ol>`, `<h2>`, etc. (NOT raw divs)

### CSS Requirements
- **Framework:** Vanilla CSS (no Bootstrap, no Tailwind)
- **Color variables:** Use CSS custom properties for consistency
- **Mobile-first responsive design** with media queries
- **Flexbox/Grid** for layout (no floats)
- **Max-width:** 1000px container, centered
- **Font stack:** System fonts (Arial, -apple-system, BlinkMacSystemFont, sans-serif)
- **Dark mode consideration:** Optional but nice-to-have

### JavaScript Minimal
- Smooth scroll on anchor links (optional)
- Pulse animation on CTA buttons (CSS preferred)
- Form submission tracking (optional)
- Lazy load video on scroll
- NO libraries required (vanilla JS only)

### Performance
- **Page Load:** <2s target (Lighthouse score 80+)
- **Lazy loading:** Images and video
- **No external fonts:** Use system fonts
- **Minify CSS/JS:** Before production
- **Image optimization:** Compress all images <50KB each

### Tracking & Integration
- **Meta pixel Facebook:** Placeholder for pixel ID
  ```html
  <!-- Facebook Pixel Code -->
  <script>
    !function(f){if(!f.fbq)...
  </script>
  ```
- **Google Analytics 4:** Placeholder for GA ID
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  ```
- **UTM Parameters:** Already in button links

### Form Integration
- **Form Platform:** Tally.so (embed link, don't embed form)
- **Primary form link:** 
  ```
  https://tally.so/r/m0wqkx?utm_source=kohza-vsl&utm_medium=landing&utm_campaign=main
  ```
- **Form opening:** New tab (`target="_blank"`) recommended

### Video Integration
- **Platform:** Vimeo
- **Embed format:** Responsive iframe with aspect-ratio property
- **Lazy loading:** Load video on scroll intersection
- **Placeholder:** Dark gray with centered play button

### Accessibility Requirements
- **Color contrast:** WCAG AA compliant (4.5:1 minimum)
- **Alt text:** Not needed (no images), but provide for any future additions
- **Keyboard navigation:** Tab through buttons and links
- **Focus indicators:** Clear visible focus states on buttons
- **Semantic HTML:** Proper heading hierarchy, label associations

### SEO Basics
- **Meta title:** "Stop Content Piracy | KOHZA - Protect Your PPV Revenue"
- **Meta description:** "Destroy piracy infrastructure, recover lost revenue. KOHZA protects high-earning creators with targeted takedowns & ongoing monitoring."
- **Open Graph tags:** For social sharing
- **Schema markup:** Optional but valuable

---

## DELIVERABLE CHECKLIST

Verify the final HTML includes:
- [ ] All 7 sections complete with exact copy
- [ ] Proper color palette (#FFFFFF, #1a1a1a, #E63946, #F5F5F5, #333333)
- [ ] Responsive design (mobile-first)
- [ ] Buttons link correctly to Tally form with UTM parameters
- [ ] Video placeholder for Vimeo embed
- [ ] All emphasis (bold) applied correctly
- [ ] Proof box styling with light gray background
- [ ] FAQ section all visible (not accordion)
- [ ] No navigation header, no footer, no distractions
- [ ] Pulse animation on CTA buttons
- [ ] Font sizes: 48px (headline), 36px (section headers), 20px (sub-headlines), 18px (body)
- [ ] Line height: 1.6 body, 1.2 headlines
- [ ] Mobile touches: 44px minimum, 16px padding
- [ ] Facebook Pixel placeholder
- [ ] Google Analytics 4 placeholder
- [ ] Valid HTML5 structure
- [ ] Lazy loading on video
- [ ] Meta tags (title, description, OG tags)

---

## FILE OUTPUT FORMAT

**Single file:** `kohza-vsl-landing.html`

**Size target:** <100KB (compressed)

**Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, fonts, styles -->
</head>
<body>
  <!-- Content: 7 sections -->
  <!-- Scripts at bottom -->
</body>
</html>
```

**Deployment:**
- Upload to Cloudflare Pages, Vercel, or standard hosting
- Enable HTTPS (SSL certificate)
- Set up CDN caching
- Test on mobile (iPhone SE minimum)
- Verify all buttons link correctly

---

## NOTES FOR AI/DEVELOPER

1. **Copy Accuracy:** Use EXACT copy provided. No paraphrasing. Consistency = conversion.

2. **Design Precision:** Follow color specifications exactly. Every pixel counts in VSL conversion.

3. **Mobile First:** Design for iPhone SE first (375px width), then scale up. Most traffic will be mobile.

4. **No Complexity:** Single file, vanilla HTML/CSS, minimal JS. Speed and clarity over features.

5. **Responsive Strategy:**
   - Desktop: 960px max-width, centered, 40px side padding
   - Tablet: Full width, 30px side padding
   - Mobile: Full width, 16px side padding, font sizes reduced 10-15%

6. **Font Hierarchy:**
   - Pre-headline: 14px, bold, all caps
   - Headline: 48px → 32px (mobile), bold
   - Section header: 36px → 28px (mobile), bold
   - Body: 18px → 16px (mobile)
   - FAQ question: 18px, bold
   - FAQ answer: 16px, regular

7. **Spacing Consistency:**
   - Between sections: 60px desktop, 40px mobile
   - Between elements within section: 24-32px
   - Button padding: 50-60px height
   - Container padding: 20-30px horizontal

8. **Button Styling:**
   - All buttons: rounded corners (8px border-radius)
   - All buttons: white text on red background
   - Hover effect: Darker red (#D62828)
   - Animation: Subtle pulse (opacity 0.8 → 1, 2s loop)

9. **Highlight Boxes:**
   - Light gray background (#F5F5F5)
   - Dark border left (4px, #E63946 for important, #333333 for normal)
   - Padding: 20px

10. **Testing:**
    - Test all buttons link to Tally form
    - Test responsive on mobile, tablet, desktop
    - Test video lazy loads
    - Test scroll performance (should be smooth)
    - Verify no console errors
    - Test on slow 3G network (should load <3s)

---

**END OF BUILD SPECIFICATION**

*This specification is production-ready. Follow it precisely for maximum conversion.*
