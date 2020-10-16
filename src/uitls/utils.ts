import { CommandsOptions } from 'src/config/commands-options';

export function calculateTimeoutForMsg(options: CommandsOptions, timeout: number): number | undefined {
  return timeout === undefined ? options.waitForTimeout : timeout;
}

export function checkIfPageLoaded(): boolean {
  // console.log( `Done loading? ${browser.executeScript('return document.readyState', []) }` );
  return browser.executeScript('return document.readyState', []) === 'complete';
}
