// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs')

describe('special character', function() {
  this.timeout(30000)
  let driver
  let vars
  if (!fs.existsSync('./screenshots')) {

    fs.mkdirSync('./screenshots');

}

beforeEach(async function() {

const chrome = require('selenium-webdriver/chrome');

    const options = new chrome.Options();

    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();





vars = {}

})

afterEach(async function () {

    if (driver) {

        // Take a screenshot of the result page

        const filename = this.currentTest.fullTitle()

            .replace(/['"]+/g, '')

            .replace(/[^a-z0-9]/gi, '_')

            .toLowerCase();;

        const encodedString = await driver.takeScreenshot();

        await fs.writeFileSync(`./screenshots/${filename}.png`,

            encodedString, 'base64');



        // Close the browser

        await driver.quit();

    }

});

  it('special character', async function() {
    await driver.get("http://127.0.0.1:8000/"); // Cambia la URL si es necesario
    await driver.manage().window().setRect({ width: 654, height: 656 });
    await driver.findElement(By.id("num1")).sendKeys("1");
    await driver.findElement(By.id("num2")).sendKeys("2");
    await driver.findElement(By.css("button:nth-child(1)")).click();

    // Lógica de aserción
    const result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, "4", "El resultado de 1 + 1 + 2 debería ser 4");

    // Captura de pantalla
    const filename = "specialcharacter";
    const encodedString = await driver.takeScreenshot();
    await fs.writeFileSync(`./screenshots/${filename}.png`, encodedString, 'base64');
  });
})
