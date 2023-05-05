import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { UalReg } from './yellow';

function LightUalReg({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  UalReg(time, myRef,setCoor,coor)

  return <div className='LightUalReg' ref={myRef} />;
}

export default LightUalReg;