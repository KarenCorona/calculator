const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const path = require('path');

async function setupDriver() {
    const options = new chrome.Options();
    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
    
    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}

async function takeScreenshotOnFailure(driver, testTitle) {
    if (driver && testTitle) {
        const testName = testTitle.replace(/\s+/g, '_');
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync(path.join('./screenshots', `${testName}.png`), screenshot, 'base64');
    }
}

async function waitForBackend() {
    const timeout = 15000; // 15 seconds
    const start = Date.now();
    
    while (Date.now() - start < timeout) {
        try {
            await fetch('http://localhost:8080/actuator/health');
            return;
        } catch (e) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    throw new Error('Backend not available after 15 seconds');
}

module.exports = {
    setupDriver,
    takeScreenshotOnFailure,
    waitForBackend
};