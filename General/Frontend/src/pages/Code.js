/* eslint-disable react/jsx-pascal-case */
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
import Btn_simule from '../components/Btn_simuler2.js';
import Title from '../components/Title2.js';
function Code(props) {
  
  const [base,setBase]=useState("") 
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
   
  useEffect(() => 
  {
  // we load the stored data is the button of the file has been clicked

  const storedTextareaValue = localStorage.getItem("filecodeHexa");// load the data in hexa
  const storedTitle = localStorage.getItem("title"); // load the title of the file
  const storedTextareaValue1 = localStorage.getItem("filecodeMemo"); // load the data with mémonique
  const buttonClicked = localStorage.getItem("buttonClicked");
  if (buttonClicked === null) 
  {
    localStorage.setItem("buttonClicked", "false"); // if the button is not click we put it at false
  }
  if (buttonClicked === "true") 
  {
    // if button clicked we set the values of the fields with stored data
    setTextareaValue(storedTextareaValue || "");
    setTextareaValue1(storedTextareaValue1 || "");
    setTextAreaTitle(storedTitle || "");
    document.getElementsByTagName('textarea')[0].readOnly=false;    
    document.getElementsByTagName('textarea')[1].value=storedTextareaValue;
    document.getElementsByTagName('textarea')[0].value=storedTextareaValue1;
  }
  localStorage.setItem("buttonClicked", "false"); // we reput it at false until the next click

       //-----------------------------------------------------------------------------------------------//
              //--------------------------------------------------------------------------------\\
       //-----------------------------------------------------------------------------------------------//
    /***************************************************************************************/
 

    let binary='';
    var codes=document.getElementsByTagName('textarea');
    let compiler=document.querySelector('.container2 .button');

      /****************************************    CONERSION DE L'HEXA VERS MNEMONIQUE      ***********************************/
      /****************************************   RENDRE LE MNEMONIQUE DANS CODES [0]    **************************************************/
    let mnemonique='';
   
    compiler.onclick = e=>
    {
      console.log('la valeur du' +codes[0].value);
      setTimeout(()=>
      {
     let erreur=document.querySelector('.erreur')
     console.log(' erreur'+ erreur.innerHTML);
     if(erreur.innerHTML==='')
     {
      document.querySelector('#btn2').style.visibility='visible';
      const  hr=document.querySelector('hr');
      hr.style.borderColor='#00ff00';     
       document.querySelector('.compiled').innerHTML="Compilé avec succès ✔";
       compiler.disabled=true;
       compiler.ariaDisabled=true;
       console.log(compiler.disabled);
     }
     else 
     {
    const  hr=document.querySelector('hr');
    hr.style.borderColor="red";
     }
      },500)
      if((codes[0].value==='' && codes[1].value!=='' ))
      {
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
        console.log(binary);
        for(let i=0;i<BinToMnem(binary).length;i++)
        {
          if(i!==BinToMnem(binary).length-1)
          {
             mnemonique+=BinToMnem(binary)[i] + '\n';
          }
          else
          {
            mnemonique+=BinToMnem(binary)[i] ;
          }
        }
       codes[0].readOnly=false;
       let numLines=mnemonique.split('\n').length;
       codes[0].value=mnemonique;
       const blueBox = document.querySelector('#blue_box_1');
       blueBox.innerHTML = ""
       for(let i=1; i<=numLines;i++)
       {
         let div=document.createElement('div');
      
         if(i===1)
         {
          div.style.marginTop='30px';
         }
         div.textContent=i;
         blueBox.appendChild(div);
         console.log(numlines2);
       } 
}
}
 /**************************************    DU MNEMONIQUE VERS L'HEXA DECIMALE    ********************************************************** */     
  else if ((codes[0].value!=='' && codes[1].value==="") || (codes[0].value!=='' && codes[1].value!=="" && codes[1].value!=='' && document.querySelector('.erreur').innerHTML!==''))
{
    let parties = Compile(Decoup(codes[0].value));
    console.log('resultat de parties'+ parties) ; 
    let hexa='';
    console.log(hexa);
    console.log(typeof(hexa)==='string');
    let arr=parties.toString().split(',');
    console.log(arr); 
    for(let i=0;i<arr.length;i++)
    {
     arr[i]=parseInt(arr[i],2).toString(16);
     if(i!==arr.length-1)
     {
      hexa=hexa+arr[i].padStart(4,0)+'\n';
     }
     else
     {
      hexa=hexa+arr[i].padStart(4,0);
     }
    }
    console.log('lhexa est'+ hexa);
    const numlines2 = hexa.split('\n').length;
    codes[1].value=hexa;
    const blueBox = document.querySelector('#blue_box_2');
    blueBox.innerHTML='';
  blueBox.innerHTML = "<div class='hex'>Hex</div>"
 for(let i=1; i<=numlines2;i++)
 {
   let div=document.createElement('div');  
   div.textContent=i;
   blueBox.appendChild(div);
   console.log(numlines2);
 } 
 }
}
/*************************************** FIN CONVERSION DU MNEMONIQUE VERS L'HEXA ******************************************************************* */
           /************************************************************************************************* */
 /*************************************** LIMITER LE NOMBRE DE CARACTERES DANS LE TITRE  ****************************************** */

 

 document.querySelector('.Title').addEventListener('input', (e)=>
{
const max=50;
if(e.target.value.length>max)
 {
  e.target.value=e.target.value.slice(0,max);
 }
})

/**************************************************** COMPTER LE NOMBRE DE LIGNES *************************************************************/
 let numlines2;
 let numlines1;
codes[1].oninput=e=>
{
 numlines2 = codes[1].value.split('\n').length +1;
 console.log(numlines1);
 const blueBox = document.querySelector('#blue_box_2');
 blueBox.innerHTML = "<div class='hex'>Hex</div>"
 for(let i=1; i<numlines2;i++)
 {
   let div=document.createElement('div');

  
   div.textContent=i;
   blueBox.appendChild(div);
} 
}
codes[0].oninput=e=>
{
 numlines1 = codes[0].value.split('\n').length +1;
 console.log(numlines1);
 const blueBox = document.querySelector('#blue_box_1');
 blueBox.innerHTML = ""
 for(let i=1; i<numlines1;i++)
 {
   let div=document.createElement('div');

   if(i===1)
   {
    div.style.marginTop='30px';
   }
   div.textContent=i;
   blueBox.appendChild(div);
 } 
}

 
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

 /************************************************************************************************* */
/**************************************************************************************************/
if( codes[1].readOnly === false && codes[0].readOnly === true) 
{
  codes[1].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)'
  codes[0].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
}
else if( codes[0].readOnly === false && codes[1].readOnly === true)
{
  codes[0].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)'
  codes[1].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
}
else 
{  codes[1].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
codes[0].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
}

  codes[0].addEventListener('click', () => 
  {
    if(codes[0].value!=='' && codes[1].value!=='' && document.querySelector('.erreur').innerHTML !=='')
    {
      setTimeout(() => {
        if(codes[0].value!=='' && codes[1].value!=='' ) 
    {
    codes[0].readOnly =false;
    codes[1].readOnly =true;
    } 
    }, 500);
    }
    else 
    {
      if( codes[1].value!=='' ) 
      {
        // codes[0].readOnly = true;
        codes[1].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)'
        codes[0].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
        codes[1].readOnly = false;     
         codes[0].readOnly = true;
      }
  
      else   if(codes[1].value==='')
       {
        codes[0].readOnly = false;
        codes[0].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)' 
        codes[1].readOnly = true;
        codes[1].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
      }
    }

  })
  codes[1].addEventListener('click', () => 
  {
    if(codes[0].value!=='' && codes[1].value!=='' && document.querySelector('.erreur').innerHTML !=='')
    {
      setTimeout(() => {
        if(codes[0].value!=='' && codes[1].value!==''  ) 
    {
    codes[0].readOnly =false;
    codes[1].readOnly =false;
    } 
      }, 500);
    }
  else 
  {
    if(codes[0].value!=='' ) 
    {
      
    codes[0].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)'
    codes[1].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
      codes[1].readOnly=true;
      codes[0].readOnly = false;
    }
    else if(codes[0].value==='')
    {
      codes[1].readOnly = false;
      codes[0].readOnly = true;    
      codes[1].style.backgroundImage='radial-gradient(circle at 95% 3%, #00ff00 0%, #00ff00 6px, transparent 5px, transparent 100%)'
      codes[0].style.backgroundImage= 'radial-gradient(circle at 95% 3%, #ff0000 0%,#ff0000 6px, transparent 5px, transparent 100%)';
    }
  }
  
 
  }) 
  
  }, []); // This empty array as a second argument ensures that the effect is only run once when the component mounts
  

  useEffect(() => 
  {
    const buttonClicked = localStorage.getItem("buttonClicked");
    if (buttonClicked === "true") 
    { //if button clicked we set the values of the fields with stored data
      const codes = document.getElementsByTagName('textarea');
      codes[0].readOnly=false;
      codes[0].value = codes[0].value;
    }
    localStorage.setItem("buttonClicked", "false"); // we reput it at false until the next click
    
  }, [textareaValue]);
  const saveFile = (textareaValue, textareaValue1,textAreaTitle) => { 
    localStorage.setItem('textareaValue', document.getElementsByTagName('textarea')[0].value); // save data with mémonique
    localStorage.setItem('textareaValue1', document.getElementsByTagName('textarea')[1].value);
    localStorage.setItem('textAreaTitle', textAreaTitle); // save title of the file
    const storedTitle = localStorage.getItem("textAreaTitle"); // we put in stored title the stored data title
    
    // check if the storedTitle is an exemple => not allow saving
    if (storedTitle === "Maximum de deux nombres" || storedTitle === "Somme des entiers de 1 à 10" || storedTitle === "Factorielle d'un nombre" || storedTitle === "XOR( OU exclusif ) avec la pile" || storedTitle === "Reste de division euclidienne"|| storedTitle === "Permutation du contenu de 2 mot mémoire"|| storedTitle === "Rotation et décalage") {
      return;
    }
  
    const file = { // we init the fields of the object code 
      "title": storedTitle,  
      "codeHexa": localStorage.getItem('textareaValue1'),
      "codeMemo": localStorage.getItem('textareaValue'),
    };
    const storedUser = JSON.parse(localStorage.getItem("currentUser")); // we get the current user & his _id
    const storedCodeId = localStorage.getItem("storedCode.id");  
    // Check if there is already a code with the same title for the current user
    axios
      .get(`https://simulify.onrender.com/users/${storedUser._id}/codes/${storedCodeId}`) //access the code itself
      .then((response) => {
        const existingCode = response.data.title === file.title ? response.data : undefined;
        let exist = false;
        if (existingCode !== undefined) { //if existing title we update else we create a new one 
          exist = true;
        }  
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
      <Button
link="/code/programmation-syntaxe"
text="syntaxe"
style={{
  background: '#00A6FB', color: '#F8F9FA', 
  cursor: 'pointer', position:'absolute', top:'14vh', right:'17vw'
}}
></Button>
        <Navbar label="Simulation" isAuthenticated={localStorage.getItem('isAuthenticated')} />
      <div className='hugecontainer'>
     <div className='Bigcontainer'>
     <div className="buttons" style={{ display: localStorage.getItem('isAuthenticated') ? 'flex' : 'none' }}>
     <Button
className='sauvegarder1'
text="Sauvegarder"
style={{
  background: '#00A6FB', color: '#F8F9FA', 
  cursor: 'pointer', position:'absolute', top:'14vh', left:'15vw'
}}
></Button>

        <Button link="/files" text="Fichiers" style={{ background: '#F8F9FA', color: '#023047', position: 'absolute', top:'14vh', left:'30vw', gridArea: 'exem' }}></Button>
      </div>
 <div className="container">
    <div>
    <div className='blue_box' id='blue_box_1'> 
<br></br>
<div>1</div>
</div>
         <textarea className="textarea" placeholder='Veuillez saisir le code en mnémonique'></textarea>
       </div>
    <div>
       <div className='blue_box'  id='blue_box_2'>
    <div className='hex' style={{color:"#023047"}}>Hex</div>     
    <div>1</div>     
    </div>  <textarea className="textarea" placeholder='Veuillez saisir le code en Hexa' style={{ padding:'3vh'}}></textarea>
       </div>         
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
        <br></br>
        <br></br>
        <div className='erreur'></div>
        </div>
        <div id='pop_up'>
          
         <Title textareaValue={textAreaTitle} handleTextareaChange={handleTextareaChangeTitle}></Title>
         <button id='submit'  onClick={() => saveFile(localStorage.getItem('textareaValue'),localStorage.getItem('textareaValue1'),textAreaTitle)}  > 
             Soumettre
         </button>
        </div>
         
        </div>
  );
}
export default Code;