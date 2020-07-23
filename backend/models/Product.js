const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: {
        required: true,
        type: String
    },
    brand: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    firstImage: {
        required: true,
        type: String
    },
    secondImage: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Product', ProductSchema)