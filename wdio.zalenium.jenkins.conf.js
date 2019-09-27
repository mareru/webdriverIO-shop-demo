const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.services = [['selenium-grid']];

wdioConfig.config.host = 'localhost';

wdioConfig.config.beforeFeature = [
    function beforeScenario(uri, feature) {
        browser.setCookies({name: 'zaleniumMessage', value: feature.name});
    },
];

wdioConfig.config.afterStep = [
    function afterStep(uri, feature, scenario, step, result) {
        if (result.status === "passed") {
            browser.setCookies({name: 'zaleniumTestPassed', value: 'true'});
        } else {
            browser.setCookies({name: 'zaleniumTestPassed', value: 'false'});
        }
    },
];
exports.config = wdioConfig.config;
