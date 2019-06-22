import dropDownPage from "../pages/dropDownPage"

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, Then}) {
    Given(/^I am on the dropdown page$/, function () {
        dropDownPage.open();

    });
    Then(/^I am able to select (.*) in the drop down$/, function (value) {
        dropDownPage.selectDropDownElement(value);
    });
});
