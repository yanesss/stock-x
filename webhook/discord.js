const axios = require('axios');
const { webhook } = require('../data');

const sendToDiscord = (title, link, price, img) => {
    const product = {
        "username": "StockX",
        "avatar_url": "https://i.imgur.com/4M34hi2.png",
        "content": "Newest Funko Pop Available Now!",
        "embeds": [{
                "title": `${ title }`,
                "url": `${ link }`,
                "color": 15258703,
                "fields": [
                    {
                        "name": "**Price**",
                        "value": `${ price }`,
                        "inline": true
                    },
                    {
                        "name": "\u200B",
                        "value": "\u200B",
                        "inline": true
                    },
                    {
                        "name": "**Stock**",
                        "value": "In Stock",
                        "inline": true
                    },
                    {
                        "name": "**Type**",
                        "value": "New Product",
                        "inline": true
                        
                    },
                    {
                        "name": "\u200B",
                        "value": "\u200B",
                        "inline": true
                    },
                    {
                        "name": "**Link**",
                        "value": `${ link }`,
                        "inline": true
                    }
                ],
                "thumbnail": {
                    "url": `${ img }`
                }
            }]
        };
}

module.exports = sendToDiscord;
