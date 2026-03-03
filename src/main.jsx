import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './style.css'
import App from './App.jsx'

const container = document.getElementById('root');
const app = (
    <HelmetProvider>
        <App />
    </HelmetProvider>
);

if (container.hasChildNodes()) {
    hydrateRoot(container, app);
} else {
    createRoot(container).render(app);
}
