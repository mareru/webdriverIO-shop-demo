export {};
import { Given, Then, When } from 'cucumber';
import { testingData } from 'src/constants/testing-data';
import { ErrorMessageType } from 'src/enums/error-message-type';
import { homePage } from 'src/pages/home-page';
import { header } from 'src/pages/modules/header-module';
import { loginPage } from '../pages/login-page';

Given(/^I visit home page$/, () => {
  homePage.open();
  homePage.verify();
});

When(/^I navigate to login page$/, () => {
  header.clickOnSignInButton();
  loginPage.verify();
});

When(/^I enter valid credentials$/, () => {
  loginPage.typeUsername(testingData.email);
  loginPage.typePassword(testingData.validPassword);
  loginPage.clickOnLoginButton();
});

Then(/^I can see my username displayed on the page$/, () => {
  header.isLoggedInWithUser(testingData.loggedInUser);
});

When(/^I enter invalid username (.*) or password (.*)$/, (username, password) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickOnLoginButton();
});

Then(/^I can see Authentication error message$/, () => {
  // loginPage.authenticationErrorMessageIsVisible();
  loginPage.errorMessageIsVisible(ErrorMessageType.Authentication);
});
Then(/^I can successfully log out$/, () => {
  header.clickOnSignOutButton();
});

When(/^I enter invalid email (.*) as username$/, (email) => {
  loginPage.typeUsername(email);
  loginPage.clickOnLoginButton();
});

Then(/^I can see Invalid email address error message$/, () => {
  // loginPage.invalidEmailErrorMessageIsVisible();
  loginPage.errorMessageIsVisible(ErrorMessageType.InvalidEmail);
});

When(/^I enter valid email$/, () => {
  loginPage.typeUsername(testingData.email);
});

When(/^I do not enter password$/, () => {
  loginPage.typePassword('');
  loginPage.clickOnLoginButton();
});

Then(/^I can see Password is required error message$/, () => {
  // loginPage.passwordRequiredErrorMessageIsVisible();
  loginPage.errorMessageIsVisible(ErrorMessageType.RequiredPassword);
});
