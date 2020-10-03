declare namespace WebdriverIO {
  // adding command to `browser`
  interface Browser {
    browserCustomCommandExample: (arg) => void;
    waitUntilListIsDisplayed: (elements: ElementArray, length: number, timeout: number) => void;
    waitUntilTitleIsDisplayed: (expectedTitle: string, timeout: number) => void;
  }
}
