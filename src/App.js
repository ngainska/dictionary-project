import React from 'react';
import bit3 from './bit3.png';
import './App.css';
import Dictionary from './Dictionary';


export default function App() {
 
  return (
    <div>
     <div className="App">
      <div className="container">
      <header className="App-header">
        <a href="https://admiring-sinoussi-3cc72d.netlify.app/" target="_blank" rel="noreferrer"><img src={bit3} className="App-logo img-fluid" alt="logo"/></a>
       
      </header>
      <main className="App-main">
        <h2 className="title mb-3">Dictionary App</h2>
        <Dictionary defaultKeyword="winter"/>
        </main>
      <footer className="App-footer">
        <small>Coded by <a href="https://admiring-sinoussi-3cc72d.netlify.app/">Nicole Gainska</a> and <a href="https://github.com/ngainska/dictionary-project">open-sourced on GitHub</a> </small></footer>
      </div>
    </div>
    </div>
    
  );
}

