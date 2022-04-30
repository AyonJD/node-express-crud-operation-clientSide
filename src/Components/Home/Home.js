import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const handleRemoveUser = id => {
        const conformation = window.confirm('Do you want to delete?')
        if (conformation) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //Updating UI after deleting
                    if (data.deletedCount) {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }
    return (
        <div>

            {
                users.map(user => <li key={user._id}>{user.name}::{user.email} <button onClick={() => handleRemoveUser(user._id)}>x</button></li>)
            }
        </div>
    );
};

export default Home;