import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimSi } from './yellow';

function LightRimSI({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimSi(time,myRef,setCoor,coor);

  return <div className='LightRimSI' ref={myRef} />;
}

export default LightRimSI;