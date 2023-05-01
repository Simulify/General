import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { CoRam } from './yellow';

function LightCoRam() {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  CoRam(myRef,setCoor,coor)

  return <div className='LightCoRam' ref={myRef} />;
}

export default LightCoRam;