const fetch = require("node-fetch");
const baseUrl = 'http://localhost:5000';

async function fetchRequest(method, body, url, headers) {
    if (!headers) headers = { 'Content-Type': 'application/json' }
    if (body) body = JSON.stringify(body)

    return fetch(url, { method, headers, body })
        .then(res => {
            if (res.status < 300) return res.json();
            else return undefined;
        })
        .catch(e => {
            throw new Error(e);
        })
}

// function setToken(promise) {
//     const token = promise.headers.get('Authorization');
//     document.cookie = `GameZoneToken=${token}`;
// }

async function userLogin(body) {
    if (!body) return undefined;
    const data = await fetchRequest('POST', body, `${baseUrl}/login`);
    return data;
}

async function userRegister(body) {
    if (!body) return undefined;
    const data = await fetchRequest('POST', body, `${baseUrl}/register`);
    return data;
}

async function updateShoppingCart(user) {
    const response = await fetchRequest('PUT', user, `${baseUrl}/update-shopping-cart`);
    return response;
}

async function updateWishlist(user) {
    const response = await fetchRequest('PUT', user, `${baseUrl}/update-wishlist`);
    return response;
}

async function userAuthorization(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    const data = await fetchRequest('GET', undefined, `${baseUrl}/verify`, headers);
    return data;
}

async function getProduct(id) {
    const data = await fetchRequest('GET', undefined, `${baseUrl}/get-product?id=${id}`);
    return data ? data : {};
}

async function getAllProducts() {
    const data = await fetchRequest('GET', undefined, `${baseUrl}/get-products`);
    return data ? data : [];
}

async function getAllUsers() {
    const data = await fetchRequest('GET', undefined, `${baseUrl}/get-users`);
    return data ? data : [];
}

async function addProduct(body) {
    const promise = await fetchRequest('POST', body, `${baseUrl}/add-product`);
    console.log(promise);
    return promise
}
async function updateProduct(body) {
    const promise = await fetchRequest('PUT', body, `${baseUrl}/update-product`);
    return promise;
}
async function deleteProduct(id) {
    const promise = await fetch(`${baseUrl}/delete-product?id=${id}`, {
        method: 'DELETE'
    });
    return promise;
}

module.exports = {
    userLogin,
    userRegister,
    userAuthorization,
    addProduct,
    updateShoppingCart,
    updateWishlist,
    updateProduct,
    getAllProducts,
    getAllUsers,
    getProduct,
    deleteProduct
}