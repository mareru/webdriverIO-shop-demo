import { Then } from 'cucumber';
import { When } from 'cucumber';
import { homePage } from 'src/pages/home-page';
import { productDetailPage } from 'src/pages/product-detail-page';

When(/^I click on the last product in the list$/, () => {
  homePage.clickLastProductImage(7);
});
Then(/^Product Detail Page of the last product opens$/, () => {
  productDetailPage.verify(7);
});
