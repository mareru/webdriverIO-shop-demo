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
  header.loggedInUser.getText().includes(testingData.loggedInUser).should.be.true;
});

When(/^I enter invalid username (.*) or password (.*)$/, (username, password) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickOnLoginButton();
});

Then(/^I can see Authentication error message$/, () => {
  expect(loginPage.headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
  expect(loginPage.itemErrorMessage.getText()).to.be.equal(errorMessages.authenticationFailedErrorMessage);
});
Then(/^I can successfully log out$/, () => {
  header.clickOnSignOutButton();
});

When(/^I enter invalid email (.*) as username$/, (email) => {
  loginPage.typeUsername(email);
  loginPage.clickOnLoginButton();
});

Then(/^I can see Invalid email address error message$/, () => {
  expect(loginPage.headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
  expect(loginPage.itemErrorMessage.getText()).to.be.equal(errorMessages.invalidEmailErrorMessage);
});

When(/^I enter valid email$/, () => {
  loginPage.typeUsername(testingData.email);
});

When(/^I do not enter password$/, () => {
  loginPage.typePassword('');
  loginPage.clickOnLoginButton();
});

Then(/^I can see Password is required error message$/, () => {
  expect(loginPage.headerErrorMessage.getText()).to.be.equal(errorMessages.headerErrorMessage);
  expect(loginPage.itemErrorMessage.getText()).to.be.equal(errorMessages.passwordRequiredErrorMessage);
});
