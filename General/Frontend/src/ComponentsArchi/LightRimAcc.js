import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimAcc } from './yellow';

function LightRimACC({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimAcc(time,myRef,setCoor,coor);

  return <div className='LightRimACC' ref={myRef} />;
}

export default LightRimACC;