const {By, until} = require('selenium-webdriver');
const {Builder} = require('trueautomation-selenium-webdriver');
const {ta} = require('trueautomation-helper');
const assert = require('assert');

(async function checkSwitchIframeWithInitialLocator() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://learn.letskodeit.com/p/practice');

        let frame = driver.wait(until.elementLocated(By.css(ta("Practike:Frame:iframe", "#courses-iframe"))));
        await driver.switchTo().frame(frame);

        let frameTitle = "Let's Kode It";
        console.log("********");
        await driver.executeScript("return document.title").then(function (testTitle) {
            console.log(testTitle);
            assert.strictEqual(testTitle, frameTitle);
        });

        let expectedMessage = "Igor";
        let searchСourseField = By.xpath(ta("Practike:Frame:search_course", "//input[@id='search-courses']"));

        await driver.wait(until.elementLocated(searchСourseField)).sendKeys(expectedMessage);

        console.log("********");
        await driver.findElement(searchСourseField).getAttribute("value").then(function (actualMessage) {
            console.log(actualMessage);
            assert.strictEqual(actualMessage, expectedMessage);
        });

        await driver.switchTo().defaultContent();

        let expectedTitle = "Practice | Let's Kode It";
        let hondaRadioButton = By.xpath(ta("Practike:radio_button:HONDA", "//input[@id='hondaradio']"));

        await driver.wait(until.elementLocated(hondaRadioButton)).click();

        console.log("********");
        await driver.findElement(hondaRadioButton).getAttribute("checked").then(function (check) {
            console.log(check);
            assert.strictEqual(check, 'true');
        });

        console.log("********");
        await driver.executeScript("return document.title").then(function (testTitle) {
            console.log(testTitle);
            assert.strictEqual(testTitle, expectedTitle);
        });

    } finally {
        await driver.quit();
    }
})();

