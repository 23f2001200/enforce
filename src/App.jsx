import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PromisePage from './pages/PromisePage'
import OfmCreatorsPage from './pages/OfmCreatorsPage'
import InfoProductsPage from './pages/InfoProductsPage'
import PlatformTakedownPage from './pages/PlatformTakedownPage'
import LinkInBioPage from './pages/LinkInBioPage'
import useLenis from './hooks/useLenis'

// Scroll to top on route change, and handle hash anchors from other pages
function ScrollRestorer() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            // Small timeout to allow the new page to render before scrolling
            setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

// Apply body class per page for page-specific CSS
function BodyClassManager() {
    const { pathname } = useLocation()

    useEffect(() => {
        document.body.className = ''
        if (pathname === '/ofm-creators') {
            document.body.classList.add('ofm-page', 'bureau-theme')
        } else if (pathname === '/info-products') {
            document.body.classList.add('edu-page', 'bureau-theme')
        } else if (pathname === '/ig') {
            document.body.classList.add('vsl-hybrid-theme')
        } else {
            document.body.classList.add('bureau-theme')
        }
    }, [pathname])

    return null
}

export default function App() {
    useLenis()
    const { pathname } = useLocation()
    const isFunnelRoute = pathname.startsWith('/ig')
    return (
        <>
            <ScrollRestorer />
            <BodyClassManager />
            {!isFunnelRoute && <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/promise" element={<PromisePage />} />
                <Route path="/ofm-creators" element={<OfmCreatorsPage />} />
                <Route path="/info-products" element={<InfoProductsPage />} />
                <Route path="/remove-leaks/:platformId" element={<PlatformTakedownPage />} />
                {/* Instagram Funnel Routes */}
                <Route path="/ig" element={<LinkInBioPage />} />
            </Routes>
            {!isFunnelRoute && <Footer />}
        </>
    )
}
