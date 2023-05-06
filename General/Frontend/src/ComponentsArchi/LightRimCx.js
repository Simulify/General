import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimCx } from './yellow';

function LightRimCx({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimCx(time,myRef,setCoor,coor);

  return <div className='LightRimCx' ref={myRef} />;
}

export default LightRimCx;