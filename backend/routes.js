const {
    userLogin,
    userRegister,
    getUsers,
    verifyLogin,
    updateShoppingCart,
    updateWishlist
} = require('./handlers/user');

const {
    addProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('./handlers/product');

module.exports = (app) => {
    app.get('/verify', verifyLogin);
    app.get('/get-users', getUsers);
    app.get('/get-product', getProduct);
    app.get('/get-products', getProducts);

    app.post('/register', userRegister);
    app.post('/login', userLogin);
    app.post('/add-product', addProduct);

    app.put('/update-shopping-cart', updateShoppingCart);
    app.put('/update-wishlist', updateWishlist);
    app.put('/update-product', updateProduct);

    app.delete('/delete-product', deleteProduct)
};
