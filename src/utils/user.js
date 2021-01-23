const { updateWishlist, updateShoppingCart } = require('./requester');

async function addToCart(id, user) {
    if (isInvalidInput(id, user)) return undefined;

    user.shoppingCart.push(id);
    const userUpdate = await updateShoppingCart(user);
    return userUpdate || user;
}

async function removeFromCart(id, user) {
    if (isInvalidInput(id, user)) return undefined;
    const index = user.shoppingCart.findIndex(el => el._id === id);
    if (index === -1) return user;

    user.shoppingCart.splice(index, 1);
    const userUpdate = await updateShoppingCart(user);
    return userUpdate || user;
}

async function addToWishlist(id, user) {
    if (isInvalidInput(id, user)) return undefined;
    const found = user.wishlist.find(el => el._id === id);
    if (found) return user;

    user.wishlist.push(id);
    const userUpdate = await updateWishlist(user);
    return userUpdate || user;
}

async function removeFromWishlist(id, user) {
    if (isInvalidInput(id, user)) return undefined;
    const index = user.wishlist.findIndex(el => el._id === id);
    if (index === -1) return user;

    user.wishlist.splice(index, 1);
    const userUpdate = await updateWishlist(user);
    return userUpdate || user;
}

function isInvalidInput(id, user) {
    if (
        typeof user !== 'object' ||
        typeof id !== 'string' ||
        !Array.isArray(user.shoppingCart) ||
        !Array.isArray(user.wishlist)
    ) return true;
    return false;
}

// export {
//     addToCart,
//     addToWishlist,
//     removeFromCart,
//     removeFromWishlist
// }

module.exports = { addToCart, addToWishlist, removeFromCart, removeFromWishlist }