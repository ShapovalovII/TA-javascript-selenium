const {until} = require('selenium-webdriver');
const {Builder, By} = require('trueautomation-selenium-webdriver');
const {ta} = require('trueautomation-helper');

(async function checkWaitTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.wait(until.elementLocated(By.ta("testName")), 20000);
    } finally {
        await driver.quit();
    }
})();