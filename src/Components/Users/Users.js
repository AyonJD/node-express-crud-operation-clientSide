import React from 'react';

const Users = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
            <h1>Please add a new user</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' id="" /><br/>
                <input type="email" name="email" placeholder='email' id="" /><br/>
                <input type="submit" value="Add User" id="" />
            </form>
        </div>
    );
};

export default Users;