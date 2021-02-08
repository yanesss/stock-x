require('dotenv').config();

const webhook = process.env.WEBHOOK;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

module.exports = {
    webhook,
    email,
    password
}