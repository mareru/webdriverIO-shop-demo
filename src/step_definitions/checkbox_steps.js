import checkboxPage from "../pages/checkboxPage";
import {Given, Then, When} from 'cucumber';

Given(/^I am on the checkbox page$/, function () {
    checkboxPage.open();
});

Given(/^the checkbox is not selected$/, function () {
    checkboxPage.isCheckboxSelected(1).should.be.false;
});

When(/^I click on the first checkbox$/, function () {
    checkboxPage.clickOnDesiredCheckbox(1);
});

Then(/^the checkbox is marked as checked$/, function () {
    checkboxPage.isCheckboxSelected(1).should.be.true;
});
