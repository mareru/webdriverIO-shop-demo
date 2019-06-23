import wysiwygPage from "../pages/wysiwygPage";

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, Then, When}) {
    Given(/^I am on WYSIWYG Editor site$/, function () {
        wysiwygPage.open();
    });
    When(/^I enter "([^"]*)" in the editor$/, function (text) {
        wysiwygPage.enterTextInEditor(text);
    });
    Then(/^I see the text "([^"]*)" in the WYSIWYG Editor$/, function (text) {
        // for more information on assertions see: https://www.chaijs.com/api/bdd/
        wysiwygPage.iframeTextField.getText().should.contain(text);
    });
});
