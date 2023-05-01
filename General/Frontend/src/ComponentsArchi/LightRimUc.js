import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { MyFun } from './yellow';
import { RimToUc } from './yellow';

function LightRimUc() {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  RimToUc(myRef,setCoor,coor)

  return <div className='LightRimUc' ref={myRef} />;
}

export default LightRimUc;