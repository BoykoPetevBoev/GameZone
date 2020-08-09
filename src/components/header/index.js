import React, { useContext } from 'react';
import HeaderButtons from '../header-button';
import UserContext from '../../Context';
import styles from './index.module.css';
import { useHistory, Link } from 'react-router-dom';
import ShoppingInfo from '../shopping-info';

function Header() {
    const context = useContext(UserContext);
    const history = useHistory();
    const { loggedIn } = context;

    const logout = () => {
        context.logout();
        history.push('/');
    }

    return (
        <div>

            <nav className={styles.header}>

                <div className={styles.container}>
                    <HeaderButtons name='Home' path='/' />
                    <HeaderButtons name='Admin' path='/admin' />
                </div>

                <div className={styles.container}>
                    <div className={styles['header-logo']}>
                        <p>GAME ZONE</p>
                    </div>
                </div>

                <div className={styles.container}>




                    {/* {loggedIn ? <HeaderButtons name='Cart' path='/shopping-cart' /> : null} */}
                    {/* {loggedIn ? <HeaderButtons name='Wishlist' path='/wishlist' /> : null} */}

                    {loggedIn ? <HeaderButtons name='Profile' path='/profile' /> : null}
                    {loggedIn ? <HeaderButtons name='Logout' path='/' onClick={logout} /> : null}
                    {loggedIn ? null : <HeaderButtons name='Login' path='/login' />}
                    {loggedIn ? null : <HeaderButtons name='Register' path='/register' />}
                </div>
            </nav>
            {loggedIn ?  <ShoppingInfo /> : null }
        </div>
    )
}
export default Header

