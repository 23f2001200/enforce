import { useState, useRef, useEffect } from 'react'

export default function VideoPlayer() {
    const [muted, setMuted] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const previewRef = useRef(null)
    const modalRef = useRef(null)

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape' && modalOpen) closeModal() }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [modalOpen])

    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : ''
        if (modalOpen && modalRef.current) {
            modalRef.current.currentTime = 0
            modalRef.current.play()
        }
        return () => { document.body.style.overflow = '' }
    }, [modalOpen])

    const openModal = () => { setMuted(true); setModalOpen(true) }
    const closeModal = () => {
        setModalOpen(false)
        if (modalRef.current) { modalRef.current.pause(); modalRef.current.currentTime = 0 }
    }

    return (
        <>
            <style>{`
                /* ── PLAYER CARD ── */
                .vp-card {
                    position: relative;
                    width: 100%;
                    max-width: 560px;
                    background: #000;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 2px;
                    overflow: hidden;
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.04) inset,
                        0 30px 80px rgba(0,0,0,0.8),
                        0 0 60px rgba(180,0,0,0.06);
                    cursor: pointer;
                    transition: box-shadow 0.4s ease, transform 0.4s ease;
                }
                .vp-card:hover {
                    box-shadow:
                        0 0 0 1px rgba(255,255,255,0.06) inset,
                        0 40px 100px rgba(0,0,0,0.9),
                        0 0 80px rgba(200,0,0,0.12);
                    transform: translateY(-3px);
                }

                /* ── HEADER BAR ── */
                .vp-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    background: rgba(10,10,10,0.95);
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    position: relative;
                    z-index: 3;
                }
                .vp-rec {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.6rem;
                    letter-spacing: 0.18em;
                    color: #cc0000;
                    text-transform: uppercase;
                }
                .vp-rec-dot {
                    position: relative;
                    width: 7px;
                    height: 7px;
                    background: #cc0000;
                    border-radius: 50%;
                }
                .vp-rec-dot::after {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    border-radius: 50%;
                    background: #cc0000;
                    filter: blur(4px);
                    animation: vp-blink 1.4s ease-in-out infinite;
                }
                @keyframes vp-blink {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 0.2; }
                }
                .vp-case-id {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.55rem;
                    letter-spacing: 0.12em;
                    color: rgba(255,255,255,0.25);
                }

                /* ── VIDEO WRAP ── */
                .vp-video-wrap {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
                    overflow: hidden;
                    background: #000;
                }
                .vp-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: contrast(1.08) saturate(0.85);
                    transition: filter 0.4s ease, transform 0.6s ease;
                }
                .vp-card:hover .vp-video {
                    filter: contrast(1.12) saturate(0.9);
                    transform: scale(1.02);
                }

                /* CRT scanlines */
                .vp-scanlines {
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        to bottom,
                        transparent 0px,
                        transparent 3px,
                        rgba(0,0,0,0.18) 3px,
                        rgba(0,0,0,0.18) 4px
                    );
                    pointer-events: none;
                    z-index: 2;
                    mix-blend-mode: multiply;
                }

                /* Vignette */
                .vp-vignette {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%);
                    pointer-events: none;
                    z-index: 2;
                }

                /* ── PLAY OVERLAY ── */
                .vp-play-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    z-index: 4;
                    background: rgba(0,0,0,0);
                    border: none;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    padding: 0;
                }
                .vp-play-overlay:hover { background: rgba(0,0,0,0.15); }

                .vp-play-btn {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.6);
                    border: 1.5px solid rgba(255,255,255,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    backdrop-filter: blur(4px);
                    position: relative;
                    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
                }
                .vp-play-overlay:hover .vp-play-btn {
                    transform: scale(1.1);
                    border-color: rgba(200,0,0,0.7);
                    box-shadow: 0 0 30px rgba(200,0,0,0.35), 0 0 60px rgba(200,0,0,0.15);
                }

                /* Pulsing ring */
                .vp-play-btn::before {
                    content: '';
                    position: absolute;
                    inset: -12px;
                    border-radius: 50%;
                    border: 1px solid rgba(200,0,0,0.3);
                    animation: vp-ring 2.5s ease-out infinite;
                }
                .vp-play-btn::after {
                    content: '';
                    position: absolute;
                    inset: -24px;
                    border-radius: 50%;
                    border: 1px solid rgba(200,0,0,0.12);
                    animation: vp-ring 2.5s ease-out infinite 0.6s;
                }
                @keyframes vp-ring {
                    0% { transform: scale(0.85); opacity: 0.8; }
                    100% { transform: scale(1.2); opacity: 0; }
                }
                .vp-play-icon {
                    margin-left: 4px; /* optical center for triangle */
                }

                .vp-play-label {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.6rem;
                    letter-spacing: 0.25em;
                    color: rgba(255,255,255,0.7);
                    text-transform: uppercase;
                    text-shadow: 0 1px 8px rgba(0,0,0,0.9);
                    transform: translateY(4px);
                    transition: color 0.3s ease, letter-spacing 0.3s ease;
                }
                .vp-play-overlay:hover .vp-play-label {
                    color: #fff;
                    letter-spacing: 0.3em;
                }

                /* ── FOOTER BAR ── */
                .vp-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    background: rgba(8,8,8,0.98);
                    border-top: 1px solid rgba(255,255,255,0.05);
                    position: relative;
                    z-index: 3;
                }
                .vp-subject {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .vp-subject-name {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.62rem;
                    color: rgba(255,255,255,0.9);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
                .vp-subject-role {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.52rem;
                    color: rgba(255,255,255,0.35);
                    letter-spacing: 0.08em;
                }
                .vp-mute-btn {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 3px;
                    color: rgba(255,255,255,0.5);
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }
                .vp-mute-btn:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.2);
                    color: #fff;
                }

                /* ── MODAL ── */
                .vp-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: none;
                    transition: background 0.4s ease;
                }
                .vp-modal-overlay.is-open {
                    background: rgba(0,0,0,0.95);
                    pointer-events: all;
                }
                .vp-modal-frame {
                    position: relative;
                    width: 92vw;
                    max-width: 960px;
                    opacity: 0;
                    transform: scale(0.95) translateY(16px);
                    transition: opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1);
                }
                .vp-modal-overlay.is-open .vp-modal-frame {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
                .vp-modal-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 0 12px 0;
                }
                .vp-modal-title {
                    font-family: 'IBM Plex Mono', monospace;
                    font-size: 0.6rem;
                    letter-spacing: 0.2em;
                    color: rgba(255,255,255,0.35);
                    text-transform: uppercase;
                }
                .vp-modal-close {
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 3px;
                    color: rgba(255,255,255,0.6);
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }
                .vp-modal-close:hover {
                    background: rgba(200,0,0,0.2);
                    border-color: rgba(200,0,0,0.4);
                    color: #fff;
                }
                .vp-modal-video-wrap {
                    position: relative;
                    aspect-ratio: 16/9;
                    background: #000;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 3px;
                    overflow: hidden;
                    box-shadow: 0 40px 120px rgba(0,0,0,0.8);
                }
                /* Red accent line top */
                .vp-modal-video-wrap::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #cc0000, rgba(200,0,0,0.3), transparent);
                    z-index: 2;
                }
                .vp-modal-player {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            `}</style>

            {/* ── PLAYER CARD ── */}
            <div
                className="vp-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Header */}
                <div className="vp-header">
                    <div className="vp-rec">
                        <div className="vp-rec-dot" />
                        REC — FIELD INTERVIEW
                    </div>
                    <span className="vp-case-id">CASE-FILE — KHZ-2024-09</span>
                </div>

                {/* Video + overlays */}
                <div className="vp-video-wrap">
                    <video
                        ref={previewRef}
                        className="vp-video"
                        src="/assets/richard-testimonial.mp4"
                        autoPlay
                        muted={muted}
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                    />
                    <div className="vp-scanlines" />
                    <div className="vp-vignette" />

                    {/* Play button overlay */}
                    <button className="vp-play-overlay" aria-label="Watch full interview with sound" onClick={openModal}>
                        <div className="vp-play-btn">
                            <svg className="vp-play-icon" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span className="vp-play-label">Watch with sound</span>
                    </button>
                </div>

                {/* Footer */}
                <div className="vp-footer">
                    <div className="vp-subject">
                        <span className="vp-subject-name">Richard Wonders</span>
                        <span className="vp-subject-role">Content Creator & Entrepreneur</span>
                    </div>
                    <button
                        className="vp-mute-btn"
                        aria-label={muted ? 'Unmute preview' : 'Mute preview'}
                        onClick={(e) => { e.stopPropagation(); setMuted(m => !m) }}
                        title={muted ? 'Unmute' : 'Mute'}
                    >
                        {muted ? (
                            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                                <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.68.49-1.42.88-2.25 1.1v2.06A8.99 8.99 0 009.62 19.5L6.1 16A8.933 8.933 0 0112 19c1.66 0 3-.43 4.38-1.17M12 4L9.91 6.09 12 8.18V4z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.478 4.478 0 0016.5 12zM14 3.23v2.06A7 7 0 0119 12a7 7 0 01-5 6.71v2.06A9 9 0 0021 12 9 9 0 0014 3.23z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ── MODAL ── */}
            <div
                className={`vp-modal-overlay${modalOpen ? ' is-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!modalOpen}
                onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
            >
                <div className="vp-modal-frame">
                    <div className="vp-modal-top">
                        <span className="vp-modal-title">Field Interview — Richard Wonders</span>
                        <button className="vp-modal-close" aria-label="Close" onClick={closeModal}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>
                    </div>
                    <div className="vp-modal-video-wrap">
                        <video
                            ref={modalRef}
                            className="vp-modal-player"
                            src="/assets/richard-testimonial.mp4"
                            playsInline
                            disablePictureInPicture
                            controlsList="nodownload noremoteplayback"
                            controls
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
