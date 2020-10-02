import {CommandsOptions} from 'src/config/commands-options';

export const commandsFactory = (options: CommandsOptions) => {
  const commands = {
    waitUntilListIsDisplayed: (elements, length, timeout) => {
      browser.waitUntil(() => {
        return elements.map((element) => element.isDisplayed()).length === length;
      }, {timeout, timeoutMsg: 'Expected list ' + elements.selector + ' to be displayed after ' +
          commands.calculateTimeoutForMsg(timeout) + 'ms'});
    },

    calculateTimeoutForMsg(timeout) {
      return timeout === undefined ? options.waitForTimeout : timeout;
    },
  };
  return commands;
};
