import {expect} from 'chai';
import {errorMessages} from 'src/constants/errorMessages';
import {expectMessages} from 'src/constants/expectMessages';
import {testingData} from 'src/constants/testingData';
import {ErrorMessageType} from 'src/enums/ErrorMessageType';
import {Page} from './page';
export {};

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

  verify() {
    expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.loginPageTitle);
    this.loginButtonIsDisplayed();
    this.authenticationBreadcrumbIsDisplayed();
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

  authenticationBreadcrumbIsDisplayed() {
    const navigationBreadcrumb = this.navigationBreadcrumb;
    navigationBreadcrumb.waitForDisplayed();
    navigationBreadcrumb.isDisplayed().should.be.true;
    navigationBreadcrumb.getText().should.be.equal(testingData.navigationAuthentication);
  }

  loginButtonIsDisplayed() {
    const loginButton = this.loginButton;
    loginButton.waitForDisplayed();
    loginButton.isDisplayed().should.be.true;
  }

  errorMessageIsVisible(type: ErrorMessageType) {
    const headerErrorMessage = this.headerErrorMessage;
    const itemErrorMessage = this.itemErrorMessage;

    switch (type) {
      case ErrorMessageType.Authentication: {
        expect(headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
        expect(itemErrorMessage.getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
        break;
      }
      case ErrorMessageType.InvalidEmail: {
        expect(headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
        expect(itemErrorMessage.getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
        break;
      }
      case ErrorMessageType.RequiredPassword: {
        expect(headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
        expect(itemErrorMessage.getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
        break;
      }
      default: {
        throw new TypeError('Unsupported type of error message');
      }
    }
  }

  // authenticationErrorMessageIsVisible() {
  //   expect(this.errorMessage.getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
  // }
  //
  // invalidEmailErrorMessageIsVisible() {
  //   expect(this.errorMessage.getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
  // }
  //
  // passwordRequiredErrorMessageIsVisible() {
  //   expect(this.errorMessage.getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
  // }
}

export const loginPage = new LoginPage();
