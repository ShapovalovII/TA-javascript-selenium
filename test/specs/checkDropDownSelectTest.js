const { By } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function checkClassSelectTest() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://uk-ua.facebook.com/');

        const valueSelected = By.xpath(ta("test:Ivan:Facebook:SingUp:Year_dropdown:Xpath",'//select[@id=\'year\']' + '//option[text()=\'Рік\']'));
        await driver.findElement(By.css(ta("test:Ivan:Facebook:SingUp:Year_dropdown:CSS:Open","#year"))).click();
        driver.sleep(2000);
        await driver.findElement(valueSelected).click();

        //The second way of dealing with a drop down select
        //await driver.findElement(By.css(ta("test:Ivan:Facebook:SingUp:Year_dropdown:CSS","#year"))).sendKeys(2016);
    } finally {
        await driver.quit();
    }
})();