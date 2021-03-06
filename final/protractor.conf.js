require('ts-node/register');
var helpers = require('./helpers');

exports.config = {

  specs: ['./src/e2e/**/*.e2e.ts'],

  baseUrl: 'http://localhost:8081',

  plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotPath: './reports/e2e',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: 'none',
    withLogs: 'true',
    writeReportFreq: 'asap',
    imageToAscii: 'failure',
    clearFoldersBeforeTest: true
}],

onPrepare: function() {
    // returning the promise makes protractor wait for the reporter config before executing tests
    return global.browser.getProcessedConfig().then(function(config) {
        //it is ok to be empty
    });
}
}