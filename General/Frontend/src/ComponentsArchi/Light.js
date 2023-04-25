import React, { useState, useEffect } from 'react';
import './Light.css';

function Light({ x, y }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x, y });
  }, [x, y]);

  return (
    <div
      className="LightMove"
      style={{ left: position.x, top: position.y }}
    />
  );
}

export default Light;