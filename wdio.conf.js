require("tsconfig-paths/register");
require('ts-node').register({ transpileOnly: true, logError: true });

module.exports = require('./src/config/wdio.CHROME.conf.ts');
