import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { errorMessages } from 'src/constants/error-messages';
import { expectMessages } from 'src/constants/expect-messages';
import { testingData } from 'src/constants/testing-data';
import { TIMEOUT_5000_MS } from 'src/constants/timeouts';
import { homePage } from 'src/pages/home-page';
import { header } from 'src/pages/modules/header-module';
import { loginPage } from '../pages/login-page';

Given(/^I visit home page$/, () => {
  homePage.open();
  expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.homePageTile);

  const phoneNumber = header.phoneNumber;
  phoneNumber.waitForDisplayed();
  expect(phoneNumber.isDisplayed(), 'Contact phone number is not displayed').to.be.true;
  expect(phoneNumber.getText(), 'Contact phone number is not correct').to.contain(testingData.phoneNumber);
});

When(/^I navigate to login page$/, () => {
  header.clickOnSignInButton();
  browser.checkForJavaScriptErrors();
  browser.waitUntilTitleIsDisplayed(testingData.pageTitles.loginPageTitle, TIMEOUT_5000_MS);
  expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.loginPageTitle);

  const loginButton = loginPage.loginButton;
  loginButton.waitForDisplayed();
  loginButton.isDisplayed().should.be.true;

  const navigationBreadcrumb = loginPage.navigationBreadcrumb;
  navigationBreadcrumb.waitForDisplayed();
  navigationBreadcrumb.isDisplayed().should.be.true;
  navigationBreadcrumb.getText().should.be.equal(testingData.navigationAuthentication);
});

When(/^I enter valid credentials$/, () => {
  loginPage.typeUsername(testingData.email);
  loginPage.typePassword(testingData.validPassword);
  loginPage.clickOnLoginButton();
});

Then(/^I can see my username displayed on the page$/, () => {
  browser.checkForJavaScriptErrors();
  expect(header.loggedInUser.getText().includes(testingData.loggedInUser)).to.be.true;
});

When(/^I enter invalid username "([^"]*)" or password "([^"]*)"$/, (username: string, password: string) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickOnLoginButton();
});

Then(/^I can successfully log out$/, () => {
  header.clickOnSignOutButton();
});

When(/^I enter invalid email "([^"]*)" as username$/, (email: string) => {
  loginPage.typeUsername(email);
  loginPage.clickOnLoginButton();
});

When(/^I enter valid email$/, () => {
  loginPage.typeUsername(testingData.email);
});

When(/^I do not enter password$/, () => {
  loginPage.typePassword('');
  loginPage.clickOnLoginButton();
});

Then(/^I can see "([^"]*)" error message$/, (type: string) => {
  browser.checkForJavaScriptErrors();
  const headerErrorMessage = loginPage.headerErrorMessage;
  const itemErrorMessage = loginPage.itemErrorMessage;
  expect(headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);

  switch (type) {
    case 'Authentication': {
      expect(itemErrorMessage.getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
      break;
    }
    case 'Invalid email address': {
      expect(itemErrorMessage.getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
      break;
    }
    case 'Password is required': {
      expect(itemErrorMessage.getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
      break;
    }
    default: {
      throw new TypeError('Unsupported type of error message');
    }
  }
});
