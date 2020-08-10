import React, { Component } from 'react';
// import styles from './index.module.css';
import Table from '../../components/admin-table';
import AdminNavigation from '../../components/admin-navigation';
import { getAllUsers } from '../../utils/requester';

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount = async () => {
        const users = await getAllUsers();
        console.log(users);
        this.setState({
            users
        });
    }
    render() {
        const { users } = this.state
        if (users.length === 0) {
            return (
                <div>
                    <AdminNavigation />
                </div>
            )
        }
        return (
            <div>
                <AdminNavigation />
                <Table data={users} />
            </div>
        );
    }   
}

export default Users;
