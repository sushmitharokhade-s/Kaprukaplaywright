const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage({ viewport: null, args: ['--start-maximized'] });
  await page.goto('https://www.kapruka.com/shops/cakes/customCakes/personalise_cakes.jsp');

  const input = page.locator('#imageFile');
  console.log('file input count:', await input.count());
  console.log('isVisible:', await input.isVisible().catch(e => 'ERR:' + e.message));
  console.log('isAttached:', await input.isAttached().catch(e => 'ERR:' + e.message));
  console.log('element info:', await input.evaluate(el => ({
    type: el.type,
    id: el.id,
    hidden: el.hidden,
    display: getComputedStyle(el).display,
    visibility: getComputedStyle(el).visibility,
    opacity: getComputedStyle(el).opacity,
    width: el.offsetWidth,
    height: el.offsetHeight,
    value: el.value,
    className: el.className
  })));

  const file = 'C:\\kapruka-playwrightframework\\test-data\\sample-cake-design.jpg';
  await input.setInputFiles(file);
  await page.waitForTimeout(3000);

  const fileInfo = await page.locator('.file-info').textContent().catch(() => '');
  const imgSrc = await page.locator('#imageviewer').getAttribute('src').catch(() => '');
  console.log('fileInfo:', JSON.stringify(fileInfo));
  console.log('imgSrc:', JSON.stringify(imgSrc));
  console.log('input value after set:', await input.evaluate(el => el.value));

  await browser.close();
})();
