const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkByPartialLinkTextTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.partialLinkText(ta('test:Ivan:TrueAutomation:SingIn:Forgot_Link:PartialLinkText', 'Forgot'))).click();
        await driver.wait(until.titleIs('TrueAutomation.IO'), 2000);
    } finally {
        await driver.quit();
    }
})();