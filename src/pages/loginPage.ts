import {expect} from 'chai';
import {ErrorMessageType} from 'src/enums/ErrorMessageType';
import {errorMessages, testingData} from 'src/testData';
import {Page} from './page';

export class LoginPage extends Page {

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

  getErrorMessage() {
    return $('#center_column > div:first-of-type');
  }

  get signOutButton() {
    return $('a[title="Log me out"]');
  }

  verify() {
    this.loginButton.waitForDisplayed();
    this.loginButton.isDisplayed().should.be.true;

    this.navigationBreadcrumb.waitForDisplayed();
    this.navigationBreadcrumb.isDisplayed().should.be.true;
    this.navigationBreadcrumb.getText().should.be.equal(testingData.navigationAuthentication);
  }

  getPageTitle() {
    return super.getPageTitle();
  }

  typeUsername(username: string) {
    this.emailField.waitForDisplayed();
    this.emailField.clearValue();
    this.emailField.setValue(username);
  }

  typePassword(password: string) {
    this.passwordField.waitForDisplayed();
    this.passwordField.clearValue();
    this.passwordField.setValue(password);
  }

  clickOnLoginButton() {
    this.loginButton.waitForDisplayed();
    this.loginButton.click();
  }

  // TODO extract to header module along with the phone number
  clickOnSignOutButton() {
    this.signOutButton.waitForDisplayed();
    this.signOutButton.click();
  }

  errorMessageIsVisible(type: ErrorMessageType) {
    switch (type) {
      case ErrorMessageType.Authentication: {
        expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
        break;
      }
      case ErrorMessageType.InvalidEmail: {
        expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
        break;
      }
      case  ErrorMessageType.RequiredPassword: {
        expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
        break;
      }
      default: {
        throw new TypeError('Unsupported type of error message');
      }
    }
  }
  // authenticationErrorMessageIsVisible() {
  //   expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
  // }
  //
  // invalidEmailErrorMessageIsVisible() {
  //   expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
  // }
  //
  // passwordRequiredErrorMessageIsVisible() {
  //   expect(this.getErrorMessage().getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
  // }
}
