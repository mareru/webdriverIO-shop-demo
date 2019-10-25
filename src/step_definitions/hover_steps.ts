import hoverpage from "../pages/hoverPage";
import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';

let number: number;

Given(/^I am on the hover page$/, function () {
    hoverpage.open();
});
When(/^I hover over image (\d+)$/, function (order:number) {
    number = order - 1;
    hoverpage.hoverOverUserImage(number);
});
Then(/^I am able to see the username "([^"]*)"$/, function (username) {
    hoverpage.usernameField(number).waitForDisplayed();
    expect(hoverpage.usernameField(number).getText()).to.contain(username);
});
