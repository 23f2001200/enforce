import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'public', 'assets');
const evidenceDir = path.join(assetsDir, 'evidence');

const imagesToOptimize = [
    { dir: assetsDir, file: '-ultra-photoreal-cinematic-portrait-website-hero-b.jpeg' },
    { dir: assetsDir, file: 'phone on table.jpeg' },
    { dir: assetsDir, file: 'evidence_bg.png' },
    { dir: evidenceDir, file: '1.jpg' },
    { dir: evidenceDir, file: '2.jpg' },
    { dir: evidenceDir, file: '3.png' },
];

async function optimizeImages() {
    console.log(`Optimizing ${imagesToOptimize.length} images...`);

    for (const { dir, file } of imagesToOptimize) {
        const inputPath = path.join(dir, file);
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const outputPath = path.join(dir, `${basename}.webp`);

        try {
            if (fs.existsSync(inputPath)) {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`✅ Converted ${file} -> ${basename}.webp`);
            } else {
                console.warn(`⚠️ Warning: Could not find ${inputPath}`);
            }
        } catch (err) {
            console.error(`❌ Error converting ${file}:`, err);
        }
    }
    console.log('✅ Optimization complete.');
}

optimizeImages();
