import { useEffect, useRef } from 'react'

/**
 * Attach this ref to a container element.
 * All children with class "reveal-on-scroll" inside it will be observed.
 * Pass `root = true` to observe document-level elements instead.
 */
export function useScrollReveal() {
    useEffect(() => {
        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'))
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        const els = document.querySelectorAll('.reveal-on-scroll')
        els.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
