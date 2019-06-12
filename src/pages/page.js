export default class Page {

    /**
    * define elements
    */

    get headline ()     { return $('h2'); }

    open (path) {
        browser.url(path);
    }

    getPageTitle(){
        return this.headline.getText();
    }
}
