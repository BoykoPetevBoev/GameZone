const Product = require('../models/Product');

async function addProduct(req, res) {
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
    console.log(product);
    const status = await product.save();
    console.log(status);
    res.status(201).send(status);
}

async function getProducts(req, res) {
    const data = await Product.find().lean();
    res.send(data);
}

async function getProduct(req, res) {
    const { id } = req.query;
    const product = await Product.findById(id).lean();
    res.status(201).send(product);
}

async function updateProduct(req, res) {
    console.log(req.body);
    const { id,
        category,
        brand,
        model,
        price,
        description,
        images,
        characteristics } = req.body;
    try {
        const status = await Product.findByIdAndUpdate(id, {
            category,
            brand,
            model,
            price,
            description,
            images,
            characteristics
        }, { new: true });
        res.status(201).send(status);

    } catch (error) {
        res.status(401);
    }
}

async function deleteProduct(req, res) {
    const { id } = req.query;
    await Product.deleteOne({ _id: id });;
    res.status(200).send('product deleted');
}

module.exports = {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}