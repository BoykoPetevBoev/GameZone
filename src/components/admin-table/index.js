import React from 'react';
import styles from './index.module.css';

function Table({ data }) {

    const renderUser = (line) => {

        return (
            <div className={styles.user}>
                <div key={line._id}>
                    {renderUserInfo(line)}
                </div>
            </div>
        )
    }

    const renderUserInfo = (line) => {
        const keys = Object.keys(line);

        return (
            keys.map(key => {
                return (
                    <div className={styles.line}>
                        <p> {key} :</p>
                        <p> {line[`${key}`]} </p>
                    </div>
                )
            })
        )
    }

    return (
        <div className={styles.table}>

            {data.map(line => renderUser(line))}

        </div>
    );
}

export default Table;