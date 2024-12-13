const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  family: 4 // Node 17+ requirement
});
const router = express.Router();

const timeLog = (request, response, next) => {
  console.log('[Account] API Access Timestamp: ', Date.now());
  next();
}

router.use(timeLog);

// POST /account/sign-in
router.post('/sign-in', cors(), (request, response, next) => {

  let auth = request.header('Authorization');

  if (!auth) {
    return response.status(401).json({message: "Unauthorized"});
  }

  if (!auth.includes(" ")) {
    return response.status(400).json({message: "Bad Request"});
  }

  auth = atob(auth.split(' ')[1]).split(':');
  console.log(auth);
  console.log(request.body);

  if (auth[1] !== '123456') {
    return response.status(401).json({message: "Unauthorized"});
  }

  response.status(200).json({ success: auth[1] === '123456' });
});

module.exports = router;