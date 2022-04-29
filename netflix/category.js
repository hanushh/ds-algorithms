/**
 * @format
 * @name Netflix
 * @desc Logs into Netflix. Provide your username and password in the config file when running the script, i.e:
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const config = require('./config.json');

(async () => {
    let results = [];
    const SHOW_LOADING = config.showLoading;
    const browser = await puppeteer.launch({
        headless: config.headless,
    });
    const page = await browser.newPage();

    // Open login page and login
    await page.goto('https://www.netflix.com/ie/login');
    await page.type('#id_userLoginId', config.username);
    await page.type('#id_password', config.password);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    // Click the user account
    await page.click('.profile-link');

    // Start going though the urls
    let categoryID = 61904; // Count
    let error = 0; // If four errors in a row, end the loop.
    const ERROR_LIMIT = config.errorLimit;

    await page.goto(`https://www.netflix.com/browse/genre/${categoryID}?so=az`);
    let element = await page.$('.genreTitle');

    // If the element exisits
    if (element !== null) {
        let categorieTitle = await (await element.getProperty('textContent')).jsonValue();


        if (SHOW_LOADING) console.log(`.${categoryID} ${categorieTitle}`);

        // Create json object
        let jsonObject = {
            title: categorieTitle,
            id: categoryID,
        };
        let galleryLockups = await page.$('.galleryLockups');

        if (galleryLockups) {
            jsonObject.movies = await galleryLockups.$$eval('.slider-refocus', nodes => nodes.map(n => n.getAttribute('aria-label')));
        }

        results.push(jsonObject);
    }


    fs.writeFile('results.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('complete');
        console.log('Categories:' + categoryID);
        browser.close();
    });
})();
