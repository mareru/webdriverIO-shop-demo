import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import hoverpage from '../pages/hoverPage';

let num: number;

Given(/^I am on the hover page$/, () => {
    hoverpage.open();
});
When(/^I hover over image (\d+)$/, (order: number) => {
    num = order - 1;
    hoverpage.hoverOverUserImage(num);
});
Then(/^I am able to see the username "([^"]*)"$/, (username) => {
    hoverpage.usernameField(num).waitForDisplayed();
    expect(hoverpage.usernameField(num).getText()).to.contain(username);
});
