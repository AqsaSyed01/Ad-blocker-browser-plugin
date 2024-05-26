const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.urdu.geo.tv//*",
  "*://*.googleadservices.com/*",
  "*://*.googletagmanager.com/*",
  "*://*.googleadservices.com/*",
  "*://*.googleads.g.doubleclick.net/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
