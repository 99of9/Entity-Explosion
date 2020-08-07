// every time we load a new page (URL?) we send the URL to the background script so it can check and turn the button green/red/grey
chrome.runtime.sendMessage({
  url: window.location.href,
  greeting: "hello from content.js"
})

//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//  if (typeof request.getURL !== 'undefined') {
//	  console.log("got URL request: "+request.getURL+" URL= "+window.location.href)
//	  chrome.runtime.sendmessage({url: window.location.href, greeting: "reply to getURL from content.js"})
//  }
//})
