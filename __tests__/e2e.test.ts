import {} from "jest";
import path from "path";
import puppeteer from "puppeteer";

describe("e2e with puppeteer", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            slowMo: 100
          }
        : {}
    );
    page = await browser.newPage();
  });

  describe("Index page actions", () => {
    test("Waits for content and screenshots", async () => {
      await page.goto("http://localhost:3000/");
      await page.screenshot({
        path: path.join(
          __dirname,
          "__puppeteer__/__screenshots__",
          "example.png"
        )
      });
    });

    test("Clicks Nanny Humble", async () => {
      await page.goto("http://localhost:3000/");
      await page.content();
      let cardBtns = await page.$$(".card-btn");
      cardBtns[2].click();
      await page.waitFor(200);
      const html = await page.$eval(".f3", e => e.innerHTML);
      await page.screenshot({
        path: path.join(
          __dirname,
          "__puppeteer__/__screenshots__",
          "nanny.png"
        ),
        fullPage: true
      });
      expect(html).toEqual("Selected Person: Nanny Humble is #3");
    });
  });
});
