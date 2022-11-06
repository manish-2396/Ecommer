const mongoose = require('mongoose');

require('dotenv').config();

const connection = mongoose.connect(process.env.MOGO_DB)

module.exports = {
    connection
}