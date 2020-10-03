import { CommandsOptions } from 'src/config/commands-options';

export function calculateTimeoutForMsg(options: CommandsOptions, timeout: number): number | undefined {
  return timeout === undefined ? options.waitForTimeout : timeout;
}
