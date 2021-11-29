const supportedWebsites = [
    'www.amazon.com',
    'www.ebay.com',
    'www.aliexpress.com'
]

const apiKey = '5a49beefa5e7696bc287'
let from = 'USD'
let to = 'EUR'
const api = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${apiKey}`

const fetchConversion = async () => {
    const response = await fetch(api)
    const conversion = await response.json()
    return conversion
}

const initAmazon = () => {

}

const initEbay = () => {

}

const initAliexpress = async () => {

    let conversionRate = ''
    await fetchConversion().then(res => {
        conversionRate = res[`${from}_${to}`]
    })

    if (!conversionRate) return

    const tags = [
        'uniform-banner-box-price',
        'simple-card-price',
        'item-price line-limit-length'
    ]

    tags.map(tag => {
        let nodes = document.getElementsByClassName(tag)
        Array.from(nodes).map(node => {
            let priceText = node.innerHTML.split('$')[1]
            node.innerHTML = `€ ${(parseFloat(priceText) * parseFloat(conversionRate)).toFixed(2)}`
        })
    })


}

 
window.addEventListener('load', () => {
    /* Main */

    if (location.href.includes(supportedWebsites[0])) {
        initAmazon()
    }
    if (location.href.includes(supportedWebsites[1])) {
        initEbay()
    }
    if (location.href.includes(supportedWebsites[2])) {
        initAliexpress()
    } 
})
