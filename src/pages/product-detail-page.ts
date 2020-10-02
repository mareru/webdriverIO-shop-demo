import { expect } from 'chai';
import { expectMessages } from 'src/constants/expect-messages';
import { testingData } from 'src/constants/testing-data';
import { Page } from 'src/pages/page';

class ProductDetailPage extends Page {
  get skuLabel() {
    return $('#product_reference span');
  }

  verify(productId: number) {
    expect(this.skuLabel.getText(), expectMessages.incorrectSku).to.be.equal(testingData.skuLabel(productId));
  }
}

export const productDetailPage = new ProductDetailPage();
