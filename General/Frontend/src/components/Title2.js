import "../pages/Code";

function Title(props) {
   
 
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      props.handleTextareaChange(event);
    }

  };
    
     
    return (
        <textarea  value={props.textareaValue} 
        onKeyUp={handleKeyUp}
        onChange={props.handleTextareaChange}
        className='Title' placeholder='Veuillez saisir le titre du programme'>

        </textarea>
    );
}

export default Title;