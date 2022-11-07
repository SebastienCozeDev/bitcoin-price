#!/usr/bin/env node
const axios = require('axios');

async function main() {
    const response = await axios.get('http://api.coindesk.com/v1/bpi/currentprice.json');
    const updatedAt = response.data.time.updated;
    const rate = response.data.bpi['USD'].rate;
    console.log(`> 1 BTC = ${rate} USD (${updatedAt})`);
}

main();