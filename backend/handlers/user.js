const User = require('../models/User');
const bcrypt = require('bcrypt');
// const hashHandler = require('../utils/hashHandler');
// const authHandler = require('../utils/authHandler');

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

function hashPassword(password){
    const salt = bcrypt.genSaltSync(11);
    const hashPassword = bcrypt.hashSync(password, salt);

    return hashPassword;
}
async function userRegister(req, res, next) {
    const { firstName, lastName, email, phone, password } = req.body.user;
    const hashPassword = hashPassword(password);

    const user = new User({ firstName, lastName, email, phone, password: hashPassword });
    // const userData = await user.save();
    console.log(user);
    
    // const token = authHandler.generateToken(userData._id, userData.email);

    // res.cookie('token', token);
    // res.redirect('/');
}
// function userLogout(req, res, next) {
//     res.clearCookie('token');
//     res.redirect('/');
// }


module.exports = {
    userRegister,
    // userLogin,
    // userLogout
}