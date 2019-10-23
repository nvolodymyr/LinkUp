import React from 'react';
import NavigationHeaderMenu from './components/NavHeaderMenu/NavHeaderMenu';
import NavBottomMenu from './components/NavBottomMenu/navBottomMenu';
import  UserList  from './components/Users/UserList';
function App() {
  return (
    <div className="App">
      <NavigationHeaderMenu />
      <UserList />
      <NavBottomMenu />
    </div>
  );
}

export default App;
