import React from 'react';
import './App.css';
import List from '../container//List/List';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome!</h1>
      </header>
    
      <List className="App-list"/>

    </div>
  );
};

export default App;
