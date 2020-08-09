const handlers = require('./handlers/user');
// const utils = require('../utils/authHandler');
// const user = handlers.user;
const { userLogin, userRegister, getUsers, verifyLogin, updateShoppingCart, updateWishlist } = require('./handlers/user');
const { addProduct, getProducts, getProduct } = require('./handlers/product');

module.exports = (app) => {
    app.post('/register', userRegister);
    app.post('/login', userLogin);
    app.post('/add-product', addProduct);
    app.post('/get-product', getProduct);

    app.put('/update-shopping-cart', updateShoppingCart);
    app.put('/update-wishlist', updateWishlist);
    
    app.get('/verify', verifyLogin);
    app.get('/get-products', getProducts);
    app.get('/get-users', getUsers);
};
