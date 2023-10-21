module.exports = {
    testAPI: async (req, res) => {
        try {
            res.status(200).json({
                msg: 'OK'
            })
        } catch (error) {
            console.log(error);
        }
    },
}