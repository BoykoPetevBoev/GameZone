import React from 'react';
import styles from './index.module.css';
import Navigation from '../../components/navigation-admin';

function AdminPage(){
    return (
        <div className={styles.conteiner}>   
            <Navigation />
        </div>
    )
}

export default AdminPage