const { until, By } = require('selenium-webdriver');
const assert = require('assert');
const { setupDriver, takeScreenshotOnFailure, waitForBackend } = require('./testHelper');

describe('zeros', function() {
    this.timeout(30000);
    let driver;

    before(async function() {
        await waitForBackend();
        driver = await setupDriver();
    });

    afterEach(async function() {
        if (this.currentTest.state === 'failed') {
            await takeScreenshotOnFailure(driver, this.currentTest.title);
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
        
        // Enter zeros
        await driver.findElement(By.id("num1")).sendKeys("0");
        await driver.findElement(By.id("num2")).sendKeys("0");
        await driver.findElement(By.css("button:nth-child(1)")).click();
        
        // Verify result
        await driver.wait(until.elementTextContains(
            await driver.findElement(By.id("result")),
            "Result: 0",
            5000
        ));
        
        const result = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(result, "Result: 0", "0 + 0 should equal 0");
    });
});