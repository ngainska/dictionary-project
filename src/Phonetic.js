import React from "react"

export default function Phonetic(props){

    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">🔊</a>
            <br/>
            {props.phonetic.text}
        </div>

    )
}

//try html5 audio api with font awesome button