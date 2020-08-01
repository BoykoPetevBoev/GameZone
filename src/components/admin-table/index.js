import React  from 'react';
import styles from './index.module.css';

function Table({ data }) {
    console.log(data);
    const renderUser = () => {
        return data.map(line => {
            console.log(line);
            const keys = Object.keys(line);
            return (
                <div className={styles.user}>
                    <div key={line._id}>

                        {keys.map(key => {
                            return (
                                <div className={styles.line}>
                                    <p> {key} :</p> 
                                    <p> {line[`${key}`]} </p>
                                </div>
                            )
                        })}

                        <button className={styles.button} >CHANGE</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.table}>
            {renderUser()}
        </div>
    );
}

export default Table;