import Page from './page';

class LoginPage extends Page {
    /**
    * define elements
    */

    get usernameField() { return $('#username'); }

    get passwordField() { return $('#password'); }

    get loginButton() { return $('button[type="submit"]'); }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://v4.webdriver.io/api.html
     */
    open() {
        super.open('/login');
    }

    getPageTitle() {
        return super.getPageTitle();
    }

    typeUsername(username) {
        this.usernameField.setValue(username);
    }

    typePassword(password) {
        this.passwordField.setValue(password);
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }
}

export default new LoginPage();
