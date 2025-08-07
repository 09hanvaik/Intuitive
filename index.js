const { chromium } = require('playwright'); // Or 'firefox' or 'webkit'

(async (url) => {
  const browser = await chromium.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto(url);

  // Take a full-page screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();