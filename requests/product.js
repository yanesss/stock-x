const axios = require('axios');
const log = require('../logger');
// const httpsProxyAgent = require('https-proxy-agent');
// const agent = new httpsProxyAgent(); // put in some proxy here

const findProduct = (task) => {
    let startTime = new Date().getTime();
    let productLink = task.productLink.split('.com/')[1];
    let maxPrice = task.maxPrice;
    
    const opts = {
        url: `https://stockx.com/api/products/${productLink}?includes=market&currency=USD`,
        method: 'GET',
        headers: {
            'appversion': '0.1',
            'appos': 'web',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9'
        },
        gzip: true,
        json: true,
        // set up proxy
        // proxy: {
        //     host: '',
        //     port: 
        // }
    };

    axios(opts)
    .then(response => {
        let data = response.data.Product;        
        let productName = data.title;
        let productPrice = data.market.lowestAsk;
        let productImage = data.media.imageUrl;
        let productLink = `https://stockx.com/${data.urlKey}`;
        let productUuid = data.market.productUuid;

        log('Getting product details: ' + productName, 'log');
        log('Found Product: ' + productName, 'success');
    })
    .catch(() => {
        log('Error: Sending request to stockX ' + `${task.productLink}` , 'error');
    });           
}


const lessThanMaxPrice = (currPrice) => {
    if (currPrice <= parseInt(task.maxPrice)) {
        return true;
    }
    
    return false;
}

module.exports = { findProduct };