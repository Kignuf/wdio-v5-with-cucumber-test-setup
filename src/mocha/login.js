/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */

describe('Login', function () {
    it('Can login properly', function () {
        browser.url('/login');
        $('#username').setValue('tomsmith');
        $('#password').setValue('SuperSecretPassword!');
        $('#login > button').click();
    });
});
