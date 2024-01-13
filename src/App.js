import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Profile from './Components/Content1/Profile.jsx';
import Profile2 from './Components/Content1/Profile2.jsx';
import Profile3 from './Components/Content1/Profile3.jsx';
import { Hide, Show } from '@chakra-ui/react';
import './App.css'
const App = () => {
  return (

    <>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}

        <Sidebar />
        <Show above="sm">

          {/* Main Content with marginLeft to leave space for the Sidebar */}
          <div style={{ marginLeft: '70px', width: '25%', background: '#fafafa' }}>
            <Profile />
          </div>
          <div style={{ marginLeft: '-40px', width: '50%', background: '#ffffff' }}>
            <Profile2 />
          </div>
          <div style={{ marginLeft: '0px', width: '26%', background: '#ffffff' }}>
            <Profile3 />
          </div>

        </Show >

      </div>
      <div display="block">

        <Hide above="sm" >
          <div style={{ marginTop: '25px', paddingBottom: "1px", width: '100%', background: '#fafafa' }}>
            <Profile />
          </div>
          <div style={{ width: '100%', paddingTop: "1px", background: '#ffffff' }}>
            <Profile2 />
          </div>
          <div style={{ width: '100%', paddingTop: "1px", background: '#ffffff' }}>
            <Profile3 />
          </div>
        </Hide>
      </div>

    </>
  );
};

export default App;
