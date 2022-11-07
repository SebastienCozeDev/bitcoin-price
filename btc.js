#!/usr/bin/env node
const axios = require('axios');

async function main() {
    try {
        let currency = 'USD';
        if (process.argv[2]) {
            currency = process.argv[2].toUpperCase();
        }
        const response = await axios.get('http://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.data.bpi[currency]) {
            throw new Error('Unknown currency');
        }
        const updatedAt = response.data.time.updated;
        const rate = response.data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        console.error(err.toString());
    }
}

main();