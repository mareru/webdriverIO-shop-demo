import dropDownPage from '../pages/dropDownPage';

import {Given, Then} from 'cucumber';

Given(/^I am on the dropdown page$/, () => {
    dropDownPage.open();

});
Then(/^I am able to select (.*) in the drop down$/, (value) => {
    dropDownPage.selectDropDownElement(value);
});
