const supportedWebsites = [
    'www.amazon.com',
    'www.ebay.com',
    'www.aliexpress.com'
]

// check which website user is visiting
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
  
    let currentWebsite = supportedWebsites.filter(website => url.includes(website))
    init(currentWebsite)
});


const init = (currentWebsite) => {
    alert('start converting '+currentWebsite,  )
}
