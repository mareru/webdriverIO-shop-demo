export class Page {

  get headline() {
    return $('head title');
  }

  get page() {
    return $('#page');
  }

  open(path) {
    browser.url(path);
    this.page.waitForDisplayed();
  }

  getPageTitle() {
    this.headline.waitForExist();
    return this.headline.getText();
  }
}
