import { Page } from './page';

class LoginPage extends Page {
  get loginButton(): WebdriverIO.Element {
    return $('#SubmitLogin > span');
  }

  get emailField(): WebdriverIO.Element {
    return $('#email');
  }

  get passwordField(): WebdriverIO.Element {
    return $('#passwd');
  }

  get navigationBreadcrumb(): WebdriverIO.Element {
    return $('.navigation_page');
  }

  get headerErrorMessage(): WebdriverIO.Element {
    return $('#center_column > div.alert-danger p');
  }

  get itemErrorMessage(): WebdriverIO.Element {
    return $('#center_column > div.alert-danger li');
  }

  typeUsername(username: string): void {
    const emailField = this.emailField;
    emailField.waitForDisplayed();
    emailField.clearValue();
    emailField.setValue(username);
  }

  typePassword(password: string): void {
    const passwordField = this.passwordField;
    passwordField.waitForDisplayed();
    passwordField.clearValue();
    passwordField.setValue(password);
  }

  clickOnLoginButton(): void {
    const loginButton = this.loginButton;
    loginButton.waitForDisplayed();
    loginButton.click();
  }
}

export const loginPage = new LoginPage();
