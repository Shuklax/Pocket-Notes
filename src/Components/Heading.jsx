import React from "react";
import "./css/Heading.scss";
function Heading({name, color, initials, onSelect }) {
  return (
    <>
      <li onClick={onSelect} >
        <div className="Individual-heading" >
          <p id="Initials" style={{backgroundColor: color}}>{initials}</p>
          <span id="HeadingText">{name}</span>
        </div>
      </li>
    </>
  );
}

export default Heading;
