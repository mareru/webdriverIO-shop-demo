import hoverpage from "../pages/hoverPage";

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, Then, When}) {
    let number;

    Given(/^I am on the hover page$/, function () {
        hoverpage.open();
    });
    When(/^I hover over image (\d+)$/, function (order) {
        number = order-1;
        hoverpage.hoverOverUserImage(number);
    });
    Then(/^I am able to see the username "([^"]*)"$/, function (username) {
        // for more information on assertions see: https://www.chaijs.com/api/bdd/
        hoverpage.usernameField(number).isVisible().should.be.true;
        hoverpage.usernameField(number).getText().should.contain(username);
    });
});
