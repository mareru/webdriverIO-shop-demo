import {expect} from 'chai';
import {config} from 'src/config';
import loginPage from '../pages/loginPage';
import securePage from '../pages/securePage';

import {Given, Then, When} from 'cucumber';

Given(/^I am on the login page$/, () => {
    loginPage.open();
    expect(loginPage.getPageTitle()).to.contain('Login Page');
});

When(/^I login with username "([^"]*)"$/, (username) => {
    loginPage.typeUsername(username);
    loginPage.typePassword(config.password);
    loginPage.clickOnLoginButton();
});

Then(/^I am located on the secure page$/, () => {
    expect(securePage.getPageTitle()).to.contain('Secure Area');
});

Then(/^I see the a message with the text "([^"]*)"$/, (message) => {
    expect(securePage.getSuccessMessage()).to.contain(message);
});
