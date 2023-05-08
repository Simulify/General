import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { Compile, Decoup,BinToMnem } from '../Logic/Logic/src/functions.js';
import "./Code.css"; // import the external CSS file
import Navbar from '../components/Navbar';
import Button from '../components/Buttonn'
import Side from '../components/side'
import next from '../Images/next.svg'
import { Link } from 'react-router-dom';
import Title from '../components/Title2.js';
const ButoStyle = {
  background: '#00A6FB',
  position:'relative',
  color: '#00A6FB',
  border: 'none',
  borderRadius: '4px',
  padding: '1vw 2vw',
  fontSize: '2vw',
  fontWeight: 'bold',
  cursor: 'pointer',
  gridArea: 'sauv'
};



function Code(props) {
  const isAuthenticated= props.isAuthenticated;

  const [base,setBase]=useState("")
  // const handleClick1= (event)=>{
  //   if (event.target.textContent=="HEX") 
  //   {
  //     event.target.textContent="BIN"
  //   }
  //   else{event.target.textContent="HEX"}
  // }
 
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
  //we load the stored data is the button of the file has been clicked
  
  const storedTextareaValue = localStorage.getItem("filecodeHexa");// load the data in hexa
  const storedTitle = localStorage.getItem("title"); // load the title of the file
  const storedTextareaValue1 = localStorage.getItem("filecodeMemo"); // load the data with mémonique
  console.log("in cide",storedTextareaValue1);
  const buttonClicked = localStorage.getItem("buttonClicked");
  if (buttonClicked === null) {
    localStorage.setItem("buttonClicked", "false"); // if the button is not click we put it at false
  }
  if (buttonClicked === "true") 
  { //if button clicked we set the values of the fields with stored data
    
    setTextareaValue(storedTextareaValue || "");
    setTextareaValue1(storedTextareaValue1 || "");
    setTextAreaTitle(storedTitle || "");
    console.log('im getting in ');
    console.log("hyu 1111 avant le stockage du programme ",storedTextareaValue1);  
    document.getElementsByTagName('textarea')[0].readOnly=false;
    // console.log(document.getElementsByTagName('textarea')[0]);
    
    document.getElementsByTagName('textarea')[0].value=storedTextareaValue;
    document.getElementsByTagName('textarea')[0].value=storedTextareaValue1;
  console.log(document.getElementsByTagName('textarea')[0].value==="visible")  ;

  }
  localStorage.setItem("buttonClicked", "false"); // we reput it at false until the next click
  
      //----------------------------------

  
  //  var simuler=document.querySelector('#btn2');
  //  let compiled=false;
  //  simuler.addEventListener('click',()=>
  //  {
  //   if(compiled===false)
  //   {
  //     localStorage.setItem("compiled", "false");
  //     throw new Error ('compile first');
  //   }
  //   else
  //   {
  //     localStorage.setItem("compiled", "true")
  //   }
  //  })
  

   let binary='';
    var codes=document.getElementsByTagName('textarea');
    let compiler=document.querySelector('.container2 .button');

    /*************************************    CONERSION EN BINAIRE   ************************/
    /***************************************************************************************/
    let mnemonique='';
    compiler.addEventListener('click',()=>
    {
      if(codes[0].value!=='' || codes[1].value!=='')
      {
      document.querySelector('#btn2').style.visibility='visible';
      }
      console.log(codes[0].value);
    });
    compiler.addEventListener('click',()=>
    {
      if(codes[0].value==='' || codes[1].value!=='')
      {
      document.querySelector('#btn2').style.visibility='visible';
      }
      binary=codes[1].value.split('\n');
      if(codes[1].readOnly===false)
      {
        mnemonique = ''; // Reset the mnemonique variable
        for(let i=0;i<binary.length;i++)
        {
          binary[i]= parseInt(binary[i],16).toString(2);  
          if(binary[i].length<16)
          {
              binary[i]= binary[i].padStart(16,0);    
          }
        }
        for(let i=0;i<BinToMnem(binary).length;i++)
        {
          mnemonique+=BinToMnem(binary)[i] + '\n';
        }
        codes[0].value=mnemonique;
      }
    })
    
  

    
    /************************************************************************************************* */
/******************************************************** POP UP IN ****************************************************************** */

    document.querySelector('.buttons .button').addEventListener('click',()=>
    {
    document.querySelector('.body').classList.add('hide_bg');
    document.querySelector('#pop_up').style.visibility="visible";
    })
   document.querySelector('#submit').addEventListener('click',()=>
   {

    if (document.querySelector('.Title').value!=='')
    {
      document.querySelector('#pop_up').style.visibility="hidden";
      document.querySelector('.body').classList.remove('hide_bg');
     
    }
   }
   );
   document.querySelector('.Title').addEventListener('input', ()=>
   {
   
   })


 /************************************************************************************************* */
/**************************************************************************************************/


  codes[0].addEventListener('click', () => 
  {
    localStorage.setItem('textareaValue', codes[0].value);
   localStorage.setItem('textareaValue1', codes[1].value);

    if( codes[1].value!=='' ) 
    {
      // codes[0].readOnly = true;
      codes[1].readOnly = false;
      codes[0].readOnly = true;
    }

    else  
     {
      codes[0].readOnly = false;
      codes[1].readOnly = true;
    }

  })
  codes[1].addEventListener('click', () => 
  {
  if(codes[0].value!=='' ) 
  {
    codes[1].readOnly=true;
    codes[0].readOnly = false;
  }
  else
  {
    codes[1].readOnly = false;
    codes[0].readOnly = true;    
  }
  }) 
  
 
   

  
  }, []); // This empty array as a second argument ensures that the effect is only run once when the component mounts
  

  useEffect(() => 
  {
    // Assign textareaValue to codes[0].value
    const codes = document.getElementsByTagName('textarea');
    codes[0].readOnly=false;
    console.log('a linterieur de save'+ codes[0].value);
    codes[0].value = codes[0].value;
    console.log("douka",codes[0].value);
  }, [textareaValue]);
  const saveFile = (textareaValue, textareaValue1,textAreaTitle) => { 
 

    console.log("before save textareaValue",textareaValue);
    console.log("before save textareaValue",textareaValue1);
    localStorage.setItem('textareaValue', document.getElementsByTagName('textarea')[0].value); // save data with mémonique
    localStorage.setItem('textareaValue1', document.getElementsByTagName('textarea')[1].value);

    console.log('the value FROM LOCAL STORAGE'+ localStorage.getItem('textareaValue'));
    console.log('the value LOCAL STORAGE'+ localStorage.getItem('textareaValue1'));

    localStorage.setItem('textAreaTitle', textAreaTitle); // save title of the file
    const storedTitle = localStorage.getItem("textAreaTitle"); // we put in stored title the stored data title
    
    // check if the storedTitle is an exemple => not allow saving
    if (storedTitle === "ET" || storedTitle === "OU" || storedTitle === "NON" || storedTitle === "ADD" || storedTitle === "SUB"|| storedTitle === "DIV"|| storedTitle === "BCV" || storedTitle === "LOOP" || storedTitle === "PERMUT" || storedTitle === "SHIFT LEFT"|| storedTitle === "SHIFT RIGHT") {
      return;
    }
  
    const file = { // we init the fields of the object code 
      "title": storedTitle,  
      "codeHexa": localStorage.getItem('textareaValue1'),
      "codeMemo": localStorage.getItem('textareaValue'),
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
      <div >
        <div className='body'>
          <Navbar label="Simulation"  isAuthenticated={props.isAuthenticated}/>
        <br></br>         <br></br>
        <br></br>
        <div className='hugecontainer'>
       <div className='Bigcontainer'>
       {/* buttons in top *************** */}
      
       <div className="buttons" style={{ display: isAuthenticated ? 'block' : 'none' }}>
  <Button
  className='sauvegarder1'
  text="Sauvegarder"
  style={{
    background: '#00A6FB',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    padding: '8px',
    margin: '0 auto',
    cursor: 'pointer',
    fontSize: '18px',
    letterSpacing: '1.7px',
    fontWeight: 'bold',
  }}
></Button>


          <Button link="/files" text="Fichiers" style={{ background: '#F8F9FA', color: '#023047', position: 'absolute', width: '148px', gridArea: 'exem' }}></Button>
        </div>
       
       
     
      

        {/**************************/} 
   <div className="container">
         {/* <Side className="textarea" textareaValue={textareaValue} handleTextareaChange={handleTextareaChange}></Side> */}
      <div>
      <div className='blue_box' id='blue_box_1'> </div>
           <textarea className="textarea" placeholder='Veuillez saisir le code en mnémonique'  handleTextareaChange={handleTextareaChange1} ></textarea>
         </div>
      <div>
         <div className='blue_box'  id='blue_box_2'>
      <div className='hex'>Hex</div>          </div>  <textarea className="textarea" placeholder='Veuillez saisir le code en Hexa' handleTextareaChange={handleTextareaChange} ></textarea>
         </div>         {/* <div className="base" >HEX</div> */}
         {/* <Side className="textarea" textareaValue={textareaValue1} handleTextareaChange={handleTextareaChange1}></Side> */}
        
           </div>             
             </div>      
        <script src="myscripts.js"></script>      
      </div>
    
      <div className="container2">    
      <Button onClick={props.handleClick} id="btn1" text="Compiler" style={{ fontSize: '16px', background: '#F8F9FA', color: '#023047',border:'1px solid #00A6FB',padding: '12px 24px'}}></Button>
      <Link to="/code/Simulation">
        <div id="btn2" onClick={props.handleToggle}>
          Simuler
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 1.2045C0.893845 0.765165 1.60616 0.765165 2.0455 1.2045L8.0455 7.2045C8.48483 7.64384 8.48483 8.35616 8.0455 8.7955L2.0455 14.7955C1.60616 15.2348 0.893845 15.2348 0.454505 14.7955C0.015165 14.3562 0.015165 13.6438 0.454505 13.2045L5.65901 8L0.454505 2.7955C0.015165 2.35616 0.015165 1.64384 0.454505 1.2045Z" fill="#F8F9FA"/>
  </svg>
  
        </div></Link>

      </div>
          <div className='compiled' >
          </div>
          <br></br>
          <hr>
          </hr>
       
          </div>
          <div id='pop_up'>
          {/* <textarea className='Title' placeholder='Veuillez entrez le titre du programme' >
           </textarea> */}
            <Title textareaValue={textAreaTitle} handleTextareaChange={handleTextareaChangeTitle}></Title>
           <br></br>
           <button id='submit'  onClick={() => saveFile(localStorage.getItem('textareaValue'),localStorage.getItem('textareaValue1'),textAreaTitle)}  > 
               Soumettre
           </button>
          </div>
           </div>
    );
}
export default Code;