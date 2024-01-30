const { Builder, By,Key } = require("selenium-webdriver");

//
async function productSearcher(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get('https://www.amazon.in/');
    await driver.findElement(By.id('twotabsearchtextbox')).sendKeys("Boat Airdopes",Key.RETURN)

    let prices_list= await driver.findElements(By.className('a-price-whole'));
    // for (i in prices_list)
    // {
    //     let k= await prices_list[i].getText()
    //     console.log(k)
    // }
    for(i in prices_list){
        let x= await prices_list[i].getAttribute('textContent')
        console.log(x)
    }
    driver.close()
}
productSearcher()