import React from 'react'
import './App.css';

import Banner from './Componects/Banner/Banner';
import NavBar from './Componects/NavBar/NavBar';
import RowPost from './Componects/RowPost/RowPost';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
