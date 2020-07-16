import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ProfileCard } from 'features/profile/components/ProfileCard/ProfileCard';
import { ToDoCard } from 'features/toDo/components/ToDoCard/ToDoCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProfileCard></ProfileCard>
      <ToDoCard></ToDoCard>
    </div>
  );
};

export default App;
