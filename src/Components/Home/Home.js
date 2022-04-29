import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>

            {
                users.map(user => <li key={user._id}>{user.name}::{user.email}</li>)
            }
        </div>
    );
};

export default Home;