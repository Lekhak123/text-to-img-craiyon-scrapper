const puppeteer = require('puppeteer-core');
const find= require("./return_interval")
module.exports =async function (find_image:String) {  



    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: true,
        slowMo: 150
    }).catch((e) => {
        console.log(`browser launch error ${e}`)
    })

    try{
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0);
    await page.setViewport({width: 1600, height: 900});
    await page.goto("https://www.craiyon.com/", {waitUntil: 'networkidle0'});


    await page.waitForSelector('#prompt');
  
    const buttonClick = await page.$("#prompt");
    await buttonClick.click();
  
    await page.focus("#prompt");
    await page.keyboard.type(find_image);
    await page.waitForTimeout(find(1000, 2000))
    await page.keyboard.press('Enter');
    await page.waitForTimeout(find(1000, 3000))
    await page.waitForSelector('#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2', {timeout: 180000});
  
   await page.waitForSelector('#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2');


    const textContent = await page.evaluate(() => {
      
            let return_image= document.querySelector(`#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2 > div:nth-child(1) > img`).getAttribute("src");
        return return_image
     });
     
     var base64Data = textContent.replace(/^data:image\/jpeg;base64,/, "");
/*
     require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
       console.log(err);
     });
*/
     await browser.close();
     return base64Data;

    } catch (e){
      return(`Something went wrong. Make sure you have chrome browser installed.
      The error code is -> 
      ${e}`)
 
    }



}