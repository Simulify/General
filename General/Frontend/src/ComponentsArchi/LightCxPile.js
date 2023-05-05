import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { CxPile } from './yellow';

function LightCxPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  CxPile(time,myRef,setCoor,coor);

  return <div className='LightCxPile' ref={myRef} />;
}

export default LightCxPile;