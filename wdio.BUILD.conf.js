const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'phantomjs',
    args: ['--headless', '--disable-gpu']
}];

wdioConfig.config.services = ['phantomjs'];

exports.config = wdioConfig.config;
