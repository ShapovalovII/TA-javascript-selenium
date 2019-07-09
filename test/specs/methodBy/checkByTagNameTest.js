const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkByTagNameTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.tagName(ta('test:Ivan:TrueAutomation:SingIn:Main_Button:TagName', 'rect'))).click();
        await driver.wait(until.titleIs('TrueAutomation.IO – AI-based web testing automation'), 2000);
    } finally {
        await driver.quit();
    }
})();


(async function checkByTagNameThroughCSSTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://app.trueautomation.io/auth/signin');
        await driver.findElement(By.css(ta('test:Ivan:TrueAutomation:SingIn:Main_Button:TagName_ThroughCSS', 'rect'))).click();
        await driver.wait(until.titleIs('TrueAutomation.IO – AI-based web testing automation'), 2000);
    } finally {
        await driver.quit();
    }
})();