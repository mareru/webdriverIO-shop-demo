export interface CommandsFunctions {
  waitUntilListIsDisplayed: (elements: WebdriverIO.ElementArray, length: number, timeout: number) => void;
  waitUntilTitleIsDisplayed: (expectedTitle: string, timeout: number) => void;
}
