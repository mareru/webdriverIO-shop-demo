import {Given, Then, When} from 'cucumber';
import {ErrorMessageType} from 'src/enums/ErrorMessageType';
import {HomePage} from 'src/pages/homePage';
import {testingData} from 'src/testData';
import {LoginPage} from '../pages/loginPage';

let loginPage;
let homePage;

Given(/^I visit home page$/, () => {
  homePage = new HomePage();
  homePage.open();
  homePage.verify();
});

When(/^I navigate to login page$/, () => {
  homePage.clickOnSignInButton();
  loginPage = new LoginPage();
  loginPage.verify();
});

When(/^I enter valid credentials$/, () => {
  loginPage.typeUsername(testingData.email);
  loginPage.typePassword(testingData.validPassword);
  loginPage.clickOnLoginButton();
});

Then(/^I can see my username displayed on the page$/, () => {
  homePage.isLoggedInWithUser(testingData.loggedInUser);
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
  loginPage.clickOnSignOutButton();
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