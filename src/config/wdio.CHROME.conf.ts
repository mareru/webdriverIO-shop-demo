import { config } from './wdio.conf';
import { CHROME_ARGS } from './chrome-args';
import { Capabilities } from '@wdio/types';

const seleniumConfig = {
  version: '3.141.59',
  drivers: { chrome: { version: '90.0.4430.24' } },
};

const browserOptions: Capabilities.ChromeOptions = {
  args: [
    ...CHROME_ARGS,
    ...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []),
    '--window-size=1920,1080',
  ],
};

config.services = [
  [
    'selenium-standalone',
    {
      logs: 'logs',
      args: seleniumConfig,
      installArgs: seleniumConfig,
    },
  ],
];

const browserConfig: WebdriverIO.Config = {
  ...config,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': browserOptions,
    },
  ],
};

exports.config = browserConfig;
