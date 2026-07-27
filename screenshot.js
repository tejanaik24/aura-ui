const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Screenshot 1: Landing page hero
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/hero.png', fullPage: false });

  // Screenshot 2: Component cards
  await page.goto('http://localhost:3001/components', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/cards.png', fullPage: false });

  // Screenshot 3: Component detail
  await page.goto('http://localhost:3001/components/hero-cinematic', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/detail.png', fullPage: false });

  await browser.close();
  console.log('Screenshots saved to screenshots/');
})();
