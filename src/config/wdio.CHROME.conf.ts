import { config } from './wdio.conf'
import { CHROME_ARGS } from './chrome-args'

const seleniumConfig = {
    version: '3.141.59',
    drivers: { chrome: { version: '85.0.4183.87' } },
}

const browserOptions: WebDriver.ChromeOptions & { args: Array<string> } = {
    args: [
        ...CHROME_ARGS,
        ...(process.argv.includes('--headless') ? ['--headless', '--no-sandbox'] : []),
        '--window-size=1920,1080',
    ],
}

const seleniumOpts = config.services?.find(
    (service) => Array.isArray(service) && service[0] === 'selenium-standalone'
) as SeleniumStandaloneOptions

seleniumOpts.args = { ...seleniumConfig }
seleniumOpts.installArgs = { ...seleniumConfig }

const browserConfig: WebdriverIO.Config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': browserOptions,
        },
    ],
}

exports.config = browserConfig
