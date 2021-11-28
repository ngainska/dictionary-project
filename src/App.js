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
      <main>
        <Dictionary/>
        </main>
      <footer className="App-footer">
        <small>Coded by Nicole Gainska</small></footer>
      </div>
    </div>
  );
}
