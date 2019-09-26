import hoverpage from "../pages/hoverPage";

import {Given, Then, When} from 'cucumber';

let number;

Given(/^I am on the hover page$/, function () {
    hoverpage.open();
});
When(/^I hover over image (\d+)$/, function (order) {
    number = order - 1;
    hoverpage.hoverOverUserImage(number);
});
Then(/^I am able to see the username "([^"]*)"$/, function (username) {
    // for more information on assertions see: https://www.chaijs.com/api/bdd/
    hoverpage.usernameField(number).isDisplayed().should.be.true;
    hoverpage.usernameField(number).getText().should.contain(username);
});
