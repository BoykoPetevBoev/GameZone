import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Navigation() {


    return (
        <div className={styles['menu-list']}>
            <ul>
                <li className={styles['special-effects']} >
                    <Link className={styles.link} to="/mouse">
                        {/* <b> */}
                            MOUSE
                        {/* </b> */}
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link} to="/keyboards">
                        {/* <b> */}
                            KEYBOARDS
                            {/* </b> */}
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link} to="/headsets">
                        {/* <b> */}
                            HEADSETS
                            {/* </b> */}
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link} to="/mousepads">
                        {/* <b> */}
                            MOUSEPADS
                            {/* </b> */}
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link} to="/accessories">
                        {/* <b> */}
                            ACCESSORIES
                            {/* </b> */}
                    </Link>
                </li>
            </ul>
        </div>
    );
}


export default Navigation