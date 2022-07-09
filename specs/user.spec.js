const { test } = require('@playwright/test');
const { SearchAction } = require('../actions/search.action.js');
const searchAction = new SearchAction();

test.describe('Automating Search Engine ', () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    })
      
    test('Given the browser open and go to google.com', async () => {
      await searchAction.goToPage(page)
    });  

    test('When the user will search for a keyword', async () => {
      await searchAction.search(page)
    });  

    test('Then system will check the result ', async () => {
      await searchAction.clickFirstResult(page)
    });  



});
  