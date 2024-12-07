const express = require('express');
const cors = require('cors');
const account = require('./account');
const product = require('./product');

var app = express();
app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: true })); // url-encoded bodies
app.use(cors()); // CORS because we're on different port :(

const routes = [
  {endpoint: '/account', path: './account/index.js', handler: account},
  {endpoint: '/product', path: './product/index.js', handler: product}
];

routes.forEach((element) => {
  app.use(element.endpoint, element.handler);
});

console.table(routes);

// The Backend SERVER
app.listen(8080, () => {
  console.log('CORS-enabled web server on 8080.');
});