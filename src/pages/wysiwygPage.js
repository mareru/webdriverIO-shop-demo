import Page from './page';

class WysiwygPage extends Page {
    /**
     * define elements
     */
    get iframeTextField() {
        return $('#tinymce');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://webdriver.io/api.html
     */
    open() {
        super.open('/tinymce');
    }

    getPageTitle() {
        return super.getPageTitle();
    }

    enterTextInEditor(text) {
        //Text is in an iframe, first switch to that iframe
        // you can use here the browser object
        browser.switchToFrame('mce_0_ifr');
        //Enter text
        this.iframeTextField.waitForExist(4000);
        this.iframeTextField.setValue(text);
    }
}

export default new WysiwygPage();
