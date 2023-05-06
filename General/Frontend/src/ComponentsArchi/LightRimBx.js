import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimBx } from './yellow';

function LightRimBx({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimBx(time,myRef,setCoor,coor);

  return <div className='LightRimBx' ref={myRef} />;
}

export default LightRimBx;