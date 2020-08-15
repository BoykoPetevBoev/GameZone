import React from 'react';
import Navigation from '../admin-navigation';
import styles from './index.module.css';

function AdminWrapper(props) {
    return (
        <div>
            <div className={styles.admin}><p>ADMIN PANEl</p></div>
            <Navigation />
            <div className={styles.children}>
                {props.children}
            </div>
        </div>
    );
}

export default AdminWrapper;