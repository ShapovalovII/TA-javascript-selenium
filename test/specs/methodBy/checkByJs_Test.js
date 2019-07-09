const { By, until, Builder } = require('selenium-webdriver');
//const { Builder } = require('trueautomation-selenium-webdriver');
//const { ta } = require('trueautomation-helper');

(async function checkByJSTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.js("return $(\"button:contains('Login')\");")).then(function(button) {
           // button.click();
        });

        //await driver.findElement(By.js(ta("test:Ivan:TrueAutomation:SingIn:Login_Button:ClassName","btn login-btn"))).click();
        //await driver.wait(until.titleIs('TrueAutomation.IO'), 2000);
    } finally {
        await driver.quit();
    }
})();