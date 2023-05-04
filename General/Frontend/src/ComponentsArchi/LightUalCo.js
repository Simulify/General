import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { UalCo } from './yellow';

function LightUalCo({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  UalCo(time, myRef,setCoor,coor)

  return <div className='LightUalCo' ref={myRef} />;
}

export default LightUalCo;