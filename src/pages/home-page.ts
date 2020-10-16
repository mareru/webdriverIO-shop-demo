import { TIMEOUT_10000_MS } from 'src/constants/timeouts';
import { Page } from 'src/pages/page';

class HomePage extends Page {
  open(): void {
    super.open('/');
  }

  get popularProducts(): WebdriverIO.ElementArray {
    return $$('#homefeatured.product_list .product-image-container');
  }

  productImage(productId: number): WebdriverIO.Element {
    return $('#homefeatured.product_list a.product_img_link[href*="id_product=' + productId + '"]');
  }

  moreButton(productId: number): WebdriverIO.Element {
    return $('#homefeatured.product_list a.button.lnk_view[href*="id_product=' + productId + '"]');
  }

  clickLastProductImage(productId: number): void {
    const productImage = this.productImage(productId);
    const moreButton = this.moreButton(productId);

    browser.waitUntilListIsDisplayed(this.popularProducts, productId, TIMEOUT_10000_MS);
    productImage.scrollIntoView();
    productImage.moveTo();

    moreButton.waitForClickable();
    moreButton.click();
  }
}

export const homePage = new HomePage();
