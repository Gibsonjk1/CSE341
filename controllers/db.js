const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');

const contact = async (req, res) => {
  id = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('wk2').collection('contacts').findOne({ _id: id});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

const contacts = async (req, res) => {
  const result = await mongodb.getDb().db('wk2').collection('contacts').find()
  result.toArray().then((list) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(list);
  })
  
};

module.exports = { contact, contacts };