import React, { createContext, useState } from 'react';

export const UserContext = createContext(null); // Создание контекста с начальным значением null

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Логика для установки данных пользователя
  };

  const logout = () => {
    setUser(null); // Логика для очистки данных пользователя
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
