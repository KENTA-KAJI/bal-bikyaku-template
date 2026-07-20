const puppeteer = require('puppeteer');
const fs = require('fs');

const widths = [402, 430];
const url = 'http://localhost:3000';
const outDir = '/Users/rendigim3no.3/.gemini/antigravity/brain/ffb549d8-a2a5-4d68-9da3-e6d59415f2b3';
const prefix = process.argv[2] || 'before';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (const width of widths) {
    await page.setViewport({ width, height: 800, deviceScaleFactor: 2 });
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 5000 });
    } catch (e) {
      console.log('Navigation timeout, continuing to screenshot');
    }
    await new Promise(r => setTimeout(r, 1000));
    
    // Take full page screenshot
    const filename = `mobile-${width}-${prefix}.png`;
    await page.screenshot({ path: `${outDir}/${filename}`, fullPage: true });
    
    console.log(`--- Width: ${width}px --- saved as ${filename}`);

    // Analyze line breaks in h1, h2, h3, .lead, etc.
    const analysis = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, .lead, p');
      const results = [];
      
      for (const el of elements) {
        if (!el.innerText || el.innerText.trim() === '') continue;
        
        // Skip hidden or very small elements
        if (el.offsetHeight === 0) continue;
        
        const style = window.getComputedStyle(el);
        const lineHeightStr = style.lineHeight;
        let lineHeight = parseFloat(lineHeightStr);
        if (isNaN(lineHeight)) {
          lineHeight = parseFloat(style.fontSize) * 1.5; // fallback
        }
        
        const lines = Math.round(el.clientHeight / lineHeight);
        
        if (lines >= 3 || el.tagName.match(/^H[1-3]$/) || el.className.includes('lead')) {
           results.push({
             tag: el.tagName,
             class: el.className,
             text: el.innerText.replace(/\n/g, ' \\n '),
             lines: lines
           });
        }
      }
      return results;
    });

    for (const res of analysis) {
      if (res.lines >= 3) {
         console.log(`[3+ Lines] ${res.tag}.${res.class.split(' ')[0] || ''} (${res.lines} lines): ${res.text}`);
      }
    }
  }

  await browser.close();
})();
