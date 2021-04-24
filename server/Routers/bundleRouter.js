const express = require('express');
const bundleRouter = express.Router();
const axios = require('axios');
const path = require('path');

const cardServiceIP = '';
const detailsServiceIP = '3.138.79.75';
const relatedProductsServiceIP = '3.129.111.96:8003/';
const reviewsServiceIP = '54.183.205.73:8004';

bundleRouter.get('/cardbundle', async (req, res, next) => {
    try {
        const url = `http://product-card.fjakeraven.com/dist/bundle.js`
        // const url = `https://fjakeravenbundles.s3.us-east-2.amazonaws.com/card-bundle.js`;
        const results = await axios(url);
        res.status(200).send(results.data);
    } catch (err) {
        res.status(500).end(err)
    }
})

bundleRouter.get('/detailsbundle', async (req, res) => {
    try {
        const url = `http://${detailsServiceIP}/bundle.js`;
        // const url = `https://fjakeravenbundles.s3.us-east-2.amazonaws.com/bundle.js`;
        const results = await axios(url);
        res.status(200).send(results.data);
    } catch (err) {
        res.send(err);
    }
});

bundleRouter.get('/related-products-bundle', async (req, res, next) => {
    try {
        const url = `http://${relatedProductsServiceIP}/bundle.js`;
        const results = await axios(url);
        res.status(200).send(results.data);
    } catch (err) {
        res.send(err);
    }
});

bundleRouter.get('/reviewsbundle', async (req, res, next) => {
    try {
        const url = `http://${reviewsServiceIP}/bundle.js`;
        const results = await axios(url);
        res.send(results.data);
    } catch (err) {
        res.send(err);
    }
});

module.exports = bundleRouter;