const log = require('../logger');
const { email, password } = require('../data');

const login = loginTask => {
    log('Submitting login information', 'log');
    let loginOpts = {
        url: 'https://stockx.com/api/login',
        method: 'POST',
        headers: {
            'appversion':'0.1',
            'appos':'web',
            'x-requested-with':'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9'
        },
        gzip: true,
        form: {
            username: email,
            password: password
        },
        json:true
    }

    axios(loginOpts)
    .then(res => {
        log('Successfully logged in', 'success');
        console.log(res);
    })
    .catch(err => {
        log('ERROR LOGGING IN','error');
    })
}

module.exports = login;
