require("tsconfig-paths/register");
require('ts-node').register({ transpileOnly: true, logError: true });

const browser = process.argv.includes('--firefox') ? 'FIREFOX' : 'CHROME';

module.exports = require(`./src/config/wdio.${browser}.conf.ts`);
