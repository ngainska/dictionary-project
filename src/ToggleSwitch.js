
import React from "react";
import "./ToggleSwitch.css";

function changeSnow(){
    alert("Oh dear, it's still snowing...")
}
const ToggleSwitch = ({ label }) => {
  return (

    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} onChange={changeSnow}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;