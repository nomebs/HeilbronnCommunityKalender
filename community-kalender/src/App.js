import React from "react";
import './App.css';
import LeftNavbar from "./components/LeftNavbar.js";
import SearchBar from "./components/Searchbar.js";
import'./index.css';

function App() {
  return (
    <div className="app-container">
      <LeftNavbar />
     <div className="main-content">
      <h1>Heilbronn Communities</h1>
      <SearchBar />
    </div>
    </div>
  );
}

export default App;
