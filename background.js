const pageAll = "?page=all";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.match(/^http.?:\/\/(.*\.)*tribunnews.com\/.*/)[0] && !details.url.includes(pageAll)) {
      return{
        redirectUrl:
          details.url.match(/^http.?:\/\/(.*\.)*tribunnews.com\/.*/)[0] + pageAll
      }
    }
  },
  {
    urls: [
      "*://tribunnews.com/*",
      "*://*.tribunnews.com/*",
    ],
    types: [
      "main_frame"
    ]
  },
  ["blocking"]
);
