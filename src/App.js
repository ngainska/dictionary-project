import bit3 from './bit3.png';
import './App.css';
import Dictionary from './Dictionary';
import Snowfall from "react-snowfall"
import ToggleSwitch from './ToggleSwitch';

export default function App() {
  //const [snow, setSnow] = useState(true);
  return (
    <div><Snowfall style={{ height: 1500}} snowflakeCount={300}/>
    <ToggleSwitch label="snow" snowflakeCount={300} />
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

