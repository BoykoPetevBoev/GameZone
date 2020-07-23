const handlers = require('./handlers/user');
// const utils = require('../utils/authHandler');
// const user = handlers.user;
const { userRegister } = require('./handlers/user');
const { addProduct } = require('./handlers/product');

module.exports = (app) => {
    app.post('/register', userRegister)
    app.post('/add-product', addProduct)
};
