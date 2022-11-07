#!/usr/bin/env node
const axios = require('axios');

async function main() {
    const response = await axios.get('http://api.coindesk.com/v1/bpi/currentprice.json');
    console.log(response.data.bpi['USD'].rate);
}

main();