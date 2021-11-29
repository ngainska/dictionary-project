import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
let [keyword, setKeyword] = useState("");
let [results, setResults]= useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

//documentation https://dictionaryapi.dev/

function search(event){
    event.preventDefault();

let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);


}
function handleKeywordChange(event){
setKeyword(event.target.value)
}


    return(

        <div className="Dictionary">
            <section>
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
        <div className="hint">
            What would you like to search for?
        </div>
        </section>
        <Results results={results}/>
        </div>)
}