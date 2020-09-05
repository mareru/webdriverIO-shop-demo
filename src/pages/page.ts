export class Page {

  get page() {
    return $('#page');
  }

  open(path) {
    browser.url(path);
    this.page.waitForDisplayed();
  }
}
