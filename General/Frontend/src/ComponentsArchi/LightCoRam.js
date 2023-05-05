import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { CoRam } from './yellow';

function LightCoRam({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  CoRam(time, myRef,setCoor,coor)

  return <div className='LightCoRam' ref={myRef} />;
}

export default LightCoRam;