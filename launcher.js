/* eslint-disable require-jsdoc */
const { default: Launcher } = require('@wdio/cli');

function main() {
    const wdio = new Launcher(`${__dirname}/wdio.conf.js`, {});

    console.log('Starting tests');
    wdio.run()
        .then((exitCode) => {
            console.log('Exiting with code', exitCode);
            process.exit(exitCode);
        })
        .catch((e) => {
            console.error('Failed to run wdio:');
            console.error(e);
        });
}

main();
