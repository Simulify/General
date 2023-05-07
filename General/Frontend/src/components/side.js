// Side component
import React, { useState } from "react";
import "./side.css";
import "../pages/Code.css"

function Side(props) {
  const [numLines, setNumLines] = useState(1);
  const [elements, setElements] = useState([1]);
  const[color, setColor]=useState("")
  let array
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      const numLines = value.split("").filter((char) => char === "\n").length+1;
      setNumLines(numLines);
      array=[...elements,numLines]
      console.log(array)
      if((array.length!= new Set(array).size) && array.length!=1){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            console.log("hello")
            if (element==array[array.length-1]) {
                array=array.slice(0,index+1)
            }
        }}
      setElements(array);
      props.handleTextareaChange(event);
    }

  };
  const handleFocus=()=>{
    setColor("#05FF00")
  }
  const handleBlur=()=>{
    setColor("#FF0000")
  }
  return (
    <>
      <div className="side">
        {elements.map((element) => (
          <div className="number" key={element}>
            {element}
          </div>
        ))}
      </div>
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={props.handleTextareaChange}
        onKeyUp={handleKeyUp}
        value={props.textareaValue}
        style={{
          resize: "none",
          border: "1px solid #00A6FB",
          position: "relative",
          left: "-4%",
          fontSize: "16px",
        }}
        className="box"
        placeholder="Veuillez saisir votre code en Hexadécimale"
      ></textarea>
      <div className="dot" style={{background:`${color}`}}></div>
    </>
  );
}

export default Side;
