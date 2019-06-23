const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.services = [['selenium-grid']];

wdioConfig.config.host= 'localhost';

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
    name: 'webdriver',
}];

wdioConfig.config.beforeSession = [
    function beforeSession(config, capabilities, specs) {
        let name = specs[0].split('\\').pop();
        name = name.split('/').pop()
        capabilities.name = specs && name || undefined;
    },
];

wdioConfig.config.afterStep = [
    function afterStep(stepResult) {
        if(stepResult.status === false){
            browser.setCookie({name: 'zaleniumTestPassed', value: 'false'});
        }
    },
];
exports.config = wdioConfig.config;
