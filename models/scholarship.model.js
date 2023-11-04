const mongoose = require('mongoose');
const slugify = require("slugify");

// Define a schema for the "scholarshipSchema" collection
const scholarshipSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  educationalLevel: [{ type: String }],
  country:
    [{ type: String }]
  ,
  title: {
    type:String,
    required:true
  },
  fundingType: {
    type:String,
    required:true
  },
  registrationDate:{
    type:Date
  },
  deadlineDate: {
    type :Date
  },
  description: String,
  university: [String],
  programs: [String],
  benefit: [String],
  requirement: [String],
  applicationProcess: [String],
  sourceInformation: String,
});
scholarshipSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});
// Create a model from the schema
const Scholarship  = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship ;
