import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { PileCo } from './yellow';

function LightPileCo({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileCo(time, myRef,setCoor,coor)

  return <div className='LightPileCo' ref={myRef} />;
}

export default LightPileCo;