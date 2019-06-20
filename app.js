const express = require('express');
const app = express();
const request = require('request');

// build the request 
// get the information about error, response as callback
request({
    url : "http://blockchain.info/stats?format=json",
    json : true
}, (error, response, body) => {
    btcPrice = body.market_price_usd;
    btcSent = body.total_btc_sent;
});

// when user hits port 3000, display the btc usd market price
app.get("/", (req, res) => {
    res.send(`BTC Market Price: ${btcPrice}`);
})

// if the user wants to know the total blocks sent, they hit /btcsent
app.get("/btcsent", (req, res) => {
    res.send(`Total BTC Sent: ${btcSent}`);
})

// listen on port 3000 
app.listen(3000, () => console.log("Server Running"));

