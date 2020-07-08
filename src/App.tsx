import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProfileList } from 'features/profile/components/ProfileList';
// import { MyForm } from './features/profile/components/ProfileForm';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ProfileList></ProfileList>
    </div>
  );
};

export default App;
