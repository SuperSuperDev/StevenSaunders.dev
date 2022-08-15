/* eslint-disable no-console */

import createBrowserless from 'browserless';
import slugify from 'slugify';

const devices = [
  'Macbook Pro 16',
  'iPad',
  'iPad landscape',
  'iPhone XR',
  'iPhone XR landscape',
  'Pixel 2 XL',
  'Pixel 2 XL landscape',
];

async function getScreenshot(
  url = 'chiangmaiestateagents.com',
  device = 'iPhone 6',
  fullPage = false
) {
  // First, create a browserless factory
  // that it will keep a singleton process running
  const browserlessFactory = createBrowserless();
  console.log('url, device, fullPage :', url, device, fullPage);
  // After that, you can create as many browser context
  // as you need. The browser contexts won't share cookies/cache
  // with other browser contexts.
  const browserless = await browserlessFactory.createContext({
    retry: 3,
    timeout: 120000,
    waitForTimeout: 10000,
  });

  const isFull = fullPage ? '-full' : '';
  const slug = slugify(`${url.toLowerCase()}-${device}${isFull}`, {
    lower: true,
  });
  // Perform the action you want, e.g., getting the HTML markup
  await browserless.screenshot(`http://${url}`, {
    device: device,
    path: `../../public/projects/screenshots/${slug}.png`,
    fullPage: fullPage,
    waitUntil: 'networkidle0',
  });

  // After your task is done, destroy your browser context
  await browserless.destroyContext();

  // At the end, gracefully shutdown the browser process
  await browserlessFactory.close();
  return console.log('Browserless Closed');
}

async function getScreenshots(url) {
  for (const device of devices) {
    console.log('getting screenshot', url, device);
    await getScreenshot(url, device, true);
    await getScreenshot(url, device, false);
    console.log('screenshot COMPLETE', url, device);
  }
}

getScreenshots('pacman.stevensaunders.dev');
