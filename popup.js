const supportedWebsites = [
    'www.amazon.com',
    'ebay.com',
    'www.aliexpress.com',
    'www.asos.com'
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
    let conversionRate = ''
    await fetchConversion().then(res => {
        conversionRate = res[`${from}_${to}`]
    })

    if (!conversionRate) return

    const priceNode = document.getElementsByClassName('a-price a-text-price a-size-medium apexPriceToPay')[0]
    if (priceNode) {
        
    }
}

const initEbay = () => { 
    let conversionRate = ''
    await fetchConversion().then(res => {
        conversionRate = res[`${from}_${to}`]
    })

    if (!conversionRate) return
    let priceNode = document.getElementById('prcIsum')
    if (priceNode) {
        document.getElementById('prcIsum').innerHTML = 1
    }
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

const initAsos = async () => {

}

 
window.addEventListener('load', () => {
    /* Main */
    alert(location.href)
    if (location.href.includes(supportedWebsites[0])) {
        initAmazon()
    }
    if (location.href.includes(supportedWebsites[1])) {
        initEbay()
    }
    if (location.href.includes(supportedWebsites[2])) {
        initAliexpress()
    } 
    if (location.href.includes(supportedWebsites[3])) {
        initAsos()
    } 
})
