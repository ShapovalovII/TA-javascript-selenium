const {until} = require('selenium-webdriver');
const {Builder, By} = require('trueautomation-selenium-webdriver');

(async function checkByCssSelectorTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.css("#login_password")).sendKeys('123');
        await driver.sleep(3000);
        await driver.wait(until.titleIs('TrueAutomation.IO'), 2000);
    } finally {
        await driver.quit();
    }
})();