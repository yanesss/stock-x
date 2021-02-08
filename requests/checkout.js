// if (parseInt(maxPrice) <= productPrice) {
//     // send request to buy
//     console.log('checking quantity ' + task.Quantity);
//     let buyOpts = {
//         url: `https://stockx.com/api/products/${productUuid}/activity?state=400&currency=USD&limit=${task.Quantity}&page=1&sort=amount&order=ASC&timestamp=${parseInt(Date.now()/1000)}`,
//         method: 'GET',
//         headers: {
//         'appversion': '0.1',
//         'appos': 'web',
//         'x-requested-with': 'XMLHttpRequest',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
//         'accept': '*/*',
//         'accept-encoding': 'gzip, deflate, br',
//         'accept-language': 'en-US,en;q=0.9'
//         },
//         gzip: true,
//         json: true,
//         proxy : {
//             // set up proxy
//             host: '',
//             port: ''
//         }
//     };
// }