import React from 'react';
import ershaoBg from './asset/image/ershao.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={ershaoBg} className="App-logo" alt="logo" />
      <div className="content">
        二少，生日快乐！
      </div>
    </div>
  );
}

export default App;
