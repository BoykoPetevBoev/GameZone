const User = require('../models/User');
const hashHandler = require('../utils/hashHandler');
const authHandler = require('../utils/authHandler');

async function userLogin(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();
    if (!user) {
        res.status(401).send('Invalid email');
        return;
    }
    const match = await hashHandler.checkPassword(password, user.password);
    if (!match) {
        res.status(401).send('Invalid password');
        return;
    }
    const token = authHandler.setToken(user);
    return res.header('Authorization', token).send(user);
}

async function userRegister(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = hashHandler.hashPassword(password);

    const invalidEmail = await User.findOne({ email });
    if (invalidEmail) {
        return res.status(401).send('Invalid email');
    }
    else {
        const user = new User({ firstName, lastName, email, password: hashedPassword });
        await user.save();

        const token = authHandler.setToken(user);
        return res.header('Authorization', token).send(user);
    }
}

async function verifyLogin(req, res, next) {
    const token = req.headers.authorization || '';
    const tokenStatus = await authHandler.verifyToken(token);
    if (tokenStatus) {
        const user = await User.findById(tokenStatus.id).populate('shoppingCart')
        return res.send({
            status: true,
            user
        });
    }
    else {
        return res.send(false);
    }
}

async function getUsers(req, res, next) {
    const data = await User.find().lean();
    res.send(data)
}

async function updateShoppingCart(req, res, next) {
    const user = req.body;
    await User.findByIdAndUpdate(user._id, { shoppingCart: user.shoppingCart });
    res.status(200);
    res.end();
}


module.exports = {
    userRegister,
    getUsers,
    userLogin,
    verifyLogin,
    updateShoppingCart
}