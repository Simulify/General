import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { DxPile } from './yellow';

function LightDxPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  DxPile(time,myRef,setCoor,coor);

  return <div className='LightDxPile' ref={myRef} />;
}

export default LightDxPile;