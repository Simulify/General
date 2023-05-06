import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { AccPile } from './yellow';

function LightAccPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  AccPile(time,myRef,setCoor,coor);
  return <div className='LightAccPile' ref={myRef} />;
}

export default LightAccPile;