import Page from './page';

class CheckboxPage extends Page {
    /**
     * define elements
     */
    get checkboxElements() {
        return $$('#checkboxes input');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands -
     * like for instance $("#someId).click() - are available see: http://webdriver.io/api.html
     */
    open() {
        super.open('/checkboxes');
    }

    clickOnDesiredCheckbox(order) {
        this.checkboxElements[order - 1].click();
    }

    isCheckboxSelected(order) {
        // return true if element is selected
        return this.checkboxElements[order - 1].isSelected();
    }
}

export default new CheckboxPage();
