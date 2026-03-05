import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

async function build() {
    try {
        console.log('Starting native Vite SSR prerender...');
        const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
        // Import the SSR bundle produced by Vite using proper file URL formatting for Windows
        const serverEntryPath = toAbsolute('dist/server/entry-server.js')
        const { render } = await import(pathToFileURL(serverEntryPath).href)

        // Define our Sitemap / Routes to build
        const routes = [
            '/',
            '/promise',
            '/ofm-creators',
            '/info-products',
            '/remove-leaks/telegram',
            '/remove-leaks/instagram',
            '/remove-leaks/onlyfans',
            '/remove-leaks/discord',
            '/remove-leaks/mega',
            '/remove-leaks/reddit',
            '/contact'
        ];

        for (const url of routes) {
            console.log(`Prerendering ${url}...`);
            const helmetContext = {}

            // Execute React Server-Side Rendering (fast, no browser needed)
            const appHtml = render(url, helmetContext)

            let html = template.replace(`<!--app-html-->`, appHtml)

            // Inject React-Helmet Async tags dynamically
            if (helmetContext.helmet) {
                const helmet = helmetContext.helmet
                const helmetTags = `
                    ${helmet.title.toString()}
                    ${helmet.priority.toString()}
                    ${helmet.meta.toString()}
                    ${helmet.link.toString()}
                    ${helmet.script.toString()}
                `
                html = html.replace('<!--helmet-tags-->', helmetTags)
            } else {
                html = html.replace('<!--helmet-tags-->', '')
            }

            const filePath = toAbsolute(`dist/static${url === '/' ? '/index.html' : `${url}/index.html`}`)
            fs.mkdirSync(path.dirname(filePath), { recursive: true })
            fs.writeFileSync(filePath, html)
        }

        console.log('Finalizing build directory...');

        const staticDir = toAbsolute('dist/static')
        const serverDir = toAbsolute('dist/server')
        const distRoot = toAbsolute('dist')

        // Copy static files into root dist
        fs.cpSync(staticDir, distRoot, { recursive: true })

        // Wipe original subdirectories
        fs.rmSync(staticDir, { recursive: true, force: true })
        fs.rmSync(serverDir, { recursive: true, force: true })

        console.log('✅ Native SSR Prerendering complete! Ready for Vercel deployment.');
    } catch (e) {
        console.error('Error during prerendering:', e)
        process.exit(1)
    }
}

build();
