import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


import { useRef } from 'react';
import { Compile, Decoup } from '../Logic/Logic/src/functions.js';
import "./Code.css"; // import the external CSS file
// import img1 from './Ellipse 515.png';
// import img2 from './Icon.png';
import Navbar from '../components/Navbar';
import Button from '../components/Buttonn'
import Side from '../components/side'
import next from '../Images/next.svg'
import { Link } from 'react-router-dom';
const ButoStyle={
  background: '#00A6FB',
position:'absolute',
width:'148px',
gridArea:'sauv'
}

function Code() {
  const [base,setBase]=useState("")
  const handleClick1= (event)=>{
    if (event.target.textContent=="HEX") {
      event.target.textContent="BIN"
    }
    else{event.target.textContent="HEX"}
  }
    const handleClick=(event)=> {
     
      console.log( Compile(Decoup(textareaValue)))
    }
    const [textareaValue, setTextareaValue] = useState("");
    const [textareaValue1, setTextareaValue1] = useState("");
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
    const handleTextareaChange1 = (event) => {
      setTextareaValue1(event.target.value);
    };
   
  useEffect(() => {
    var form=document.querySelector('textarea');
    var simuler=document.getElementById('btn2');
    var compile=document.getElementById('btn1')
    let time_compile=0;
    let nb = 1;
    let time_simule=0;
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
    function checkorder()
    {
        if(time_compile>time_simule)
        {
           var compiled=document.querySelector('.compiled');
           compiled.textContent='compiled';
            console.log('le code a été bien compilé');  

        }
        else
        {
       throw new Error('Veuillez compiler le code avant la simulation')   
        }
    } 
  var codes=document.getElementsByTagName('textarea');
  codes[0].addEventListener('click',()=>
  {
    console.log(codes[0].disabled);

    codes[0].readonly=false; 
    codes[1].readonly=true;
    codes[1].value='';
  })
  codes[1].addEventListener('click',()=>
  {
    codes[1].readonly=false;
    codes[0].readonly=true;
    codes[0].value='';
    console.log(codes[1].disabled);

  })

  }, []); // This empty array as a second argument ensures that the effect is only run once when the component mounts
  

  
  const saveFile = (textareaValue,textareaValue1) => { // this function saves the file to the database 
    console.log(textareaValue);
    console.log(textareaValue1);
    const file = {
      
      "title": "test save",
      "codeHexa": textareaValue,
      "codeMemo": textareaValue1,
      "compiled": "true",
    };
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log('currentUser:', storedUser);
    console.log('currentUser_id:', storedUser._id);
    axios
      .post(`/users/${storedUser._id}/codes`, file)
      .then((response) => {
       
        console.log("API call successful:", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
    return(
      <div>
          <Navbar label="Simulation" />
        <br></br>         <br></br>
        <br></br>
        <div className='hugecontainer'>
       <div className='Bigcontainer'>
       {/* buttons in top *************** */}
        <div className="buttons">

        <Button text="Sauvegarder" style={ButoStyle} onClick={() => saveFile(textareaValue,textareaValue1)} ></Button>
        <Button link="/files" text="Fichiers" style={{background:'#F8F9FA',color:'#023047',position:'absolute',width:'148px',gridArea:'exem'}}></Button>

        </div>
        {/************************* */}
       
        <div className="container">
         <Side textareaValue={textareaValue} handleTextareaChange={handleTextareaChange}></Side>
         <div className="base" onClick={handleClick1}>BIN</div>
         <Side textareaValue={textareaValue1} handleTextareaChange={handleTextareaChange1}></Side>
           </div>             
             </div>      
        <script src="myscripts.js"></script>      
      </div>
      
      <div className="container2">    
      <Button onClick={handleClick} id="btn1" text="Compiler" style={{ fontSize: '16px', background: '#F8F9FA', color: '#023047',border:'1px solid #00A6FB',padding: '12px 24px'}}></Button>
      <Link to="/code/Simulation">
      <div id="btn2" >
        
        Simuler
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 1.2045C0.893845 0.765165 1.60616 0.765165 2.0455 1.2045L8.0455 7.2045C8.48483 7.64384 8.48483 8.35616 8.0455 8.7955L2.0455 14.7955C1.60616 15.2348 0.893845 15.2348 0.454505 14.7955C0.015165 14.3562 0.015165 13.6438 0.454505 13.2045L5.65901 8L0.454505 2.7955C0.015165 2.35616 0.015165 1.64384 0.454505 1.2045Z" fill="#F8F9FA"/>
</svg>
      </div></Link>
      </div>
          <div className='compiled' >
          </div>
          <hr>
          </hr> </div>
    );
}
export default Code;