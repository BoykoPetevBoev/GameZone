import React from 'react';

const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    login: () => {},
    logout: () => {}
});

export default UserContext;