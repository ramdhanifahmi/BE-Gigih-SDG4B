const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;