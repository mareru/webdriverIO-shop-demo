const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.hostname= 'build-ecx-sitecore';

exports.config = wdioConfig.config;