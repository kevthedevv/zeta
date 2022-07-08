const searchPage = require( '../pages/search.pages' );

class SearchAction {

    async goToPage( page ) {
        await searchPage.goToPage(page);
    }

    async search( page ) {
        await searchPage.search(page);
    }

    async clickFirstResult(page) {
        await searchPage.clickFirstResult(page);
    }
}

module.exports = {SearchAction};
