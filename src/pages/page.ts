export class Page {
  get page() {
    return $('#page');
  }

  open(path: string): void {
    browser.url(path);
    this.page.waitForDisplayed();
  }
}
