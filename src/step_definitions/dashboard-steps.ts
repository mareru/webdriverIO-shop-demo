import { expect } from 'chai';
import { When, Then } from '@cucumber/cucumber';
import { expectMessages } from 'src/constants/expect-messages';
import { testingData } from 'src/constants/testing-data';
import { homePage } from 'src/pages/home-page';
import { productDetailPage } from 'src/pages/product-detail-page';

When(/^I click on the "([^"]*)"th product \(the last product\) in the list$/, (productId: string) => {
  homePage.clickLastProductImage(Number(productId));
});
Then(/^Product Detail Page of the last product opens$/, () => {
  browser.checkForJavaScriptErrors();
  expect(productDetailPage.skuLabel.getText(), expectMessages.incorrectSku).to.be.equal(testingData.skuLabel(7));
});
