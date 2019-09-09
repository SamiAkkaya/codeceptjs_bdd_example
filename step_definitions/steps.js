const {I, homePage, searchFragment, searchResultPage, advertDetailPage} = inject();
let price;

Given(/^I go to https:\/\/www\.sahibinden\.com\/en$/, () => {
    I.amOnPage('/en');
    I.waitForElement(homePage.fields.search);
    I.waitForEnabled(homePage.fields.search);
    I.seeElement(homePage.fields.search);
});

When('I search for {string}', (carName) => {

    searchFragment.searchKeyword(carName);
    I.waitForElement(searchResultPage.fields.searchResult);
    I.seeElement(searchResultPage.fields.searchResult);
});

When('I click {string}', (keyword) => {
    searchResultPage.selectCategory(keyword);
    I.waitForElement(searchResultPage.fields.searchResult);
    I.seeElement(searchResultPage.fields.searchResult);
});

When('I Go to {string} result page', (pageNumber) => {
    searchResultPage.goResultPageNumber(pageNumber);
    I.waitForElement(searchResultPage.fields.searchResult);
    I.seeElement(searchResultPage.fields.searchResult);
    I.see('You are now viewing page ' + pageNumber);
});

When('I save the price of the {string}rd car with an image', async (row) => {
    price = await searchResultPage.getSelectRowPrice(row);
    I.saveScreenshot("2rd_Page_Screen_Shot.png");
});

When('I go to the {string}rd car details', (row) => {
    searchResultPage.openSelectRowDetail(row);
    I.waitForElement(advertDetailPage.fields.detailTitle);
    I.waitForElement(advertDetailPage.fields.detailContent);
    I.waitForElement(advertDetailPage.fields.infoField);
});

Then('Check if the price inside the details is same', () => {
    I.see(price);
});