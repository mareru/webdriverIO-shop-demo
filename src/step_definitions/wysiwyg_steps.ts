import {expect} from 'chai';
import wysiwygPage from '../pages/wysiwygPage';

import {Given, Then, When} from 'cucumber';

Given(/^I am on WYSIWYG Editor site$/, () => {
    wysiwygPage.open();
});
When(/^I enter "([^"]*)" in the editor$/, (text) => {
    wysiwygPage.enterTextInEditor(text);
});
Then(/^I see the text "([^"]*)" in the WYSIWYG Editor$/, (text) => {
    // for more information on assertions see: https://www.chaijs.com/api/bdd/
    expect(wysiwygPage.iframeTextField.getText()).to.contain(text);
});
