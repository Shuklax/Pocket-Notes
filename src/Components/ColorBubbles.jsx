import React from "react";
import "./css/ColorBubbles.scss";
function ColorBubbles({ colors, selectedColor, onColorSelect }) {
  return (
    <div className="ColorBubbles">
      {colors.map((color) => (
        <button id="button"
          key={color}
          onClick={() => onColorSelect(color)}
          style={{
            backgroundColor: color,
            border: selectedColor === color ? "1px solid black" : "none", 
            opacity: selectedColor === color ? 1 : 0.8, //Dim unselected colors
          }}
        ></button>
      ))}
    </div>
  );
}

export default ColorBubbles;
