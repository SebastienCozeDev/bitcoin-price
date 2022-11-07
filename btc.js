#!/usr/bin/env node
const axios = require('axios');

async function main() {
    /**
     * Main function of this program.
     */
    const currency = process.argv[2]
        ? process.argv[2].toUpperCase() 
        : 'USD';
    try {
        const url = 'http://api.coindesk.com/v1/bpi/currentprice.json';
        const { data } = await axios.get(url);
        if (!data.bpi[currency]) {
            throw new Error('Unknown currency');
        }
        const updatedAt = data.time.updated;
        const rate = data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        console.error(err.toString());
    }
}

main();