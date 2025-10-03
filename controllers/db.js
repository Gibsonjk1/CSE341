const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');
const e = require('express');

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

const createContact = async (req, res) => {
  const newContact = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email, 
      "favoriteColor": req.body.favoriteColor, 
      "birthday": req.body.birthday
    }
 const create = await mongodb.getDb().db('wk2').collection('contacts').insertOne(newContact);
  if(create.acknowledged)
    {
      res.status(201).send("Contact Created")
    }else{
  res.status(400).json(err || 'an error occurred while saving the contact');
 }
}

const updateContact = async (req, res) => {
  id = new ObjectId(req.params.id);
    const newContact = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email, 
      "favoriteColor": req.body.favoriteColor, 
      "birthday": req.body.birthday
    }
 const update = await mongodb.getDb().db('wk2').collection('contacts').replaceOne({ _id: id}, newContact);
  if(update.modifiedCount > 0)
    {
      res.status(200).send("Contact Updated")
    }else{
  res.status(400).json('an error occurred while updating the contact');
 }
}

const deleteContact = async (req, res) => {
  id = new ObjectId(req.params.id);
 const deleted = await mongodb.getDb().db('wk2').collection('contacts').deleteOne({ _id: id});
 if(deleted.deletedCount > 0)
    {
      res.status(200).send("Contact Deleted")
    }
  if(deleted.deletedCount == 0)
    {
      res.status(204)
    }else{
  res.status(400).json('an error occurred while deleting the contact');
 }
}

module.exports = { contact, contacts, createContact, updateContact, deleteContact };