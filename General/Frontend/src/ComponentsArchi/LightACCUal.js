import React, { useEffect, useRef, useState } from 'react';
import './Light.css';
import { ACCUal } from './yellow';


function LightACCUal({time}) {
  const [coor, setCoor] = useState([]);
  const myRef = useRef(null);
  ACCUal(time,myRef,setCoor,coor)

  return <div className='Light' ref={myRef} />;
}

export default LightACCUal;
