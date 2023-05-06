import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { FlagUal } from './yellow';

function LightFlagUal({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  FlagUal(time, myRef,setCoor,coor)

  return <div className='LightFlagUal' ref={myRef} />;
}

export default LightFlagUal;