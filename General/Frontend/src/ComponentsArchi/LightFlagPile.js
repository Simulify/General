import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { FlagPile } from './yellow';

function LightFlagPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  FlagPile(time, myRef,setCoor,coor)

  return <div className='LightFlagPile' ref={myRef} />;
}

export default LightFlagPile;