// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('blank', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('blank', async function() {
    await driver.get("http://127.0.0.1:8000/")
    await driver.manage().window().setRect({ width: 654, height: 656 })
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).click()
    {
      const element = await driver.findElement(By.id("num2"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("num2")).sendKeys("1")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys(" ")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).click()
    {
      const element = await driver.findElement(By.id("num1"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("num1")).sendKeys("    ")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})
