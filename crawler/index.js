/**
 * 爬取百度地图图片
 * 要点：
 * 1. 百度图片显示有两种情况，base64 or src
 * 2. 百度图片是懒加载的，如果想拿到更多图片，可以模拟滚动加载 or 把浏览器设置得超级高
 * 3. 如果想调用浏览器原生 js 代码，可以使用 page.evaluate 这个 API
 */
const puppeteer = require('puppeteer');
const path = require('path');
const chalk = require('chalk');

const http = require('http');
const https = require('https');
const fs = require('fs');
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)

const config = {
  url: path.join(__dirname, './images'),
  scrollNumber: 10, // 滚动次数
};

const func = {
  urlToImage: promisify((url, callback) => {
    const request = /http:\/\//.test(url) ? http : https;
    const extname = path.extname(url)
    const filePath = path.join(config.url, `${Date.now()}${extname}`)
    request.get(url, (res) => {
      res.pipe(fs.createWriteStream(filePath))
      res.on('end', () => {
        console.log(chalk.green(`${filePath} loaded`))
        callback()
      })
    });
  }),
  base64ToImage: async (base64Str) => {
    // data:image/jpeg;base65,/xxxx
    // 这里 .+? 中的 ? 表示惰性匹配，举个栗子：匹配字符串 xxx;ooo;
    // 如果没加 ?，会匹配 xxx;ooo;
    // 加了 ?，会匹配 xxx;
    const matches = base64Str.match(/^data:(.+?);base64,(.+)$/)
    const extname = matches[1].split('/')[1]
    const filePath = path.join(config.url, `${Date.now()}.${extname}`)
    await writeFile(filePath, matches[2], 'base64')
    console.log(chalk.green(`${filePath} loaded`));
  },
};

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://image.baidu.com/')

  // 设置窗口
  await page.setViewport({
    width: 1920,
    height: 1080
  })

  await page.focus('#kw')
  await page.keyboard.sendCharacter('miku')
  await page.click('.s_search')

  page.on('load', async () => {
    // 让页面多滚动几次，多懒加载几次
    for (let i = 0; i < config.scrollNumber; i++) {
      await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight))
      await page.waitFor(2000)
    }

    // page.$ 这种方法返回的是 puppeteer 对象，page.$eval 返回的是 dom 对象
    const srcs = await page.$$eval('li img.main_img', images => images.map(img => img.src));
    srcs.forEach(async (src) => {
      if (/\.(png|jpg|gif|jpeg)/.test(src)) {
        await func.urlToImage(src)
      } else {
        await (func.base64ToImage(src))
      }
    })

    await browser.close()
  })
})()
