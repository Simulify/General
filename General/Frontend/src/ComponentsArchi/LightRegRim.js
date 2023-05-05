import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { RegRim } from './yellow';

function LightRegRim({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RegRim(time, myRef,setCoor,coor)

  return <div className='LightRegRim' ref={myRef} />;
}

export default LightRegRim;