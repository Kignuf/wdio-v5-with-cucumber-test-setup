/* eslint-disable new-cap */
/* eslint-disable func-names */

const { Before, After } = require('cucumber');

Before(function () {
    this.count = 0;
    console.log('[DEBUG] - Cucumber Before hook');
});

After(function (context) {
    this.count += 1;
    console.log('[DEBUG] - Cucumber After hook');
    // console.log('Result:', context.result.status);
});
