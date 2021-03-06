const User = require('../models/User');
const hashHandler = require('../utils/hashHandler');
const authHandler = require('../utils/authHandler');

async function userLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).send('Invalid data').end();

    const user = await User.findOne({ email }).populate('shoppingCart').populate('wishlist').lean();
    if (!user) return res.status(401).send('Invalid email').end();

    const match = await hashHandler.checkPassword(password, user.password);
    if (!match) return res.status(401).send('Invalid password').end();

    const token = await authHandler.setToken(user);
    return res.status(200).header('Authorization', token).send(user);
}

async function userRegister(req, res) {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(401).send('Invalid data');
    }
    const hashedPassword = hashHandler.hashPassword(password);

    const userData = await User.findOne({ email });
    if (userData) return res.status(401).send('Invalid email');
    else {
        const user = new User({ firstName, lastName, email, password: hashedPassword });
        await user.save();

        const token = authHandler.setToken(user);
        return res.status(201).header('Authorization', token).send(user);
    }
}

async function verifyLogin(req, res) {
    const token = req.headers.authorization || '';
    const tokenStatus = await authHandler.verifyToken(token);
    if (tokenStatus) {
        const user = await User.findById(tokenStatus.id).populate('shoppingCart').populate('wishlist')
        return res.send({
            status: true,
            user
        });
    }
    else {
        return res.send({ status: false });
    }
}

async function getUsers(req, res) {
    const data = await User.find().populate('shoppingCart').populate('wishlist').lean();
    res.send(data)
}

async function updateShoppingCart(req, res) {
    const user = req.body;
    if (!user || !user._id || !user.shoppingCart) {
        return res.status(404).send('Invalid data').end();
    }
    const data = await User.findByIdAndUpdate(user._id, { shoppingCart: user.shoppingCart }, { new: true }).populate('shoppingCart').populate('wishlist');
    res.status(201).send(data);
}
async function updateWishlist(req, res) {
    const user = req.body;
    if (!user || !user._id || !user.wishlist) {
        return res.status(404).send('Invalid data').end();
    }
    const data = await User.findByIdAndUpdate(user._id, { wishlist: user.wishlist }, { new: true }).populate('shoppingCart').populate('wishlist');
    res.status(201).send(data);
}


module.exports = {
    userRegister,
    getUsers,
    userLogin,
    verifyLogin,
    updateShoppingCart,
    updateWishlist
}