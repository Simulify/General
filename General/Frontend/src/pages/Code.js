import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import "./Code.css"; // import the external CSS file
// import img1 from './Ellipse 515.png';
// import img2 from './Icon.png';
import Navbar from '../components/Navbar';
import Button from '../components/Buttonn'
import Side from '../components/side'
import next from '../Images/next.svg'
const ButoStyle={
  background: '#00A6FB',
position:'absolute',
width:'184px',
'grid-area':'sauv'
}
function Code() {
    const [numLines, setNumLines] = useState(1);
    
    const HandleChange=(event)=> {
      const value = event.target.value;
      console.log(value)
      const newLines = (value.match(/\n/g) || []).length + 1;
      setNumLines(newLines);
      const childElement = document.createElement('div');
      childElement.innerHTML =`${newLines}`
      childElement.className="number"
      Side.appendChild(childElement)
    }
      
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
    return(
      <div>
          <Navbar label="Simulation" />
        <br></br>         <br></br>
        <br></br>
        <div className='hugecontainer'>
       <div className='Bigcontainer'>
       {/* buttons in top *************** */}
        <div className="buttons">
        <Button text="Sauvegarder" style={ButoStyle}></Button>
        <Button text="Exemples" style={{background:'#F8F9FA',color:'#023047',position:'absolute',width:'184px','grid-area':'exem'}}></Button>
        <Button text="Mes programmes" style={{background:'#F8F9FA',color:'#023047',position:'absolute',width:'184px','grid-area':'prgrm'}}></Button>
        </div>
        {/************************* */}
       
        <div className="container">
         <Side></Side>
          <textarea onChange={HandleChange}
            style={{ resize: "none", border: "1px solid #00A6FB" , position:'relative',left:'-4%',fontSize: '16px'}}
            className="box"
            placeholder="Veuillez saisir votre code en mnémonique"
          ></textarea> 
          <p>Number of lines: {numLines}</p>
          {/* <h4 style={{color:"#023047",position:'relative',right:'14px'}}>
            Ou bien
            </h4> */}
          <div className='side' style={{marginRight:'-8px'}}></div>
           <textarea
            style={{ resize: "none", border: "1px solid #00A6FB",fontSize: '16px' }}
            className="box"
            placeholder="Veuillez saisir votre code en hexa"
          ></textarea>
           </div>             
             </div>      
        <script src="myscripts.js"></script>      
      </div>
      
      <div className="container2">    
      <Button id="btn1" text="Compiler" style={{ fontSize: '16px', background: '#F8F9FA', color: '#023047',border:'1px solid #00A6FB',padding: '12px 24px'}}></Button>
      <div id="btn2" >
        Simuler
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 1.2045C0.893845 0.765165 1.60616 0.765165 2.0455 1.2045L8.0455 7.2045C8.48483 7.64384 8.48483 8.35616 8.0455 8.7955L2.0455 14.7955C1.60616 15.2348 0.893845 15.2348 0.454505 14.7955C0.015165 14.3562 0.015165 13.6438 0.454505 13.2045L5.65901 8L0.454505 2.7955C0.015165 2.35616 0.015165 1.64384 0.454505 1.2045Z" fill="#F8F9FA"/>
</svg>
      </div>
      </div>
          <div className='compiled'>
          </div>
          <hr>
          </hr> </div>
    );
}
export default Code;