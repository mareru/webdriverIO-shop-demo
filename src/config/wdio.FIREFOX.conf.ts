import { config } from './wdio.conf';
import { Capabilities } from '@wdio/types';

const seleniumConfig = {
  version: '3.141.59',
  drivers: { firefox: { version: '0.27.0' } },
};

const browserOptions: Capabilities.FirefoxOptions = {
  prefs: {
    'browser.tabs.remote.autostart': false,
    'toolkit.telemetry.reportingpolicy.firstRun': false,
    'startup.homepage_welcome_url.additional': 'about:blank',
  },
  args: [...(process.argv.includes('--headless') ? ['-headless'] : []), '--width=1920', '--height=1080'],
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
      browserName: 'firefox',
      'moz:firefoxOptions': browserOptions,
    },
  ],
};

exports.config = browserConfig;
