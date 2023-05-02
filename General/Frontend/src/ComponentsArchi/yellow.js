import React, { useEffect } from 'react';
import {useState} from 'react'
import { useRef } from 'react';
import './Light.css';

export function MyFun(time,x2,y2,x1,y1,setCoor) {
    setTimeout(() => {
        setCoor((prevCoor) => [x2 - x1, y2 - y1]);
      }, time);
  }
export function RegToB(time,myRef,setCoor,coor){
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
        x2=document.querySelector('#Eual1 #eual0 ').getBoundingClientRect().left
        MyFun(time + 6000,x2,y2,x1,y1,setCoor)
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

/**************************************************************************/

export function CoRam(time, myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.CO .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.CO .C3').getBoundingClientRect().top;
      MyFun(time, x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.CoToRam').getBoundingClientRect().top;
      MyFun(time + 4000,x2,y2,x1,y1,setCoor);
       
      x2 = document.querySelector('.Ram').getBoundingClientRect().left;
      MyFun(time + 6000, x2, y2, x1, y1, setCoor);

  }, []);
      
      useEffect(() => {
        if (coor.length === 2) {
          setTimeout(()=>{myRef.current.style.opacity='60%'},time + 2000)
        }
      }, [coor]);

      useEffect(() => {
        if (coor.length === 2) {
          myRef.current.style.transform = `translate(${coor[0]}px, ${coor[1]}px)`;
        }
      }, [coor]);
}

/**************************************************************************/

export function RimRam(time, myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.Rim .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.Rim .C3').getBoundingClientRect().top;
      MyFun(time,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
      MyFun(time + 2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
      MyFun(time + 3000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RamBusDonnees .triangleHaut').getBoundingClientRect().left;
      MyFun(time + 4000, x2, y2, x1, y1, setCoor);

      y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
      MyFun(time + 5000, x2, y2, x1, y1, setCoor);

      x2 = document.querySelector('.Ram .ram2').getBoundingClientRect().left;
      MyFun(time + 6000, x2, y2, x1, y1, setCoor);

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

/**************************************************************************/

export function RimToUc(time, myRef, setCoor, coor) {

 useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.Rim .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.Rim .C3').getBoundingClientRect().top;

      MyFun(time,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusRi .rectangle').getBoundingClientRect().top;
      MyFun(time + 2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusRi .triangleGauche').getBoundingClientRect().left;
      MyFun(time + 3500,x2,y2,x1,y1,setCoor);
  
      x2 = document.querySelector('.BusUcToRi').getBoundingClientRect().left;
      MyFun(time + 5000, x2, y2, x1, y1, setCoor);
  
      y2 = document.querySelector('.BusUcToRi, triangleHaut').getBoundingClientRect().top;
      MyFun(time + 6000, x2, y2, x1, y1, setCoor);

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
      let x2 =document.querySelector('.registres').getBoundingClientRect().left;
      let y2 = document.querySelector('.registres').getBoundingClientRect().top;
      MyFun(time,x2+70,y2,x1,y1,setCoor)
      y2=document.querySelector('.BusDonnees').getBoundingClientRect().top;
      x2=document.querySelector('.registres').getBoundingClientRect().left;
      MyFun(time+2000,x2+70,y2,x1,y1,setCoor);
      x2=document.querySelector('.pile').getBoundingClientRect().left;
      MyFun(time+4000,x2+70,y2,x1,y1,setCoor);
      y2 = document.querySelector('.pile').getBoundingClientRect().top;
      MyFun(time+5000,x2+70,y2,x1,y1,setCoor);
    }, []);
    useEffect(() => {
      if (coor.length === 2) {
        setTimeout(()=>{myRef.current.style.opacity='60%'},800)
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
    let x2 = document.querySelector('.Co .C3').getBoundingClientRect().left;
    let y2 = document.querySelector('.Co .C3').getBoundingClientRect().top;

    MyFun(time,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 3000,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;
    MyFun(time + 4500,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;
    MyFun(time + 6000, x2, y2, x1, y1, setCoor);

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

/******************************************************************/

export function CoUal(time,myRef,setCoor,coor) {

  useEffect(() => {

    const x1 = myRef.current.getBoundingClientRect().left;
    const y1 = myRef.current.getBoundingClientRect().top;
    let x2 = document.querySelector('.Co .C3').getBoundingClientRect().left;
    let y2 = document.querySelector('.Co .C3').getBoundingClientRect().top;

    MyFun(time,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
    MyFun(time + 2500,x2,y2,x1,y1,setCoor);

    x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;
    MyFun(time + 3500,x2,y2,x1,y1,setCoor);

    y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
    MyFun(time + 5000, x2, y2, x1, y1, setCoor);

    x2 = document.querySelector('#Eual2 #eual0').getBoundingClientRect().left;
    MyFun(time + 6000,x2,y2,x1,y1,setCoor);

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

