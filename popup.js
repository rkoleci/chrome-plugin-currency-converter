const supportedWebsites = [
    'www.amazon.com',
    'www.ebay.com',
    'www.aliexpress.com'
]


const initAmazon = () => {

}

const initEbay = () => {
    
}

const initAliexpress = () => {
    let node = document.getElementsByClassName('uniform-banner-box-price')[0]
    node.innerHTML = 10
}

if (location.href.includes(supportedWebsites[0])) {
    initAmazon()
}
if (location.href.includes(supportedWebsites[1])) {
    initEbay()
}
if (location.href.includes(supportedWebsites[2])) {
    initAliexpress()
}
