const {I} = inject();

module.exports = {
    fields: {
        search: {id: 'searchText'},
    },
    searchKeyword(keyword) {
        I.fillField(this.fields.search, keyword);
        I.pressKey('Enter');
    },

}
