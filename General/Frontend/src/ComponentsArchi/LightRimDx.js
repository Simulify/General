import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimDx } from './yellow';

function LightRimDx({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimDx(time,myRef,setCoor,coor);

  return <div className='LightRimDx' ref={myRef} />;
}

export default LightRimDx;