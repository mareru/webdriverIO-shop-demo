import Page from './page';

class LoginPage extends Page {
    /**
     * define elements
     */

    get usernameField() {
        return $('#username');
    }

    get passwordField() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://webdriver.io/api.html
     */
    open() {
        super.open('/login');
        browser.browserCustomCommandExample('This is a sample custom webdriver.io command');
    }

    getPageTitle() {
        return super.getPageTitle();
    }

    typeUsername(username: string) {
        this.usernameField.setValue(username);
    }

    typePassword(password: string) {
        this.passwordField.setValue(password);
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }
}

export default new LoginPage();
