const { connect } = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await connect(process.env.URI);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { connectDB };
