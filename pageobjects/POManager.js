const { GoogleSearchPage } = require('./GoogleSearchPage').default;

class POManager {

    constructor(page) {
        this.page = page;
        this.googleSearchPage = new GoogleSearchPage(this.page);
    }
    
    getGoogleSearchPage(){
        return this.googleSearchPage;
    }
}

module.exports = { POManager };