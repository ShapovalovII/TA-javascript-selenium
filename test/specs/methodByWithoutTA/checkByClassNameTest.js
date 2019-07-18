const {until} = require('selenium-webdriver');
const {Builder, By} = require('trueautomation-selenium-webdriver');

(async function checkByClassNameTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.sleep(2000);
        await driver.findElement(By.className("btn login-btn")).click();
        await driver.wait(until.titleIs('TrueAutomation.IO'), 2000);
    } finally {
        await driver.quit();
    }
})();