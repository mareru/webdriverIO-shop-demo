import Page from './page';

class DropDownPage extends Page {
    /**
     * define elements
     */
    get dropDownElement() {
        return $('#dropdown');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://webdriver.io/api.html
     */
    open() {
        super.open('/dropdown');
    }

    selectDropDownElement(value: string) {
        this.dropDownElement.selectByVisibleText(value);
    }
}

export default new DropDownPage();
