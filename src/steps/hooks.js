/* eslint-disable new-cap */
/* eslint-disable func-names */

const { Before, After } = require('cucumber');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

Before(function () {
    this.count = 0;
    console.log('[DEBUG] - Cucumber Before hook');
});

After(async function (context) {
    this.count += 1;
    console.log('[DEBUG] - Cucumber After hook');

    console.time('test');
    await sleep(100);
    console.timeEnd('test');

    // console.log('Result:', context.result.status);
});

After({ tags: '@test' }, function () {
    this.tag = '@test';
    console.log('[DEBUG] - Cucumber After hook with tag @test');
});
