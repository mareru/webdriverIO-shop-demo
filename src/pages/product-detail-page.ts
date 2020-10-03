import { Page } from 'src/pages/page';

class ProductDetailPage extends Page {
  get skuLabel() {
    return $('#product_reference span');
  }
}

export const productDetailPage = new ProductDetailPage();
