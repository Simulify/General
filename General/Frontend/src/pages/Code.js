import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { Compile, Decoup } from '../Logic/Logic/src/functions.js';
import "./Code.css"; // import the external CSS file
import Navbar from '../components/Navbar';
import Button from '../components/Buttonn'
import Side from '../components/side'
import next from '../Images/next.svg'
import { Link } from 'react-router-dom';
import Title from '../components/Title2.js' ;

const ButoStyle={
  background: '#00A6FB',
position:'absolute',
width:'148px',
gridArea:'sauv'
}

function Code(props) {
  const [base,setBase]=useState("")
  const handleClick1= (event)=>{
    if (event.target.textContent=="HEX") {
      event.target.textContent="BIN"
    }
    else{event.target.textContent="HEX"}
  }
    const [textareaValue, setTextareaValue] = useState("");
    const [textareaValue1, setTextareaValue1] = useState("");
    const [textAreaTitle, setTextAreaTitle] = useState("");
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
    const handleTextareaChange1 = (event) => {
      setTextareaValue1(event.target.value);
    };
    const handleTextareaChangeTitle = (event) => {
      setTextAreaTitle(event.target.value);
    };
   
  useEffect(() => {
  
       //------------------------------------------------------------------
   //we load the stored data is the button of the file has been clicked
   const storedTextareaValue = localStorage.getItem("filecodeHexa");// load the data in hexa
   const storedTitle = localStorage.getItem("title"); // load the title of the file
   const storedTextareaValue1 = localStorage.getItem("filecodeMemo"); // load the data with mémonique
   const buttonClicked = localStorage.getItem("buttonClicked");
   if (buttonClicked === null) {
     localStorage.setItem("buttonClicked", "false"); // if the button is not click we put it at false
   }
   if (buttonClicked === "true") { //if button clicked we set the values of the fields with stored data
     setTextareaValue(storedTextareaValue || "");
     setTextareaValue1(storedTextareaValue1 || "");
     setTextAreaTitle(storedTitle || "");
   }
   localStorage.setItem("buttonClicked", "false"); // we reput it at false until the next click
   
       //----------------------------------
    var form=document.querySelector('textarea');
    var simuler=document.getElementById('btn2');
    var compile=document.getElementById('btn1')
    let nb = 1;
    let txt=document.createTextNode('compilé ');
    
    form.addEventListener('keydown', ()=>
    {
        let nb_lignes=document.createElement('div');
        nb++;

    })
   

    // simuler.addEventListener('click',()=>
    // {
    //     console.log(form.value);
    //     form.value='';
    //     // location.reload();
    //         checkorder();
    // })
    // compile.addEventListener('click',()=>
    // {
    //    time_compile=Date.now();
    //    checkorder();
    // })
    // function checkorder()
    // {
    //     if(time_compile>time_simule)
    //     {
    //        var compiled=document.querySelector('.compiled');
    //        compiled.textContent='compiled';
    //         console.log('le code a été bien compilé');  

    //     }
    //     else
    //     {
    //    throw new Error('Veuillez compiler le code avant la simulation')   
    //     }
    // } 
    let time_compile=0;
    let time_simule=0;
  var codes=document.getElementsByTagName('textarea');
let clicked=false;
codes[0].readonly=false;
codes[1].readonly=false;

  // codes[0].addEventListener('click',()=>
  // {
  //   if(!clicked)
  //   {
  //     codes[0].readonly=false; 
  //     codes[1].readonly=true;
  //     clicked=true;
  //     console.log(codes[0].readonly);
  //   }
   
  // })


  codes[0].addEventListener('click',()=>{
  codes[0].select();
  console.log(codes[0].readonly);
  if(clicked===false && codes[0].value!=='')
    {

       codes[0].readonly=false;
       codes[1].readonly=true;
       clicked=true;
    }
  })


  codes[0].addEventListener('input', () => {
    if(codes[0].readonly===true && codes[1].value!=='') {
      codes[0].value='';
    }  
    })
  codes[1].addEventListener('input', () => {
  if(codes[1].readonly===true && codes[0].value!=='' ) {
    codes[1].value='';
  }
  })
  codes[1].addEventListener('click',()=>{
  console.log(codes[1].readonly);
  if(clicked===false && codes[1].value!=='')
  {
     codes[1].readonly=false;
     codes[0].readonly=true;
     clicked=true; 
  }
}
  

)
  }, []); // This empty array as a second argument ensures that the effect is only run once when the component mounts
  


  const saveFile = (textareaValue, textareaValue1,textAreaTitle) => { 
    console.log(textareaValue);
    console.log(textareaValue1);
    localStorage.setItem('textareaValue', textareaValue); // save data with mémonique
    localStorage.setItem('textareaValue1', textareaValue1); // save data in Hexa
    localStorage.setItem('textAreaTitle', textAreaTitle); // save title of the file
    const storedTitle = localStorage.getItem("textAreaTitle"); // we put in stored title the stored data title
    
    // check if the storedTitle is an exemple => not allow saving
    if (storedTitle === "ET" || storedTitle === "OU" || storedTitle === "NON" || storedTitle === "ADD" || storedTitle === "SUB"|| storedTitle === "DIV"|| storedTitle === "BCV" || storedTitle === "LOOP" || storedTitle === "PERMUT" || storedTitle === "SHIFT LEFT"|| storedTitle === "SHIFT RIGHT") {
      return;
    }
  
    const file = { // we init the fields of the object code 
      "title": storedTitle,  
      "codeHexa": textareaValue,
      "codeMemo": textareaValue1,
      
    };
    const storedUser = JSON.parse(localStorage.getItem("currentUser")); // we get the current user & his _id
    console.log('currentUser:', storedUser);
    console.log('currentUser_id:', storedUser._id);
    const storedCodeId = localStorage.getItem("storedCode.id");
    console.log("storedCode.id:",storedCodeId);
  
    // Check if there is already a code with the same title for the current user
    axios
      .get(`https://simulify.onrender.com/users/${storedUser._id}/codes/${storedCodeId}`) //access the code itself
      .then((response) => {
        const existingCode = response.data.title === file.title ? response.data : undefined;
        let exist = false;
        if (existingCode !== undefined) { //if existing title we update else we create a new one 
          exist = true;
        }
        console.log ("existingCode:", existingCode);
  
        if (exist === true) {
          axios
            .put(`https://simulify.onrender.com/users/${storedUser._id}/codes/${storedCodeId}`, file) //updating the file
            .then((response) => {
              console.log("API call successful:", response); 
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          axios
            .post(`https://simulify.onrender.com/users/${storedUser._id}/codes`, file) //creating new code
            .then((response) => {
              console.log("API call successful:", response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        axios
          .post(`https://simulify.onrender.com/users/${storedUser._id}/codes`, file)
          .then((response) => {
            console.log("API call successful:", response);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  };
  
    return(
      <div>
          <Navbar label="Simulation" />
        <br></br>         <br></br>
        <br></br>
        <div className='hugecontainer'>
       <div className='Bigcontainer'>
       <Title textareaValue={textAreaTitle} handleTextareaChange={handleTextareaChangeTitle}></Title>
       {/* buttons in top *************** */}
        <div className="buttons">
        <Button text="Sauvegarder" style={ButoStyle} onClick={() => saveFile(textareaValue,textareaValue1,textAreaTitle)} ></Button>
        <Button link="/files" text="Fichiers" style={{background:'#F8F9FA',color:'#023047',position:'absolute',width:'148px',gridArea:'exem'}}></Button>
        </div>
        {/**************************/}
       
        <div className="container">
         <Side textareaValue={textareaValue} handleTextareaChange={handleTextareaChange}></Side>
         <div className="base" onClick={handleClick1}>BIN</div>
         <Side textareaValue={textareaValue1} handleTextareaChange={handleTextareaChange1}></Side>
           </div>             
             </div>      
        <script src="myscripts.js"></script>      
      </div>
      
      <div className="container2">    
      <Button onClick={props.handleClick} id="btn1" text="Compiler" style={{ fontSize: '16px', background: '#F8F9FA', color: '#023047',border:'1px solid #00A6FB',padding: '12px 24px'}}></Button>
      <Link to="/code/Simulation">
        
      <div id="btn2" onClick={props.handleToggle} >
        
        Simuler
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 1.2045C0.893845 0.765165 1.60616 0.765165 2.0455 1.2045L8.0455 7.2045C8.48483 7.64384 8.48483 8.35616 8.0455 8.7955L2.0455 14.7955C1.60616 15.2348 0.893845 15.2348 0.454505 14.7955C0.015165 14.3562 0.015165 13.6438 0.454505 13.2045L5.65901 8L0.454505 2.7955C0.015165 2.35616 0.015165 1.64384 0.454505 1.2045Z" fill="#F8F9FA"/>
</svg>

      </div></Link>
      </div>
          <div className='compiled' >
          </div>
          <br></br>
   <Title></Title>
          <hr>
          </hr> </div>
    );
}
export default Code;