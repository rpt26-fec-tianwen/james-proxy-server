const express = require(`express`);
const router = express.Router();
const axios = require('axios');
const path = require('path')

const detailsServiceIP = '3.138.79.75';

router.get('/card/:id', async (req, res, next) => {
  try {
    const results = await axios(`http://localhost:8001/card/${req.params.id}`);
    res.status(200).send(results.data);
  } catch (err) {
    res.send(err)
  }
});

router.get('/details/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const results = await axios(`http://${detailsServiceIP}/${productId}`, { params: { indicator: 'all' } });
    res.status(200).send(results.data);
  } catch (err) {
    res.send(err.message);
  }
})

router.get('/activity/:id', async (req, res, next) => {
  try {
    const url = `http://localhost:8002/${req.params.id}`;
    const results = await axios(url, { params: { indicator: req.query.indicator } });
    res.send(results.data.activity)
  } catch (err) {
    res.send(err);
  }
})

router.get('/reviews-products/:id', async (req, res, next) => {
  try {
    // review service individual review, api route not set up yet.
    res.send('ok')
  } catch (err) {
    res.send(err);
  }
})

router.post('/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const results = await axios.post(`http://localhost:3000/reviews?id=${productId}`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
  next();
})

router.get('/:productId', async (req, res, next) => {
  try {
    res.sendFile(path.resolve('public/index.html'));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
