const User = require('../models/User');
const hashHandler = require('../utils/hashHandler');
const authHandler = require('../utils/authHandler');

// async function userLogin(req, res, next) {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         console.log('Invalid params');
//         return;
//     }
//     const user = await User.findOne({ email }).lean();
//     if (!user) {
//         console.log('Invalid params');
//         return;
//     }
//     const match = await hashHandler.checkPassword(password, user.password);
//     if (!match) {
//         console.log('Invalid params');
//         return;
//     }
//     const token = authHandler.generateToken(user._id, user.email);

//     res.cookie('token', token);
//     res.redirect('/');
// }

async function userRegister(req, res, next) {
    const { firstName, lastName, email, phone, password } = req.body;
    const hashedPassword = hashHandler.hashPassword(password);

    const invalidEmail = await User.findOne({ email });
    if (invalidEmail) {
        console.log('Invalid email');
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end();
    }
    else {
        const user = new User({ firstName, lastName, email, phone, password: hashedPassword });
        await user.save();
        console.log('User saved successfully');
        res = authHandler.setCookie(res, user);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end();
    }
}
// function userLogout(req, res, next) {
//     res.clearCookie('token');
//     res.redirect('/');
// }
async function getUsers (req, res, next) {
    const data = await User.find().lean();
    res.send(data)
}


module.exports = {
    userRegister,
    getUsers
    // userLogin,
    // userLogout
}