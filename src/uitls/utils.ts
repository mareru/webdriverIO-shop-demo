import { CommandsOptions } from 'src/config/commands-options';

class Utils {
  calculateTimeoutForMsg(options: CommandsOptions, timeout: number): number | undefined {
    return timeout === undefined ? options.waitForTimeout : timeout;
  }
}
export const utils = new Utils();
