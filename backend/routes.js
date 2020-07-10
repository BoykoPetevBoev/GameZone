const handlers = require('./handlers/user');
// const utils = require('../utils/authHandler');
// const user = handlers.user;
const { userRegister } = require('./handlers/user');

module.exports = (app) => {
    app.post('/register', userRegister)
};
