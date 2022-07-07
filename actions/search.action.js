const searchPage = require( '../pages/search.pages' );

class SearchAction {

    async goToPage( page ) {
        await searchPage.goToPage(page);
    }

    async search( page ) {
        await searchPage.search(page);
    }

    async send( page ) {
        await searchPage.send(page);
    }
}

module.exports = {SearchAction};
