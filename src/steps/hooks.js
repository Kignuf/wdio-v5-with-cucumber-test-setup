const { Before, After } = require('cucumber');

Before(function () {
    this.count = 0;
    console.log('DEBUG - from before hook', this.count);
});

After(function () {
    this.count += 1;
    console.log('DEBUG - from after hook', this.count);
});
