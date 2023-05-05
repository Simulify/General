import React, { useEffect } from 'react';
import {useState} from 'react'
import { useRef } from 'react';
import './Light.css';


/*Cette fonction permet de changer les positions x et y d'un élément après un déplacement */

export function MyFun(time,x2,y2,x1,y1,setCoor) {
    setTimeout(() => {
        setCoor((prevCoor) => [x2 - x1, y2 - y1]);
      }, time);
  }

/**************************** Exlpication des fonctions utilisées ****************************/

/*Mouvement de l'ACC vers l'UAL*/
/*myRef.current.getBoundingClientRect().left : pour récupérer la position actuelle sur l'axe des abcisses
  myRef.current.getBoundingClientRect().top  : pour récupérer la position actuelle sur l'axe des ordonnées
  
  Pour récupérer les positions de destinataire : 
  let x2 = document.querySelector(destination).getBoundingClientRect().left;
  let y2 = document.querySelector('destination').getBoundingClientRect().top;

  Si l'élément a été déplacé de sa position initiale on lui applique un style : opacity : 60%

  useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
        }
      }, [coor]);


  Cette fontion permet de déplacer l'élément visuellement : 

  useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
*/

/*************************************************************************************************/
/*Déplacement de l'ACC vers l'UAL*/

export function ACCUal(time,myRef,setCoor,coor){
    useEffect(() => {
    
        const x1 = myRef.current.getBoundingClientRect().left;
        const y1 = myRef.current.getBoundingClientRect().top;
        let x2 = document.querySelector('#Acc').getBoundingClientRect().left;
        let y2 = document.querySelector('#Acc').getBoundingClientRect().top;
        MyFun(time,x2,y2,x1,y1,setCoor)

        x2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left+10;
        y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        MyFun(time + 2000,x2,y2,x1,y1,setCoor)

        x2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().left;
        y2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().top +30;
        MyFun(time + 3000,x2,y2,x1,y1,setCoor)

        x2=document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left +8;
        MyFun(time + 4000,x2,y2,x1,y1,setCoor)

        y2=document.querySelector('.BusEuals').getBoundingClientRect().top
        MyFun(time + 5000,x2,y2,x1,y1,setCoor)

        x2=document.querySelector('#Eual1 #eual0').getBoundingClientRect().left
        MyFun(time + 6000,x2,y2,x1,y1,setCoor)

        setTimeout(() => {
          document.querySelector('#Eual1').classList.add('boxShadowBlue');
        }, 7000);
  
        setTimeout(() => {
          document.querySelector('#Eual1').classList.remove('boxShadowBlue');
        }, 8000);  

        setTimeout(() => {
          myRef.current.style.opacity='0%'
        }, 8500);  

      }, []);

      useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
        }
      }, [coor]);

      useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
    
}

/*************************************************************************************************/
/*Déplacement de Co vers Ram*/

export function CoRam(time, myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().left;
      let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;
      MyFun(time, x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
      MyFun(time + 3000,x2,y2,x1,y1,setCoor);
       
      x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
      MyFun(time + 5000, x2, y2, x1, y1, setCoor);

      setTimeout(() => {
        document.querySelector('.RAM').classList.add('boxShadowBlue');
      }, 6000);

      setTimeout(() => {
        document.querySelector('.RAM').classList.remove('boxShadowBlue');
      }, 8000);

      setTimeout(() => {
        myRef.current.style.opacity='0%'
      }, 8500);  

  }, []);
      
      useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
        }
      }, [coor]);

      useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
}

/*************************************************************************************************/
/*Déplacement de Rim Vers Ram*/

export function RimRam(time, myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().left;
      let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
      MyFun(time,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
      MyFun(time + 2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
      MyFun(time + 3000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RamBusDonnees .triangleHaut').getBoundingClientRect().left;
      MyFun(time + 4000, x2, y2, x1, y1, setCoor);

      y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
      MyFun(time + 5000, x2, y2, x1, y1, setCoor);

      x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
      MyFun(time + 6000, x2, y2, x1, y1, setCoor);

      setTimeout(() => {
        document.querySelector('.RAM').classList.add('boxShadowBlue');
      }, 7000);

      setTimeout(() => {
        document.querySelector('.RAM').classList.remove('boxShadowBlue');
      }, 8000);

      setTimeout(() => {
        myRef.current.style.opacity='0%'
      }, 8500);  

  }, []);
      
      useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'}, time + 1000)
        }
      }, [coor]);

      useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
}

/*************************************************************************************************/
/*Déplacement de Rim vers Uc*/

