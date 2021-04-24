const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const router = require('./Routers/router.js');
const bundleRouter = require('./Routers/bundleRouter.js');
const axios = require('axios');

app.use(cors());
app.use(express.json())
app.use('*', (req, res, next) => {
  if (!req.originalUrl.match(/disable_hmr_logs.js/gm) && !(req.originalUrl).match(/(\/fonts\/) | (flagIcon) | (images) | (\/favicon.ico)/)) {
    console.log(req.method, req.originalUrl);
  }

  if ((/headBundle/g).test(req.originalUrl)) {
    console.info('~Serving Proxy Client~')
  }
  console.log(req.query);
  if (req.query.service === 'card') {
    console.info('\u001b[1;35m~componentDidMount Cards~');
  } else if (req.method === 'POST') {
    console.info('\u001b[1;35m~componentDidMount Gage~');
  } else if (req.query.service === 'related-products') {
    console.info('\u001b[1;35m~componentDidMount Melissa~');
  } else if (req.query.service === 'details' && req.query.indicator !== 'activity') {
    console.info('\u001b[1;35m~componentDidMount James~');
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