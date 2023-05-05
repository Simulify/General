import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { PileReg } from './yellow';

function LightPileReg({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileReg(time,myRef,setCoor,coor);

  return <div className='LightRegPile' ref={myRef} />;
}

export default  LightPileReg;