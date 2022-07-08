const commonElement = require ( '../elements/common.elements' );
const { expect } = require('@playwright/test');
const engines = {
    google: "https://www.google.com",
    bing: "https://www.bing.com"
}
class SearchPage {

    async goToPage(page) {
        await page.goto('/')
    }

    async search( page ) {
        if(process.env.BASE_URL == engines.google){
            await page.fill(commonElement.googleSearch(), process.env.KEYWORD)
            await page.locator(commonElement.googleSend()).first().click();
        }
        else{
            await page.fill(commonElement.bingSearch(), process.env.KEYWORD)
            await page.locator(commonElement.bingSend()).click();
        }
    }

    async clickFirstResult( page ) {
        if(process.env.BASE_URL == engines.google){
            const element = commonElement.googleClickFirstResult()
            await expect(page.locator(element)).toContainText(process.env.KEYWORD, {ignoreCase: true})
        }
        else{
            const element = commonElement.bingClickFirstResult()
            await expect(page.locator(element)).toContainText(process.env.KEYWORD, {ignoreCase: true})
        }
        
        await page.screenshot({ path: 'screenshot.png' });

    }

}

module.exports = new SearchPage;
