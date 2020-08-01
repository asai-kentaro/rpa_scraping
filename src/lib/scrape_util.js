const puppeteer = require("puppeteer-core")
const fs = require("fs")

const google_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"          // for Mac OS
//const google_path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"    // for Windows OS

const scrapeUtil = {
  processWebSearch: (search_words) => {
    const launchChrome = puppeteer.launch({
      headless: false,
      executablePath: google_path,
      args: ["--guest","--window-size=1280,800",],
    })
    launchChrome.then(async (browser) => {
      // create page
      const page = (await browser.pages())[0] || (await browser.newPage())
      await page.setViewport({ width: 1280, height: 800 })

      // go to "google"
      await page.goto("http://www.google.com", { waitUntil: "domcontentloaded" })

      // search form selector in google page
      const selector = "#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
      // wait until the page is loaded
      await page.waitForNavigation(selector)

      // type search words in the search form
      await page.type(selector, search_words)
      // press Enter
      await page.type(selector, String.fromCharCode(13))
    })
  },
}


module.exports = scrapeUtil;
