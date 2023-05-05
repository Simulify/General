import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { PileCx, PileReg } from './yellow';

function LightPileCX({time}) 
{
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileCx(time,myRef,setCoor,coor);

  return <div className='LightPileCX' ref={myRef} />;
}
export default LightPileCX;