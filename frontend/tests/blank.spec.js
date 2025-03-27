const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('blank', function() {
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

  it('should handle blank inputs', async function() {
    await driver.get("http://localhost:8080");
    await driver.manage().window().setRect({ width: 1024, height: 768 });
    
    // Leave inputs blank and try to calculate
    await driver.findElement(By.css("button:nth-child(1)")).click();
    
    
    const result = await driver.findElement(By.id("result")).getText();
    assert.strictEqual(result, "Error: Please enter both numbers", "Should prompt for both numbers");
  });
});