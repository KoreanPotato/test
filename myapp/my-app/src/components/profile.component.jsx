import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Убедитесь, что вы создали и предоставили этот контекст

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Имя пользователя: {user.username}</p>
      <p>Электронная почта: {user.email}</p>
      <p>Пароль: {user.password}</p> {/* Обычно пароль не отображается в профиле */}
      <p>ID: {user.id}</p>
    </div>
  );
};

export default Profile;
