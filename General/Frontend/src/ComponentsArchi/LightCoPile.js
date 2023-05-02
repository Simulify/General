import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { CoPile } from './yellow';

function LightCoPile({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  CoPile(time, myRef,setCoor,coor)

  return <div className='LightCoPile' ref={myRef} />;
}

export default LightCoPile;