import loginPage from "../pages/loginPage";
import securePage from "../pages/securePage";

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, Then, When}) {
    Given(/^I am on the login page$/, function () {
        loginPage.open();
        loginPage.getPageTitle().should.equal('Login Page');
    });

    When(/^I login with username "([^"]*)" and password "([^"]*)"$/, function (username, password) {
        loginPage.typeUsername(username);
        loginPage.typePassword(password);
        loginPage.clickOnLoginButton();
    });

    Then(/^I am located on the secure page$/, function () {
        securePage.getPageTitle().should.equal('Secure Area');
    });

    Then(/^I see the a message with the text "([^"]*)"$/, function (message) {
        // for more information on assertions see: https://www.chaijs.com/api/bdd/
        securePage.getSuccessMessage().should.contain(message);
    });
});
