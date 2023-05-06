import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { PileSi } from './yellow';

function LightPileSi({time}) 
{
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileSi(time,myRef,setCoor,coor);

  return <div className='LightPileSi' ref={myRef} />;
}
export default LightPileSi;