import React, { useEffect } from 'react';
import {useState} from 'react'
import { useRef } from 'react';
import './Light.css';

export function MyFun(time,x2,y2,x1,y1,setCoor) {
    setTimeout(() => {
        setCoor((prevCoor) => [x2 - x1, y2 - y1]);
      }, time);
  }
export function RegToB(myRef,setCoor,coor){
    useEffect(() => {
    
        const x1 = myRef.current.getBoundingClientRect().left;
        const y1 = myRef.current.getBoundingClientRect().top;
        let x2 = document.querySelector('#Acc').getBoundingClientRect().left;
        let y2 = document.querySelector('#Acc').getBoundingClientRect().top;
        MyFun(0,x2,y2,x1,y1,setCoor)
         x2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left+10;
        y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        MyFun(1000,x2,y2,x1,y1,setCoor)
        x2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().left;
        y2 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().top +30;
        MyFun(2000,x2,y2,x1,y1,setCoor)
        x2=document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left +8;
        MyFun(3000,x2,y2,x1,y1,setCoor)
        y2=document.querySelector('.BusEuals').getBoundingClientRect().top
        MyFun(4000,x2,y2,x1,y1,setCoor)
        x2=document.querySelector('#Eual2 #eual0 ').getBoundingClientRect().left
        MyFun(5000,x2,y2,x1,y1,setCoor)
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

export function CoRam(myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.CO .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.CO .C3').getBoundingClientRect().top;
      MyFun(1000,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.CoToRam').getBoundingClientRect().top;
      MyFun(2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.Ram').getBoundingClientRect().left;
      MyFun(3000, x2, y2, x1, y1, setCoor);

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

export function RimRam(myRef, setCoor, coor) {

  useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.Rim .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.Rim .C3').getBoundingClientRect().top;
      MyFun(1000,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
      MyFun(2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
      MyFun(3000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RamBusDonnees .triangleHaut').getBoundingClientRect().left;
      MyFun(4000, x2, y2, x1, y1, setCoor);

      y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
      MyFun(5000, x2, y2, x1, y1, setCoor);

      x2 = document.querySelector('.Ram .ram2').getBoundingClientRect().left;
      MyFun(6000, x2, y2, x1, y1, setCoor);

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

export function RimToUc(myRef, setCoor, coor) {

 useEffect(() => {

      const x1 = myRef.current.getBoundingClientRect().left;
      const y1 = myRef.current.getBoundingClientRect().top;
      let x2 = document.querySelector('.Rim .C3').getBoundingClientRect().left;
      let y2 = document.querySelector('.Rim .C3').getBoundingClientRect().top;

      MyFun(1000,x2,y2,x1,y1,setCoor);

      y2 = document.querySelector('.RimBusRi .rectangle').getBoundingClientRect().top;
      MyFun(2000,x2,y2,x1,y1,setCoor);

      x2 = document.querySelector('.RimBusRi .triangleGauche').getBoundingClientRect().left;
      MyFun(3250,x2,y2,x1,y1,setCoor);
  
      x2 = document.querySelector('.BusUcToRi').getBoundingClientRect().left;
      MyFun(4000, x2, y2, x1, y1, setCoor);
  
      y2 = document.querySelector('.BusUcToRi, triangleHaut').getBoundingClientRect().top;
      MyFun(5000, x2, y2, x1, y1, setCoor);

      setTimeout(() => {
        document.querySelector('.Uc').classList.add("boxShadowBlue");
      }, 6000);


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