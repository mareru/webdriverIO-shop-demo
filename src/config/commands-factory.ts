import { expect } from 'chai';
import { CommandsFunctions } from 'src/config/commands-functions';
import { CommandsOptions } from 'src/config/commands-options';
import { TIMEOUT_10000_MS } from 'src/constants/timeouts';
import * as utils from 'src/uitls/utils';

export const commandsFactory = (options: CommandsOptions): CommandsFunctions => {
  return {
    waitUntilListIsDisplayed(elements: WebdriverIO.ElementArray, length: number, timeout: number): void {
      browser.waitUntil(
        () => {
          return elements.map((element) => element.isDisplayed()).length === length;
        },
        {
          timeout,
          timeoutMsg:
            'Expected list ' +
            elements.selector +
            ' to be displayed after ' +
            utils.calculateTimeoutForMsg(options, timeout) +
            'ms',
        }
      );
    },
    waitUntilTitleIsDisplayed: function (expectedTitle: string, timeout: number): void {
      browser.waitUntil(
        () => {
          return browser.getTitle() === expectedTitle;
        },
        {
          timeout: timeout,
          timeoutMsg:
            'Expected browser title to be ' +
            expectedTitle +
            ' after ' +
            utils.calculateTimeoutForMsg(options, timeout) +
            'ms',
        }
      );
    },
    waitForPageToLoad: function (): void {
      browser.waitUntil(
        () => {
          // console.log('Waiting for the page to load');
          return utils.checkIfPageLoaded();
        },
        {
          timeout: TIMEOUT_10000_MS,
          timeoutMsg: 'Page never completed loading',
        }
      );
    },
    checkForJavaScriptErrors: function (): void {
      this.waitForPageToLoad();
      const firefoxBrowser: boolean = process.argv.includes('--firefox');
      if (!firefoxBrowser) {
        const logs: any[] = browser.getLogs('browser');
        logs.forEach((log) => {
          if (log.level.toLowerCase() === 'severe') {
            if (log.source.toLowerCase() === 'javascript') {
              console.error(`${log.source.toUpperCase()} ERROR: ${log.message}`);
              expect.fail(`${log.source.toUpperCase()} ERROR: ${log.message}`);
            } else {
              console.log(`${log.source.toUpperCase()} ERROR: ${log.message}`);
            }
          }
        });
      }
    },
  };
};
