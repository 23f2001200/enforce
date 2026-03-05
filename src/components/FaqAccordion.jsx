import { useState } from 'react'

const faqs = [
    {
        tag: '01',
        question: 'Which platforms are under surveillance?',
        answer: 'We actively monitor 52+ networks including Instagram, Twitter/X, Reddit, Telegram, Discord, Google Drive, Mega, torrent trackers, and custom-built leak forums. If it exists on the internet, we are watching it.'
    },
    {
        tag: '02',
        question: 'How quickly is a takedown executed?',
        answer: 'On major platforms: 2–24 hours. For non-compliant or bulletproof hosts, we escalate to upstream ISPs and CDN providers — typically resolved within 48–72 hours.'
    },
    {
        tag: '03',
        question: 'What if they re-upload?',
        answer: 'Every removed asset is cryptographically fingerprinted. Re-upload attempts across any monitored network trigger an automatic secondary strike with no further input required from you. The cycle ends permanently.'
    },
    {
        tag: '04',
        question: 'Do you work with individuals or agencies?',
        answer: 'Both. We protect individual creators, OFM agencies, course operators, and corporate brand IP. Case volume and protection scope are tailored per engagement. Contact us with your situation and we will scope the right operation.'
    }
]

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

    return (
        <div className="faq-accordion reveal-on-scroll">
            {faqs.map((faq, i) => (
                <div className="faq-item" key={faq.tag}>
                    <div className="faq-question" onClick={() => toggle(i)}>
                        <span className="faq-q-tag mono">{faq.tag}</span>
                        <h3>{faq.question}</h3>
                        <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
                    </div>
                    <div className="faq-answer" style={{ display: openIndex === i ? 'block' : 'none' }}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
