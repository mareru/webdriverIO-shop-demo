import { expect } from 'chai';
import { expectMessages } from 'src/constants/expect-messages';
import { testingData } from 'src/constants/testing-data';
import { header } from 'src/pages/modules/header-module';
import { Page } from 'src/pages/page';

class HomePage extends Page {
  open() {
    super.open('/');
  }

  get popularProducts() {
    return $$('#homefeatured.product_list .product-image-container');
  }

  productImage(productId: number): WebdriverIO.Element {
    return $('#homefeatured.product_list a.product_img_link[href*="id_product=' + productId + '"]');
  }

  moreButton(productId: number): WebdriverIO.Element {
    return $('#homefeatured.product_list a.button.lnk_view[href*="id_product=' + productId + '"]');
  }

  verify() {
    expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.homePageTile);
    header.contactPhoneNumberIsDisplayed();
  }

  clickLastProductImage(productId: number) {
    const productImage = this.productImage(productId);
    const moreButton = this.moreButton(productId);

    browser.waitUntilListIsDisplayed(this.popularProducts, productId, 10000);
    productImage.scrollIntoView();
    productImage.moveTo();

    moreButton.waitForDisplayed();
    moreButton.click();
  }
}

export const homePage = new HomePage();
