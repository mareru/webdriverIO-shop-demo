import Page from './page';

class HoverPage extends Page {
    /**
     * define elements
     */
    get userImages() {
        return $$('[alt="User Avatar"]');
    }

    get usernameFields() {
        return $$('h5');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://v4.webdriver.io/api.html
     */
    open() {
        super.open('/hovers');
    }

    hoverOverUserImage(order) {
        this.userImages[order].moveToObject();
    }

    usernameField(order) {
        return this.usernameFields[order];
    }
}

export default new HoverPage();
