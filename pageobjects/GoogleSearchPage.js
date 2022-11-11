import { test, expect } from '@playwright/test';
import * as elements from '../locators/googleSearchPage';

class GoogleSearchPage {

    constructor(page) {

        this.page = page;
        
        //elements
        this.SEARCH_BOX = elements.SEARCH_BOX;
        this.SEARCH_BTN = elements.SEARCH_BTN;
    }

}
export default { GoogleSearchPage };