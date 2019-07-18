const { until } = require('selenium-webdriver');
const { Builder, By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkByPartialLinkTextTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.partialLinkText(ta("test:PartialLink:Login","Login"))).click();
    } finally {
        await driver.quit();
    }
})();

(async function checkByPartialLinkTextTest2() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.partialLinkText("Login")).click();
        await driver.findElement(By.partialLinkText(ta("test:PartialLink:Sign_up","Sign up"))).click();
    } finally {
        await driver.quit();
    }
})();

(async function checkByPartialLinkTextTest3() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');
        await driver.sleep(2000);
        await driver.findElement(By.partialLinkText("Login")).click();
        await driver.findElement(By.partialLinkText(ta("test:PartialLink:Back_to_main","Back to main"))).click();
    } finally {
        await driver.quit();
    }
})();