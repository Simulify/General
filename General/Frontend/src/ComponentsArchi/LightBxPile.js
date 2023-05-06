import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { BxPile } from './yellow';

function LightBxPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  BxPile(time,myRef,setCoor,coor);
  return <div className='LightBxPile' ref={myRef} />;
}

export default LightBxPile;