export function RimToUc(time, myRef, setCoor, coor) {

 useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().left;
      let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;

      MyFun(time,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusRi .rectangle').getBoundingClientRect().top;
      MyFun(time + 2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusRi .triangleGauche').getBoundingClientRect().left;
      MyFun(time + 3000,x2,y2,x1,y1,setCoor);

      setTimeout(() => {
        document.querySelector('.Ri').classList.add('boxShadowBlue');
      }, 4000);
  
      setTimeout(() => {
        document.querySelector('.Ri').classList.remove('boxShadowBlue');
      }, 5000);
  
      x2 = document.querySelector('.BusUcToRi').getBoundingClientRect().left;
      MyFun(time + 5500, x2, y2, x1, y1, setCoor);
  
      y2 = document.querySelector('.BusUcToRi, triangleHaut').getBoundingClientRect().top;
      MyFun(time + 6000, x2, y2, x1, y1, setCoor);

      setTimeout(() => {
        document.querySelector('.Uc').classList.add('boxShadowBlue');
      }, 7000);
  
      setTimeout(() => {
        document.querySelector('.Uc').classList.remove('boxShadowBlue');
      }, 8000);

      setTimeout(() => {
        myRef.current.style.opacity='0%'
      }, 8500);  

  }, []);
      
      useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'},1000)
        }
      }, [coor]);

      useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
 }

 export function RegPile(time,myRef,setCoor,coor){
  useEffect(() => {
      let x1 =myRef.current.getBoundingClientRect().left;
      let y1 = myRef.current.getBoundingClientRect().top;
      let x2 =document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;
      let y2 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().top;
      MyFun(time,x2,y2,x1,y1,setCoor);
 /***/     setTimeout(() => {
        document.querySelector('.RegToBusDonnees .rectangle').classList.add('boxShadowBlue');
 /***/     }, time+1000);

      y2=document.querySelector('.BusDonnees').getBoundingClientRect().top;


      MyFun(time+2000,x2,y2,x1,y1,setCoor);
  /***/    setTimeout(() => {
        document.querySelector('.RegToBusDonnees .rectangle').classList.add('boxShadowBlue');
    /***/  }, time+3000);
     /***/ document.querySelector('.RegToBusDonnees .rectangle').classList.remove('boxShadowBlue');
      x2=document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
      MyFun(time+4000,x2,y2,x1,y1,setCoor);
      y2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;
      MyFun(time+5000,x2,y2,x1,y1,setCoor);
    }, []);
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);
    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}
/*********************************************************************************************/ 



/*******************************************************************/ 


export function PileReg(time,myRef,setCoor,coor){
  useEffect(() => {
      let x1 =myRef.current.getBoundingClientRect().left;
      let y1 = myRef.current.getBoundingClientRect().top;
      let x2 =document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
      let y2 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().top;
      MyFun(time,x2,y2,x1,y1,setCoor);
      y2=document.querySelector('.BusDonnees').getBoundingClientRect().top;
       MyFun(time+2000,x2,y2,x1,y1,setCoor);
       x2=document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;
      MyFun(time+4000,x2,y2,x1,y1,setCoor);
      y2 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().top;
       MyFun(time+5000,x2,y2,x1,y1,setCoor);
    }, []);
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);
    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
}
/**********************************************************************/



export function RimReg(time,myRef,setCoor,coor){
  useEffect(() => {
      let x1 =myRef.current.getBoundingClientRect().left;
      let y1 = myRef.current.getBoundingClientRect().top;
      let x2 =document.querySelector('.Rim .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.Rim ').getBoundingClientRect().top;
      MyFun(time,x2,y2,x1,y1,setCoor);
      y2=document.querySelector('.RimBusDonnees').getBoundingClientRect().top;
     MyFun(time+2000,x2,y2,x1,y1,setCoor);
       x2=document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;
  MyFun(time+4000,x2,y2,x1,y1,setCoor);
       y2 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().top;
     MyFun(time+5000,x2,y2,x1,y1,setCoor);
    }, []);
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);
    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
}


/****************************************************************/

export function CoPile(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;

    MyFun(time,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
    MyFun(time + 4500,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;
    MyFun(time + 6000, x2, y2, x1, y1, setCoor);

    setTimeout(() => {
      document.querySelector('.pile').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.pile').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de Co vers Ual*/

export function CoUal(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;

    MyFun(time,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 2500,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;
    MyFun(time + 3500,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000, x2, y2, x1, y1, setCoor);

    x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de la pile vers le Co*/

export function PileCo(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().left;
    let y2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;

    MyFun(time,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RamBusDonnees').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000, x2, y2, x1, y1, setCoor);

    y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.Co').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.Co').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de l'Ual vers le Co*/

export function UalCo(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusEuals .triangleGauche').getBoundingClientRect().top;
    MyFun(time,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RamBusDonnees').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000, x2, y2, x1, y1, setCoor);

    y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.Co').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.Co').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de Rim vers Eual1*/

export function RimEual1(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().left;
    let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().top;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.BusDonnees').getBoundingClientRect().left;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000, x2, y2, x1, y1, setCoor);

    x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  


}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de Eual1 vers Rim*/

export function Eual1Rim(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusEuals .triangleGauche').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees  .triangleGauche').getBoundingClientRect().top;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RamBusDonnees').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RimToRi').getBoundingClientRect().left;
    MyFun(time + 5000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.rim').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.rim').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500); 

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de Reg vers Rim*/
 
export function RegRim(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
    let y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees  .triangleGauche').getBoundingClientRect().top;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RimBusDonnees  .triangleGauche').getBoundingClientRect().left;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
    MyFun(time + 5000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.rim').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.rim').classList.remove('boxShadowBlue');
    }, 8000);

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500); 

}, []);
    
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);

}

