import React from "react";
import "./App.css";
import { Action, originals } from "./urls";
import Banner from "./Componects/Banner/Banner";
import NavBar from "./Componects/NavBar/NavBar";
import RowPost from "./Componects/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={Action} title="Action" isSmall />
    </div>
  );
}

export default App;
