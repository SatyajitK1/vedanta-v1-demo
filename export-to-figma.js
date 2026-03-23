const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const HTML_TO_FIGMA_DIR = path.join(
  process.env.NODE_PATH.split(';')[1],
  '@builder.io/html-to-figma'
);
const BROWSER_JS = fs.readFileSync(
  path.join(HTML_TO_FIGMA_DIR, 'dist/browser.js'),
  'utf8'
);

const screens = [
  'dashboard',
  'analytics-dashboard',
  'request-form',
  'validation-panel',
  'audit-logs',
  'approval-queue',
  'app-shell',
  'design-system-preview',
];

const SCREENS_DIR = path.join(__dirname, 'screens');
const OUT_DIR = path.join(__dirname, 'figma-exports');
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  for (const screen of screens) {
    const filePath = `file:///${SCREENS_DIR.replace(/\\/g, '/')}/${screen}.html`;
    console.log(`Processing: ${screen}`);

    try {
      await page.goto(filePath, { waitUntil: 'networkidle', timeout: 20000 });

      // Inject the html-to-figma serializer as a script tag (exposes window.htmlToFigma)
      await page.addScriptTag({ content: BROWSER_JS });

      // window.htmlToFigma is the module object; .htmlToFigma is the exported function
      const layers = await page.evaluate(() => {
        return window.htmlToFigma.htmlToFigma('body', true, false);
      });

      const outPath = path.join(OUT_DIR, `${screen}.json`);
      fs.writeFileSync(outPath, JSON.stringify(layers, null, 2));
      console.log(`  Done: ${screen}.json (${layers.length} layers)`);
    } catch (e) {
      console.error(`  Error on ${screen}: ${e.message}`);
    }
  }

  await browser.close();
  console.log('\nAll done! JSON files saved to figma-exports/');
})();
