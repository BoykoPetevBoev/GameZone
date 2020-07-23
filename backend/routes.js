const handlers = require('./handlers/user');
// const utils = require('../utils/authHandler');
// const user = handlers.user;
const { userRegister } = require('./handlers/user');
const { addProduct, getProducts } = require('./handlers/product');

module.exports = (app) => {
    app.post('/register', userRegister)
    app.get('/get-products', getProducts)
    app.post('/add-product', addProduct)
};
