const {  Capabilities, until, logging } = require('selenium-webdriver');
const { Builder, ServiceBuilder, By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');


(async function example() {
    const caps = {
        'browserName': 'firefox',
        'driver': 'geckodriver',
        'driverVersion': '0.24.0',
    };

    const driver = new Builder().withCapabilities(caps).build();


    try {
        await driver.get('https://trueautomation.io/');

        await driver.findElement(By.css(ta('loginBtn', 'header div.jet-button__container > a'))).click();
        await driver.wait(until.titleIs('TrueAutomation.IO'), 1000);

        await driver.findElement(By.css(ta('signUpBtn', 'div.sign-up-container > a'))).click();
        await driver.findElement(By.name(ta('emailFld:colon:error', 'email'))).sendKeys('your@gmail.com');
        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
})();