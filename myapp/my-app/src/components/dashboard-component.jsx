import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Импорт контекста пользователя, если он у вас есть
import CreateAssignment from './assignment-component';
import SchedulePage from './Schedule-component';

const Dashboard = () => {
  const user = useContext(UserContext); // Использование контекста для доступа к данным пользователя

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
  <section>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add assignment</h2>
    <CreateAssignment />
  </section>
  <SchedulePage />
</div>

      <main style={{ display: 'flex', justifyContent: 'center' }}>
      </main>
    </div>
  );
};

export default Dashboard;
