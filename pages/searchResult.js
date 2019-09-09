const {I} = inject();

module.exports = {
    fields: {
        searchResult: {id: 'searchResultsTable'},
    },

    selectCategory(keyword) {
        I.waitForEnabled(locate('a').withText(keyword));
        I.click(locate('a').withText(keyword));
    },

    goResultPageNumber(pageNumber) {
        I.scrollPageToBottom();
        I.waitForElement(locate('li').withText(pageNumber).inside('ul.pageNaviButtons'));
        I.waitForEnabled(locate('li').withText(pageNumber).inside('ul.pageNaviButtons'));
        I.click(locate('li').withText(pageNumber).inside('ul.pageNaviButtons'));

    },

    getSelectRowPrice: async function (row) {
        let price = await I.grabTextFrom(locate('tr').at(parseInt(row) + 1).find('td.searchResultsPriceValue').inside('tbody.searchResultsRowClass'));
        return price;

    },

    openSelectRowDetail(row) {
        I.waitForElement(locate('tr').at(parseInt(row) + 1).inside('tbody.searchResultsRowClass'));
        I.waitForEnabled(locate('tr').at(parseInt(row) + 1).inside('tbody.searchResultsRowClass'));
        I.click(locate('tr').at(parseInt(row) + 1).inside('tbody.searchResultsRowClass'));
    }


}
