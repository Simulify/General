import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import {PileDx} from './yellow';

function LightPileDx({time}) 
{
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileDx(time,myRef,setCoor,coor);
  return <div className="LightPileDx" ref={myRef} />;
}
export default LightPileDx;