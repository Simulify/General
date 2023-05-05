import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { CoUal } from './yellow';

function LightCoUal({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  CoUal(time, myRef,setCoor,coor)

  return <div className='LightCoPile' ref={myRef} />;
}

export default LightCoUal;