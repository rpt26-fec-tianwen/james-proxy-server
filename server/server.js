const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const router = require('./router.js');
const bundleRouter = require('./bundleRouter.js');
const axios = require('axios');

app.use(cors());
app.use(express.json())
app.use('*', (req, res, next) => {
  if (!req.originalUrl.match(/disable_hmr_logs.js/gm) && !(req.originalUrl).match(/\/fonts\//)) {
    console.log(req.method, req.originalUrl);
  }

  if ((/headBundle/g).test(req.originalUrl)) {
    console.info('~Serving Client~')
  }

  if (req.query.service === 'card') {
    console.info('~componentDidMount Marlon~')
  } else if (req.method === 'POST') {
    console.info('~componentDidMount Gage~')
  } else if (req.query.service === 'related-products') {
    console.info('~componentDidMount Melissa~')
  } else if (req.query.service === 'details' && req.query.indicator !== 'activity') {
    console.info('~componentDidMount James~')
  }
  next();
});

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.use(express.static(path.resolve('public')));

app.use(/(bundle)?/, bundleRouter);

app.use('/', router);

const port = 8000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})