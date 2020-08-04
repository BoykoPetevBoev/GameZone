const Product = require('../models/Product');

async function addProduct(req, res, next) {
    console.log(req.body);

    const { category, brand, model, images, description, characteristics } = req.body;
    const price = Number(req.body.price).toFixed(2);

    const product = new Product({
        category,
        brand,
        model,
        price,
        images,
        description,
        characteristics
    })
    await product.save();

    console.log('User saved successfully');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
}
async function getProducts(req, res, next) {
    const data = await Product.find().lean();
    res.send(data)
}
async function getProduct(req, res, next) {
    console.log(req.body);
    const { id } = req.body;
    const product = await Product.findById(id).lean();
    res.send(product)
}

module.exports = {
    getProducts,
    addProduct,
    getProduct
}