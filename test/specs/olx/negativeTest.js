const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function negativeRegistration() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.olx.ua/');

        let product_search = await driver.wait(until.elementLocated(By.xpath(ta("OLX:Glavnae:search_products","//input[@id='headerSearch']"))));
        product_search.sendKeys("Холодильник");

        await driver.findElement(By.xpath(ta("OLX:Glavnae:search_city","//input[@id='cityField']"))).click();
        await driver.findElement(By.xpath(ta("OLX:Glavnae:search_city:Odessa_obl","//span[text()='Одесская область']"))).click();
        await driver.findElement(By.xpath(ta("OLX:Glavnae:search_city:Odessa","//span[text()='Одесса']"))).click();
        await driver.findElement(By.xpath(ta("OLX:Glavnae:search","//input[@id='submit-searchmain']"))).click();

        await driver.findElement(By.xpath(ta("OLX:Glavnae:Tolko_photo","//label[text()='Только с фото']"))).click();

        await driver.findElement(By.xpath(ta("OLX:Glavnae:Price_OT","//span[@data-default-label='Цена от']"))).click();
        let priceOT = await driver.wait(until.elementLocated(By.xpath(ta("OLX:Glavnae:Price_OT:Price", "//input[@defaultval ='от...']"))));
        priceOT.sendKeys("200");

        await driver.findElement(By.xpath(ta("OLX:Glavnae:Price_DO","//span[@data-default-label='Цена до']"))).click();
        let priceDO = await driver.wait(until.elementLocated(By.xpath(ta("OLX:Glavnae:Price_DO:Price", "//input[@defaultval ='до...']"))));
        priceDO.sendKeys("1000");

        await driver.findElement(By.xpath(ta("OLX:Glavnae:Search","//input[@id ='search-submit']"))).click();


    } finally {
        await driver.quit();
    }
})();