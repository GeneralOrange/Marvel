import React from 'react';
import Topbar from './modules/Topbar';
import RenderingTest from './modules/RenderingTest';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="tester">
      <Topbar title="Dit is de titel"/>
      <RenderingTest/>
    </div>
  );
}

export default App;
