import {expect} from 'chai';
import {expectMessages} from 'src/constants/expectMessages';
import {testingData} from 'src/constants/testingData';
import {header} from 'src/pages/modules/headerModule';
import {Page} from 'src/pages/page';

class HomePage extends Page {
  open() {
    super.open('/');
  }

  get popularProducts() {
    return $$('#homefeatured.product_list .product-image-container');
  }

  popularProductMoreButton(productId: number): WebdriverIO.Element {
    return $('#homefeatured.product_list a.button.lnk_view[href*="id_product=' + productId + '"]');
  }

  verify() {
    expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.homePageTile);
    header.contactPhoneNumberIsDisplayed();
  }

  clickLastProductImage(productId: number) {
    browser.waitUntilListIsDisplayed(this.popularProducts, productId, 10000);
    this.popularProductMoreButton(productId).click();
  }
}

export const homePage = new HomePage();
