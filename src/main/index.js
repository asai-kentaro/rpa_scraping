"use strict"

const {BrowserWindow} = require('electron').remote
const electron = require('electron')
const remote = electron.remote
const scrapeUtil = remote.require('./src/lib/scrape_util')

const startButton = document.getElementById('btn-start')
startButton.addEventListener('click', (event) => {
  scrapeUtil.processWebSearch("alphabet")
})
