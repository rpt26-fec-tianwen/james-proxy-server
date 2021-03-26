const express = require('express');
const bundleRouter = express.Router();
const axios = require('axios');
const path = require('path');

const cardServiceIP = '';
const detailsServiceIP = '3.138.79.75';
const relatedProductsServiceIP = '';
const reviewsServiceIP = '';

bundleRouter.get('/cardbundle', async (req, res, next) => {
    try {
        const url = `http://${cardServiceIP}/dist/bundle.js`;
        const results = await axios(url);
        res.status(200).send(results.data);
    } catch (err) {
        res.status(500).end(err)
    }
})

bundleRouter.get('/detailsbundle', async (req, res) => {
    try {
        const url = `http://${detailsServiceIP}/bundle.js`;
        const results = await axios(url);
        res.status(200).send(results.data);
    } catch (err) {
        res.send(err);
    }
});

bundleRouter.get('/related-productsbundle', async (req, res, next) => {
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