/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    waitFor
} = require('taiko');
const assert = require("assert");
const { time } = require('console');
const headless = process.env.headless_chrome.toLowerCase() === 'false';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});



// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

afterSuite(async () => {
    await closeBrowser();
});

step("Open SFDC application", async function () {
    await goto("login.salesforce.com");
    await write("himeshrockss@gmail.com");
    await write("kittu@7717", into (textBox("Password")));
    await press("Enter");
    await waitFor(time,30000);
    await waitFor("Accounts")
    await click("Accounts");
    //await waitFor("Accounts");
    //await waitFor(Element.name("Accounts"));
    });




