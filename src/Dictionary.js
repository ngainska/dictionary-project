import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Snowfall from "react-snowfall"

export default function Dictionary(props){
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults]= useState(null);
let [loaded,setLoaded]=useState(false);
let [photos, setPhotos]= useState(null)


function handleDResponse(response){
    setResults(response.data[0]);
}

function handlePexResponse(response){
    setPhotos(response.data.photos)
}

//documentation https://dictionaryapi.dev/

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleDResponse);

let pexelsApiKey="563492ad6f9170000100000110d1ded328f2415a92262e13c689a4d5";
let pexelsUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

let headers = { Authorization: `Bearer ${pexelsApiKey}`}

axios.get(pexelsUrl, {headers: headers}).then(handlePexResponse);



}

function handleSubmit(event){
    event.preventDefault();
search();
}

function handleKeywordChange(event){
setKeyword(event.target.value)
}

function load(){
setLoaded(true);
search();
}
const [snow, setSnow] = useState(false);

const toggleSnow = () => {
  setSnow(!snow);
};

if (loaded){

return(

        <div className="Dictionary">
            <section>
                <div className="row">
                    <div className="col-9">
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/> 
        </form> </div>
                            <div className="col-1">
 <button onClick={toggleSnow} title="let it snow" className="snowButton">❄</button>
    {snow && <Snowfall style={{ height: 1500}} snowflakeCount={400}/>}
    </div>
    </div>
        <div className="hint">
            What would you like to search for?
        </div>
        </section>
        <Results results={results}/>
        <Photos photos={photos} keyword={keyword}/>
        </div>)

} else {
    load();
    return "loading";
}

    
}