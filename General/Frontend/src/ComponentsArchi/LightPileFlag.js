import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { PileFlag } from './yellow';

function LightPileFlag({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileFlag(time, myRef,setCoor,coor)

  return <div className='LightPileFlag' ref={myRef} />;
}

export default LightPileFlag;