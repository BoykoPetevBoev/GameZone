import React from 'react';
import styles from './index.module.css';
import Navigation from '../../components/admin-navigation';
import Header from '../../components/header';

function AdminPage() {
    return (
        <div className={styles.conteiner}>
            <Header />
            <Navigation />
            <div className={styles.main}>

            </div>
        </div>
    )
}

export default AdminPage