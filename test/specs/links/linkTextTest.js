const { until } = require('selenium-webdriver');
const { Builder, By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkByLinkTextTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.linkText(ta("test:link:Login","Login"))).click();
    } finally {
        await driver.quit();
    }
})();

(async function checkByLinkTextTest2() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.linkText("Login")).click();
        await driver.findElement(By.linkText(ta("test:link:Sign_up","Sign up"))).click();
    } finally {
        await driver.quit();
    }
})();

(async function checkByLinkTextTest3() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.linkText("Login")).click();
        await driver.findElement(By.linkText(ta("test:link:Back_to_main","Back to main"))).click();
    } finally {
        await driver.quit();
    }
})();