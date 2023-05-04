import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimToUc } from './yellow';

function LightRimUc({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimToUc(time, myRef,setCoor,coor)

  return <div className='LightRimUc' ref={myRef} />;
}

export default LightRimUc;