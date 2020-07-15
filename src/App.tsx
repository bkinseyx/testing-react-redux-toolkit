import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ProfileList } from 'features/profile/components/ProfileList/ProfileList';
import { ToDoCard } from 'features/toDo/components/ToDoCard/ToDoCard';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ProfileList></ProfileList>
      <ToDoCard></ToDoCard>
    </div>
  );
};

export default App;
