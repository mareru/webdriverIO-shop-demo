export {};
import {expect} from 'chai';
import {expectMessages} from 'src/constants/expectMessages';
import {testingData} from 'src/constants/testingData';
import {Page} from 'src/pages/page';

class ProductDetailPage extends Page {
  get skuLabel() {
    return $('#product_reference span');
  }

  verify(productId) {
    expect(this.skuLabel.getText(), expectMessages.incorrectSku).to.be.equal(testingData.skuLabel(productId));
  }
}

export const productDetailPage = new ProductDetailPage();