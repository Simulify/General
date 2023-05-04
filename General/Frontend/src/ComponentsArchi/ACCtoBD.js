import React, { useEffect, useRef, useState } from 'react';
import { Yellow } from './yellow';
import './Light.css';
import { MyFun } from './yellow';
import { RegToB } from './yellow';
function ABCD({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RegToB(time,myRef,setCoor,coor)

  return <div className='Light' ref={myRef} />;
}

export default ABCD;
