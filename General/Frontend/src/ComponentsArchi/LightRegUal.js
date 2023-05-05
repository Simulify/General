import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { RegUal } from './yellow';

function LightRegUal({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RegUal(time, myRef,setCoor,coor)

  return <div className='LightRegUal' ref={myRef} />;
}

export default LightRegUal;