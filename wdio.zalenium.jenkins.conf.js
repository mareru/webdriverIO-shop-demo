const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.services = [['selenium-grid']];

wdioConfig.config.host= 'build-ecx-sitecore';

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
    name: 'webdriver',
}];

wdioConfig.config.beforeSession = [
    function beforeSession(config, capabilities, specs) {
        capabilities.name = specs && specs[0].split('/').pop() || undefined;
    },
];

wdioConfig.config.afterStep = [
    function afterStep(stepResult) {
        if(stepResult.status == false){
            browser.setCookie({name: 'zaleniumTestPassed', value: 'false'});
        }
    },
];
exports.config = wdioConfig.config;
