import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RegPile } from './yellow';

function LightRegPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RegPile(time,myRef,setCoor,coor);

  return <div className='LightRegPile' ref={myRef} />;
}

export default LightRegPile;