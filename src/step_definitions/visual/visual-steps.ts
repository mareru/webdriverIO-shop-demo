import { percySnapshot } from '@percy/webdriverio';
import { Then } from 'cucumber';

Then(/^I can see page "([^"]*)"$/, (name: string) => {
  browser.waitForPageToLoad();
  browser.call(() => percySnapshot(browser, name));
});
