const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkByCssSelectorTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.css(ta("test:Ivan:TrueAutomation:SingIn:Email_Input:CssSelector","#login_password"))).sendKeys('123');
        await driver.wait(until.titleIs('TrueAutomation.IO'), 2000);
    } finally {
        await driver.quit();
    }
})();