const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.host= 'build-ecx-sitecore';

exports.config = wdioConfig.config;