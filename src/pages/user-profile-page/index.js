import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import UserContext from '../../Context';

function UserPage(props) {
    const context = useContext(UserContext);

    console.log(context.user);

    // address: ""
    // email: "boyko@boev.com"
    // firstName: "Boyko"
    // lastName: "Boev"
    // password: "$2b$11$31KnE/aS5MtDewDn1PKnEOIytnk0L983RY7nit8Q5RnRzHMuI4CyG"
    // phone: 87654321
    // shoppingCart: []

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.user}>
                <div className={styles.welcome}>
                    <p>Welcome {context.user.firstName} {context.user.lastName}</p>
                </div>
                <div className={styles.account}>
                    <p>Account</p>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>FIRST NAME:</th>
                                <td>{context.user.firstName}</td>
                            </tr>
                            <tr>
                                <th>LAST NAME:</th>
                                <td>{context.user.lastName}</td>
                            </tr>
                            <tr>
                                <th>EMAIL:</th>
                                <td>{context.user.email}</td>
                            </tr>
                            <tr>
                                <th>PHONE:</th>
                                <td>{context.user.phone}</td>
                            </tr>
                            <tr>
                                <th>ADDRESS:</th>
                                <td>{context.user.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles['shopping-cart']}>
                    <p>Shopping Cart</p>
                </div>
                <div className={styles['more-info-holder']}>

                    <div className={styles.favourite}>
                        <p>Favourite</p>
                    </div>
                    <div className={styles.history}>
                        <p>History</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserPage;