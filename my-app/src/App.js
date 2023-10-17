import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;