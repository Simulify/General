import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import {PileBx} from './yellow';

function LightPileBx({time}) 
{
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileBx(time,myRef,setCoor,coor);

  return <div className="LightPileBx" ref={myRef} />;
}
export default LightPileBx;