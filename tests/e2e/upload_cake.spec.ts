import { expect, test } from '@playwright/test';
import { PersonaliseCakePage } from '../../pages/PersonaliseCakePage';

test.describe('PersonalisecakePage file upload', () => {

    let cakepage: PersonaliseCakePage;

    test.beforeEach(async ({ page }) => {
        cakepage = new PersonaliseCakePage(page);
        await cakepage.goto();
        await cakepage.isloaded();
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== 'passed') {
            const screenshot = `test-results/${testInfo.title}.png`;
            await page.screenshot({ path: screenshot, fullPage:true });
        }

        try {
            await cakepage.resetFileInput();
        } catch (e) {
            console.log(`could not reset the file: ${e instanceof Error ? e.message : String(e)}`);
        }
    });

    test('should upload a jpg file', async ({ page }) => {
        const srcBefore = await cakepage.getPreviewImageSrc();
        await cakepage.uploadCakeDesign('../test-data/sample-cake-design.jpg');

        await expect(page.locator('.file-info')).toContainText('sample-cake-design.jpg');
        console.log('file uploaded')
        await expect(cakepage.previewImage).toHaveAttribute('src',/^data:image/,{timeout:5000})
        await expect(page.locator('#imageviewer')).not.toHaveAttribute('src', srcBefore || '');
    });
});