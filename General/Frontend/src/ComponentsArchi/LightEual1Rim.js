import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { Eual1Rim } from './yellow';

function LightEual1Rim({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  Eual1Rim(time,myRef,setCoor,coor);

  return <div className='LightEual1Rim' ref={myRef} />;
}

export default LightEual1Rim;