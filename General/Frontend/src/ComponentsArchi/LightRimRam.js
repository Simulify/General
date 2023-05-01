import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimRam } from './yellow';

function LightRimRam() {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimRam(myRef,setCoor,coor)

  return <div className='LightRimRam' ref={myRef} />;
}

export default LightRimRam;