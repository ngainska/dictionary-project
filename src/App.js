import bit2 from './bit2.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={bit2} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main className="App-main">
        <h2 className="mb-3">Dictionary App</h2>
        <Dictionary/>
        </main>
      <footer className="App-footer">
        <small>Coded by <a href="https://admiring-sinoussi-3cc72d.netlify.app/">Nicole Gainska</a> and <a href="https://github.com/ngainska/dictionary-project">open-sourced on GitHub</a> </small></footer>
      </div>
    </div>
  );
}

