import { expect } from 'chai';
import { Then } from 'cucumber';
import { When } from 'cucumber';
import { expectMessages } from 'src/constants/expect-messages';
import { testingData } from 'src/constants/testing-data';
import { homePage } from 'src/pages/home-page';
import { productDetailPage } from 'src/pages/product-detail-page';

When(/^I click on the last product in the list$/, () => {
  homePage.clickLastProductImage(7);
});
Then(/^Product Detail Page of the last product opens$/, () => {
  expect(productDetailPage.skuLabel.getText(), expectMessages.incorrectSku).to.be.equal(testingData.skuLabel(7));
});
