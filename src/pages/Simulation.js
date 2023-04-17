import React from 'react';
import '../Simulation.css'
import Container from '../ComponentsArchi/Container';
import SideBar from '../components/Sidebar';


function Simulation () {
  return (
    <div className='Simulation'>
        <SideBar/>
        <Container/>
    </div>
  );
};



export default Simulation;