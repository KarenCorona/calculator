const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('zeros', function() {
  this.timeout(30000);
  let driver;

  before(async function() {
    const chrome = require('selenium-webdriver/chrome');
    const options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
    
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterEach(async function() {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title.replace(/\s+/g, '_');
      const screenshot = await driver.takeScreenshot();
      fs.writeFileSync(path.join('./screenshots', `${testName}.png`), screenshot, 'base64');
    }
  });

  after(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  it('should handle zeros correctly', async function() {
    await driver.get("http://localhost:8080");
    await driver.manage().window().setRect({ width: 1024, height: 768 });
    
    // Clear and enter zero values
    const num1 = await driver.findElement(By.id("num1"));
    await num1.clear();
    await num1.sendKeys("0");
    
    const num2 = await driver.findElement(By.id("num2"));
    await num2.clear();
    await num2.sendKeys("0");
    
    // Click the addition button
    const addButton = await driver.findElement(By.xpath("//button[contains(text(),'Addition')]"));
    await addButton.click();
    
    // Wait for result to update
    await driver.wait(until.elementTextContains(
      await driver.findElement(By.id("result")), 
      "Result: 0",
      5000
    );
    
    // Verify the result
    const resultElement = await driver.findElement(By.id("result"));
    const resultText = await resultElement.getText();
    
    assert.strictEqual(
      resultText,
      "Result: 0",
      "0 + 0 should equal 0"
    );
  });
});