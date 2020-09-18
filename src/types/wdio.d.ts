// tslint:disable-next-line:no-namespace
declare namespace WebdriverIO {
    // adding command to `browser`
    // tslint:disable-next-line:interface-name
    interface Browser {
        browserCustomCommandExample: (arg) => void;
        waitUntilListIsDisplayed: (elements: ElementArray, length: number, timeout: number) => void;
    }
}
