import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    const handleUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = { name, email };
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log('Error', error);
            })
        alert('Data send successfully');
        event.target.reset()
    }
    return (
        <div>
            <h1>Updating {user.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='name' id="" /><br />
                <input type="email" name="email" placeholder='email' id="" /><br />
                <input type="submit" value="Update User" id="" />
            </form>
        </div>
    );
};

export default SingleUser;