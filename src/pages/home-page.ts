import { TIMEOUT_10000_MS } from 'src/constants/timeouts';
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

  clickLastProductImage(productId: number) {
    const productImage = this.productImage(productId);
    const moreButton = this.moreButton(productId);

    browser.waitUntilListIsDisplayed(this.popularProducts, productId, TIMEOUT_10000_MS);
    productImage.scrollIntoView();
    productImage.moveTo();

    moreButton.waitForDisplayed();
    moreButton.click();
  }
}

export const homePage = new HomePage();
