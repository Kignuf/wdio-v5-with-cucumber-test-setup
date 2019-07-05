/* eslint-disable new-cap */
/* eslint-disable func-names */

const { Before, After } = require('cucumber');

Before(function () {
    this.count = 0;
    console.log('DEBUG - from before hook', this.count);
});

After(function (context) {
    this.count += 1;
    console.log('DEBUG - from after hook', this.count);
    console.log('Result:', context.result.status);
});
