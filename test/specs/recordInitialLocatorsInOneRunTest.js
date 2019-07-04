const { By, until } = require('selenium-webdriver');
const { Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');

(async function recordInitialLocatorsTest() {
    const driver = new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://translate.google.com/?hl=uk');

                for (var i = 0; i < 500; i++) {  //change the number of iterations
                    var NAME = 'FORscript:';
                    var c = NAME + i;

                    await driver.findElement(By.css(ta(c, "#source"))).sendKeys("dd");
                    console.log(c);
                }
        } finally {
            await driver.quit();
        }

    })();