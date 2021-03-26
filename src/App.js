import React from "react";
import './App.css';
import video from './videos/woman.mp4';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Art Videos</h1>
      </header>
      <video src={video} controls height={200}/>
    </div>
  );
}

export default App;
