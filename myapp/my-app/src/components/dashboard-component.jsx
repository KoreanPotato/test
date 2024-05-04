import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Импорт контекста пользователя, если он у вас есть
import CreateAssignment from './assignment-component';
const Dashboard = () => {
  const user = useContext(UserContext); // Использование контекста для доступа к данным пользователя

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: '#f0f0f0' }}>
        <h1>StudyMate</h1>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </nav>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <section style={{ marginRight: '20px' }}>
          <h2>Добавить задание</h2>
          {/* Форма для добавления заданий */}
          <CreateAssignment/>
        </section>

        
      </div>

      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Место для вашего расписания</h2>
      </main>
    </div>
  );
};

export default Dashboard;
