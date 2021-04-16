export class Page {
  get page(): WebdriverIO.Element {
    return $('#page');
  }

  open(path: string): void {
    browser.url(path);
    browser.checkForJavaScriptErrors();
    this.page.waitForDisplayed();
  }
}
