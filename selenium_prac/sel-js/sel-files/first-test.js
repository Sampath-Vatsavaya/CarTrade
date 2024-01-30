const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //navigate to facebook login page
    await driver.get("https://practicetestautomation.com/practice-test-login/");
    // Select input elements and fill them out
    await driver.findElement(By.id("username")).sendKeys("student");
    await driver.findElement(By.id("password")).sendKeys("Password123");
    // Select login button and invoke click action
    //If login details are correct we wiil be redirected to the welcome page
    await driver.findElement(By.id("submit")).click();
    //On succesful login get page title
    //Check page title, to confirm login was successful
    const pageTitle = await driver.getTitle();
    // assert usign node assertion
    assert.strictEqual(pageTitle, "Logged In Successfully | Practice Test Automation");
    //Check if redirect to login page was successfull
    await driver.wait(until.titleIs("Logged In Successfully | Practice Test Automation"), 4000);
  } finally {
    
    await driver.quit()
  }
}
loginTest();