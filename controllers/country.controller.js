const destinationData = require("../dummyData/destinationData.json");
const CountryModel = require("../models/country.model");

module.exports = {
    getCountries: async (req, res) => {
        try {
            const countries = await CountryModel.find();

            res.status(200).json({
                message: "Success Retreaving Data",
                data: countries
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    getOneCountry: async (req, res) => {
        try {
            const {id} = req.params;
            const country = await CountryModel.findById(id);

            if(!country){
                return res.status(404).json({
                    message: 'Country not found'
                })
            }

            res.status(200).json({
                message: "Success Retreaving Data",
                data: country
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    createCountry: async (req, res) => {
        try {
            const country = await CountryModel.create({
                name: req.body.name,
                image: req.body.image
            });

            res.status(201).json({
                message: 'Country Posted',
                data: country
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}
