import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import http from 'http';
import fs from 'fs';
import path from 'path';

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
    '/remove-leaks/reddit'
];

const distDir = path.resolve('dist');

async function run() {
    const server = http.createServer((request, response) => {
        return handler(request, response, {
            public: distDir,
            rewrites: [{ source: '**', destination: '/index.html' }]
        });
    });

    server.listen(5000, async () => {
        console.log('Local server started on port 5000 for prerendering');
        const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

        for (const route of routes) {
            console.log(`Prerendering ${route}...`);
            const page = await browser.newPage();
            // Wait for network to be idle, meaning React loaded and ran
            await page.goto(`http://localhost:5000${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait an extra sec to ensure Helmet tags are injected
            await new Promise(r => setTimeout(r, 1000));

            let html = await page.content();

            // The HTML still contains the script tags which will re-hydrate. This is fine.

            const filePath = path.join(distDir, route, 'index.html');
            const dirPath = path.dirname(filePath);
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            fs.writeFileSync(filePath, html);
            await page.close();
        }

        await browser.close();
        server.close();
        console.log('Prerendering complete!');
    });
}

run();
