import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { SiPile } from './yellow';

function LightSiPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  SiPile(time,myRef,setCoor,coor);

  return <div className='LightSiPile' ref={myRef} />;
}

export default LightSiPile;