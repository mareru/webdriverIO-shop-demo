import { When } from 'cucumber';
import { testingData } from 'src/constants/testing-data';
import { homePage } from 'src/pages/home-page';

When(/^I navigate to the "([^"]*)"th product in the list$/, function (productId: string) {
  homePage.navigate(testingData.productDetailPageUrl(productId));
});
