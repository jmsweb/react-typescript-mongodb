const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  family: 4 // Node 17+ requirement
});
const router = express.Router();

const timeLog = (request, response, next) => {
  console.log('[Product] API Access Timestamp: ', Date.now());
  next();
}

// Middleware for this context path
router.use(timeLog);

// GET /product
router.get('/', cors(), async (request, response, next) => {
  const database = client.db('matchsquare');
  const products = database.collection('products');
  response.json(await products.find().toArray());
});

// POST /product
router.post('/', cors(), async (request, response, next) => {
  console.log(request.body);
  const database = client.db('matchsquare');
  const products = database.collection('products');

  response.json(await products.insertOne(request.body));
});

// PATCH /product
router.patch('/', cors(), async (request, response, next) => {
  console.log(request.body);
  const database = client.db('matchsquare');
  const products = database.collection('products');

  response.json(await products.updateOne(
    {_id: new ObjectId(request.body._id)},
    { $set: { name: request.body.name, cost: request.body.cost}},
    {}
  ));
});

// DELETE /product
router.delete('/', cors(), async (request, response, next) => {
  const database = client.db('matchsquare');
  const products = database.collection('products');
  response.json(
    await products.deleteMany({
      _id: {
        $in: request.body.map(id => (new ObjectId(id)))
      }
    })
  );
});

module.exports = router;