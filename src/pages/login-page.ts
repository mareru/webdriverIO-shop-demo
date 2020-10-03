import { Page } from './page';

class LoginPage extends Page {
  get loginButton() {
    return $('#SubmitLogin > span');
  }

  get emailField() {
    return $('#email');
  }

  get passwordField() {
    return $('#passwd');
  }

  get navigationBreadcrumb() {
    return $('.navigation_page');
  }

  get headerErrorMessage() {
    return $('#center_column > div.alert-danger p');
  }

  get itemErrorMessage() {
    return $('#center_column > div.alert-danger li');
  }

  typeUsername(username: string) {
    const emailField = this.emailField;
    emailField.waitForDisplayed();
    emailField.clearValue();
    emailField.setValue(username);
  }

  typePassword(password: string) {
    const passwordField = this.passwordField;
    passwordField.waitForDisplayed();
    passwordField.clearValue();
    passwordField.setValue(password);
  }

  clickOnLoginButton() {
    const loginButton = this.loginButton;
    loginButton.waitForDisplayed();
    loginButton.click();
  }
}

export const loginPage = new LoginPage();
