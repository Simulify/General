import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimReg } from './yellow';

function LightRimReg({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimReg(time,myRef,setCoor,coor);

  return <div className='LightRimReg' ref={myRef} />;
}

export default LightRimReg;