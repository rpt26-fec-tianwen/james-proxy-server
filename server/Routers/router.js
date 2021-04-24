const express = require(`express`);
const router = express.Router();
const axios = require('axios');
const path = require('path')

const detailsServiceIP = '3.138.79.75';
const relatedProductsIP = '3.129.111.96:8003';

router.get('/card/:id', async (req, res) => {
  try {
    const results = await axios(`http://product-card.fjakeraven.com/card/${req.params.id}`);
    console.log(results.data);
    res.status(200).send(results.data);
  } catch (err) {
    res.send(err)
  }
});

router.get('/cartImage/:id', async (req, res) => {
  try {
    const results = await axios(`http://product-card.fjakeraven.com/card/${req.params.id}`);
    res.send(results.data)
  } catch(err) {
    res.send(err.message);
  }
})

router.get('/details/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const results = await axios(`http://${detailsServiceIP}/${productId}`, { params: { indicator: 'all' } });
    res.status(200).send(results.data);
  } catch (err) {
    res.send(err.message);
  }
})

router.get('/images/all', async (req, res) => {
  try {
    const results = await axios(`http://product-card.fjakeraven.com/all`);
    res.send(results.data);
  } catch(err) {
    res.send(err.message);
  }
})
router.get('/images/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const results = await axios(`http://product-card.fjakeraven.com/display/` + productId);
    res.send(results.data);
  } catch(err) {
    res.send(err.message)
  }
})

router.get('/activity/:id', async (req, res) => {
  try {
    const url = `http://details.fjakeraven.com/${req.params.id}`;
    const results = await axios(url, { params: { indicator: req.query.indicator } });
    res.send(results.data.activity)
  } catch (err) {
    res.send(err);
  }
})

router.get('/related-products/:id', async (req, res) => {
  try {
    const url = `http://${relatedProductsIP}/related-products/${req.params.id}`;
    const results = await axios(url);
    res.send(results.data);
  } catch(err) {
    console.log(err);
    console.log(err.message);
    res.send(err);
  }
})

router.get('/reviews-products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const results = await axios.post(`http://54.183.205.73:8004/${productId}`);
    res.send(results.data[0].product_overall_rating.toString())
  } catch (err) {
    res.send(err);
  }
})

router.post('/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const results = await axios.post(`http://54.183.205.73:8004/${productId}`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.get('/:productId', async (req, res) => {
  try {
    res.sendFile(path.resolve('public/index.html'));
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
