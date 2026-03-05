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

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed')
                        io.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        const observe = (el) => {
            if (!el.classList.contains('is-revealed')) io.observe(el)
        }

        // Observe elements already in the DOM
        document.querySelectorAll('.reveal-on-scroll').forEach(observe)

        // Also observe elements added later (e.g. lazy-loaded components)
        const mo = new MutationObserver((mutations) => {
            mutations.forEach(({ addedNodes }) => {
                addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return
                    if (node.classList?.contains('reveal-on-scroll')) observe(node)
                    node.querySelectorAll?.('.reveal-on-scroll').forEach(observe)
                })
            })
        })
        mo.observe(document.body, { childList: true, subtree: true })

        return () => {
            io.disconnect()
            mo.disconnect()
        }
    }, [])
}