/*************************************************************************************************/
/*Déplacement de Registre vers Ual*/

export function RegUal(time,myRef,setCoor,coor){
  useEffect(() => {
  
      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;

      let x2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
      let y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
      MyFun(time ,x2,y2,x1,y1,setCoor)

      x2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().left;
      y2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().top;
      MyFun(time + 2000 ,x2,y2,x1,y1,setCoor)

      x2=document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
      MyFun(time + 3000,x2,y2,x1,y1,setCoor)

      y2=document.querySelector('.BusEuals').getBoundingClientRect().top
      MyFun(time + 5000,x2,y2,x1,y1,setCoor)

      x2=document.querySelector('#Eual1 #eual0').getBoundingClientRect().left
      MyFun(time + 6000,x2,y2,x1,y1,setCoor)

      setTimeout(() => {
        document.querySelector('#Eual1').classList.add('boxShadowBlue');
      }, 7000);

      setTimeout(() => {
        document.querySelector('#Eual1').classList.remove('boxShadowBlue');
      }, 8000);  

      setTimeout(() => {
        myRef.current.style.opacity='0%'
      }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}

/*************************************************************************************************/
/*Déplacement de Ual vers Registre*/

export function UalReg(time,myRef,setCoor,coor){
  useEffect(() => {
  
    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusEuals .triangleGauche').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;

    MyFun(time + 2500,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 3500,x2,y2,x1,y1,setCoor);

    x2=document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().left;
    MyFun(time + 4500,x2,y2,x1,y1,setCoor);

    y2=document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top
    MyFun(time + 5500,x2,y2,x1,y1,setCoor);  

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}

/*************************************************************************************************/
/*Déplcement de Fkag vers la pile*/

export function FlagPile(time,myRef,setCoor,coor){
  useEffect(() => {
  
    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.FlagBusDonnees').getBoundingClientRect().left;
    let y2 = document.querySelector('.FLAG').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    y2=document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.pile').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.pile').classList.remove('boxShadowBlue');
    }, 8000); 

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}
/*************************************************************************************************/
/*Déplacement de la pile vers le Flag*/

export function PileFlag(time,myRef,setCoor,coor){
  useEffect(() => {
  
    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
    let y2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.FlagBusDonnees').getBoundingClientRect().left;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    y2=document.querySelector('.FLAG').getBoundingClientRect().top;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.FLAG').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.FLAG').classList.remove('boxShadowBlue');
    }, 8000); 

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}

/********************************************************************************************/

/*Déplacement de Flag vers l'UAL*/

export function FlagUal(time,myRef,setCoor,coor){
  useEffect(() => {
  
    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.FlagBusDonnees').getBoundingClientRect().left;
    let y2 = document.querySelector('.FLAG').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees').getBoundingClientRect().left;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    y2=document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('#Eual1').classList.remove('boxShadowBlue');
    }, 8000); 

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}

/********************************************************************************************/
/*Déplacement de l'Ual vers le Flag*/

export function UalFlag(time,myRef,setCoor,coor){
  useEffect(() => {
  
    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('#Eual1 #eual0').getBoundingClientRect().left;
    let y2 = document.querySelector('.BusEuals .rectangleGauche').getBoundingClientRect().top;
    MyFun(time ,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;

    MyFun(time + 2000,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
    MyFun(time + 4000,x2,y2,x1,y1,setCoor);

    x2=document.querySelector('.FlagBusDonnees').getBoundingClientRect().left;
    MyFun(time + 5000,x2,y2,x1,y1,setCoor);

    y2=document.querySelector('.FLAG').getBoundingClientRect().top;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

    setTimeout(() => {
      document.querySelector('.FLAG').classList.add('boxShadowBlue');
    }, 7000);

    setTimeout(() => {
      document.querySelector('.FLAG').classList.remove('boxShadowBlue');
    }, 8000); 

    setTimeout(() => {
      myRef.current.style.opacity='0%'
    }, 8500);  

    }, []);

    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},time + 1000)
      }
    }, [coor]);

    useEffect(() => {
      if (coor.length === 2) {
        myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
      }
    }, [coor]);
  
}













