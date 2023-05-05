import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { PileAcc } from './yellow';

function LightPileAcc({time}) 
{
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  PileAcc(time,myRef,setCoor,coor);

  return <div className='LightPileAcc' ref={myRef} />;
}
export default LightPileAcc;