import loginPage from '../pages/loginPage';
import securePage from '../pages/securePage';

const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');

Given(/^I am on the login page$/, () => {
    loginPage.open();
    loginPage.getPageTitle().should.equal('Login Page');
});


// eslint-disable-next-line max-len
When(/^I login with username "([^"]*)?" and password "([^"]*)?"$/, (username, password) => {
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickOnLoginButton();
});

Then(/^I am located on the secure page$/, () => {
    securePage.getPageTitle().should.equal('Secure Area');
});

Then(/^I see the a message with the text "([^"]*)?"$/, (message) => {
    securePage.getSuccessMessage().should.contain(message);
});
