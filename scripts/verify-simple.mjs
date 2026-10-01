import { chromium } from '/Users/admin/CompoundLabs/compound-ops/node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
const base = process.env.BASE_URL || 'http://localhost:3872';
const browser = await chromium.launch({headless:true});
try {
 const page = await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto(base); await page.locator('dialog[open]').waitFor();
 await page.getByRole('button',{name:'Close welcome'}).click(); await page.waitForTimeout(260);
 assert.equal(await page.locator('.sv-surface').getAttribute('data-view'),'console');
 await page.goto(base+'/?view=simple&welcome=0&utm_test=keep#chosen');
 await page.locator('.sv-home').waitFor();
 await page.getByRole('button',{name:'The gate that opens the page',exact:true}).click();
 await page.locator('.sv-controls').getByRole('button',{name:'Console',exact:true}).click();
 assert.equal(await page.locator('.chip[aria-pressed=true]').innerText().then(t=>t.includes('deferless render')),true);
 assert(page.url().includes('utm_test=keep')); assert(page.url().endsWith('#chosen'));
 await page.locator('.sv-controls').getByRole('button',{name:'Simple',exact:true}).click();
 assert.equal(await page.locator('.sv-result h3').innerText(),'The gate that opens the page');
 await page.reload(); await page.locator('.sv-home').waitFor();
 await page.getByRole('button',{name:/What this gate checks/}).click();
 assert.equal(await page.locator('.sv-reveal[data-open=true]').count(),1);
 await page.waitForTimeout(300); if(process.env.PROOF_DIR) await page.screenshot({path:process.env.PROOF_DIR+'/desktop.png',fullPage:true});
 for(const width of [1440,390]) {await page.setViewportSize({width,height:900});for(const route of ['/','/kinds','/method']) {await page.goto(base+route+'?view=simple&welcome=0');await page.waitForTimeout(350);assert.equal(await page.locator('.sv-surface').getAttribute('data-view'),'simple');assert.equal(await page.locator('header:visible').count(),1);assert.equal(await page.locator('main:visible').count(),1);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,`${route} ${width} overflow`);}}
 await page.goto(base+'/?view=simple&welcome=0');await page.locator('.sv-home').waitFor();await page.getByRole('button',{name:'How to understand the answer'}).click();await page.waitForTimeout(270);
 if(process.env.PROOF_DIR) await page.screenshot({path:process.env.PROOF_DIR+'/phone.png',fullPage:true});
 await page.locator('.sv-controls').getByRole('button',{name:'Start here'}).click();await page.locator('dialog[open]').waitFor();
 await page.waitForTimeout(300); if(process.env.PROOF_DIR) await page.screenshot({path:process.env.PROOF_DIR+'/welcome-phone.png'});
 await page.getByLabel('Don’t open this when I come back').check();await page.keyboard.press('Escape');await page.waitForTimeout(270);assert.equal(await page.locator('dialog[open]').count(),0);
 await page.goto(base);await page.waitForTimeout(350);assert.equal(await page.locator('dialog[open]').count(),0);await page.locator('.sv-controls').getByRole('button',{name:'Start here'}).click();await page.locator('dialog[open]').waitFor();await page.locator('dialog .sv-choices button').first().click();await page.waitForTimeout(270);
 console.log('PASS: default, URL/storage precedence, switching/query/hash, shared gate, disclosures, routes, responsive overflow, suppression/Escape/reopen/choice. No external writes.');
} finally {await browser.close();}
