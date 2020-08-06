import React, { useState, useEffect } from 'react';
import UserContext from './Context';

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

function Authorization(props) {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('GameZoneToken');
        if (!token) {
            logout();
            return
        }

        fetch('http://localhost:5000/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(promise => {
            return promise.json();
        }).then(res => {
                res.status
                    ? login(res.user)
                    : logout()
            })
            .catch(err => console.log(err))
    }, []);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
    }
    const logout = () => {
        document.cookie = 'GameZoneToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setLoggedIn(false);
        setUser(null);
    }
    return (
        <UserContext.Provider value={{
            loggedIn,
            user,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Authorization;