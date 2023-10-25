import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const loadUserAlbums = async (userId) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
                params: {
                    userId: userId,
                },
            });

            console.log(response.data);
        } catch (error) {
            console.log('Помилка при завантаженні альбомів', error);
        }
        
    };


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
          console.error('Помилка при отриманні даних з API:', error);
        });
    }, []);

    return (
        <div>
        <h1>Список користувачів</h1>
        {users.map(user => (
            <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <Link to={`/users/${user.id}`} >Show details</Link>
            </div>
        ))}
    </div>
    )
}

export {UsersList};