const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    make: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    imageUrl: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema)