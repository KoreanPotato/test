import React, { useEffect, useState } from 'react';
import axios from '../axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/user/me', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                setUser(response.data);
            } catch (err) {
                setError('Ошибка при загрузке данных пользователя');
                console.error('Error:', err);
            }
        };

        fetchUser();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>Профиль пользователя</h1>
                    <p>Имя: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
}

export default Profile;