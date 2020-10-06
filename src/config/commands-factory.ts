import { CommandsFunctions } from 'src/config/commands-functions';
import { CommandsOptions } from 'src/config/commands-options';
import * as utils from 'src/uitls/utils';

export const commandsFactory = (options: CommandsOptions): CommandsFunctions => {
  return {
    waitUntilListIsDisplayed: (elements: WebdriverIO.ElementArray, length: number, timeout: number): void => {
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
    waitUntilTitleIsDisplayed: (expectedTitle: string, timeout: number): void => {
      browser.waitUntil(
        () => {
          return browser.getTitle() === expectedTitle;
        },
        {
          timeout,
          timeoutMsg:
            'Expected browser title to be ' +
            expectedTitle +
            ' after ' +
            utils.calculateTimeoutForMsg(options, timeout) +
            'ms',
        }
      );
    },
  };
};
