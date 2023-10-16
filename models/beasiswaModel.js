const mongoose = require('mongoose');

// Define a schema for the "Beasiswa" collection
const beasiswaSchema = new mongoose.Schema({
  beasiswaId:{
    type:Number,
    required:true
  },
  level: [{ type: String }],
  country:{
    type:String,
    required:true
  },
  name: {
    type:String,
    required:true
  },
  type: {
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  openRegistration:{
    type:Date
  }, 
  deadline: {
    type :Date
  },
  description: {
    scholarship:{
      type : String
    },
    university: [{ type: String }],
    major: [{ type: String }],
  },
  benefit: [{ type: String }],
  requirement: [{ type: String }],
  registration: [{ type: String }],
  contact: {
    email: String,
    phone: String,
  },
});

// Create a model from the schema
const Beasiswa = mongoose.model('beasiswa', beasiswaSchema);

module.exports = Beasiswa;
