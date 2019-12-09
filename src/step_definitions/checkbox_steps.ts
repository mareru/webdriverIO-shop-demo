import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';
import checkboxPage from '../pages/checkboxPage';

Given(/^I am on the checkbox page$/, () => {
    checkboxPage.open();
});

Given(/^the checkbox is not selected$/, () => {
    expect(checkboxPage.isCheckboxSelected(1)).to.be.false;
});

When(/^I click on the first checkbox$/, () => {
    checkboxPage.clickOnDesiredCheckbox(1);
});

Then(/^the checkbox is marked as checked$/, () => {
    expect(checkboxPage.isCheckboxSelected(1)).to.be.true;
});
