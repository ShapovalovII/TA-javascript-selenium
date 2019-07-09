const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');


(async function negativeSignUp() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.facebook.com/');

        let first_name = await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:first_name","//input[@name='firstname']"))));
        first_name.sendKeys("Igor");

        let last_name = await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:last_name","//input[@name='lastname']"))));
        last_name.sendKeys("Shapovalov");

        let email_or_phone = await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:email_or_phone","//input[@name='reg_email__']"))));
        email_or_phone.sendKeys("");

        let new_password = await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:new_password","//input[@name='reg_passwd__']"))));
        new_password.sendKeys("Test1111");


        let birthdayDay_Selected = By.xpath(ta("Facebook:SingUp:birthday_day",'//select[@id=\'day\']' + '//option[text()=\'7\']'));
        await driver.findElement(By.css(ta("Facebook:SingUp:birthday_day:Open","#day"))).click();
        await driver.wait(until.elementLocated(birthdayDay_Selected)).click();

        let birthdayMonth_Selected = By.xpath(ta("Facebook:SingUp:birthday_month",'//select[@id=\'month\']' + '//option[text()=\'апр\']'));
        await driver.findElement(By.css(ta("Facebook:SingUp:birthday_month:Open","#month"))).click();
        await driver.wait(until.elementLocated(birthdayMonth_Selected)).click();

        let birthdayYear_Selected = By.xpath(ta("Facebook:SingUp:birthday_year",'//select[@id=\'year\']' + '//option[text()=\'2000\']'));
        await driver.findElement(By.css(ta("Facebook:SingUp:birthday_month:Open","#year"))).click();
        await driver.wait(until.elementLocated(birthdayYear_Selected)).click();

        await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:gender","//label[text()='Мужчина']")))).click();

        await driver.wait(until.elementLocated(By.xpath(ta("Facebook:SingUp:singup","(//button[text()='Регистрация'])[1]")))).click();
        
    } finally {
        await driver.quit();
    }
})();