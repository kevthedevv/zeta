const commonElement = require ( '../elements/common.elements' );

class SearchPage {

    delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
     }
    async goToPage(page) {
        await page.goto('https://www.google.com')
    }

    async search( page ) {
        const element = commonElement.googleSearch()
        await page.fill(element, "zeta")
    }
    
    async send( page ) {
        const element = commonElement.googleSend()
        await page.locator(element).click();
    }


}

module.exports = new SearchPage;
