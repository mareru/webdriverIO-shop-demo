import checkboxPage from "../pages/checkboxPage";
import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';

Given(/^I am on the checkbox page$/, function () {
    checkboxPage.open();
});

Given(/^the checkbox is not selected$/, function () {
    expect(checkboxPage.isCheckboxSelected(1)).to.be.false;
});

When(/^I click on the first checkbox$/, function () {
    checkboxPage.clickOnDesiredCheckbox(1);
});

Then(/^the checkbox is marked as checked$/, function () {
    expect(checkboxPage.isCheckboxSelected(1)).to.be.true;
});
