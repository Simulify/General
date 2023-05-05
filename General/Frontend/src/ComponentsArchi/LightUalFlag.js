import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { UalFlag } from './yellow';

function LightUalFlag({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  UalFlag(time, myRef,setCoor,coor)

  return <div className='LightUalFlag' ref={myRef} />;
}

export default LightUalFlag;