import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimEual1 } from './yellow';

function LightRimEual1({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimEual1(time, myRef,setCoor,coor)

  return <div className='LightRimEual1' ref={myRef} />;
}

export default LightRimEual1;