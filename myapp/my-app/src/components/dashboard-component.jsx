import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import CreateAssignment from './assignment-component';
import SchedulePage from './Schedule-component';

const Dashboard = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', paddingLeft: '100px', paddingRight: '100px' }}>
  <section>
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
