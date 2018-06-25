import test from 'ava';
import puppeteer from 'puppeteer';

let browser, page;

test.before('Open the test page in browser', async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    await page.goto(`file:///${__dirname}/test.html`);
});

test('15 words', async t => {
    let words = await page.$eval('[data-dummy="15 words"]', element => {
        return element.innerText;
    });

    words = words.split(' ');

    t.is(words.length, 15);
});

test('10 sentences', async t => {
    let sentences = await page.$eval('[data-dummy="10 sentences"]', element => {
        return element.innerText;
    });

    sentences = sentences.split('. ');

    t.is(sentences.length, 10);

    for (const sentence of sentences) {
        const words = sentence.split(' ');
        t.true(words.length >= 5 && words.length <= 12);
    }
});

test('3 paragraphs', async t => {
    let paras = await page.$eval('[data-dummy="3 paragraphs"]', element => {
        return element.innerText;
    });

    paras = paras.split('\n');

    t.is(paras.length, 3);

    for (const para of paras) {
        const sentences = para.split('. ');
        t.true(sentences.length >= 8 && sentences.length <= 14);
    }
});

test.after.always('Close browser', () => {
    browser.close();
});
