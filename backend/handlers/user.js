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
// function userLogout(req, res, next) {
//     res.clearCookie('token');
//     res.redirect('/');
// }
async function getUsers(req, res, next) {
    const data = await User.find().lean();
    res.send(data)
}


module.exports = {
    userRegister,
    getUsers,
    userLogin
    // userLogin,
    // userLogout
}