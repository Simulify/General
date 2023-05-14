import React ,{useEffect}from 'react';
import './Sidebar.css';
import {SidebarData} from './SidebarData';
import { ReactComponent as Logo } from '../SidebarIcons/Logo.svg';
import { ReactComponent as ExitIcon} from '../SidebarIcons/Exit.svg';
import { Link } from 'react-router-dom';

function Sidebar (props) {
  useEffect(() => {
    const state = localStorage.getItem('isAuthenticated');
    if (state !== null) {
      
      localStorage.setItem('removedAuthenticated', true);
    }
  }, []);

  const handleClick = () => {
    // Toggle the effect here
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
    const removedAuthenticated = localStorage.getItem('removedAuthenticated');
    if (removedAuthenticated === 'true') {
      localStorage.removeItem('removedAuthenticated');
      localStorage.setItem('isAuthenticated', true);
    } else {
      localStorage.setItem('removedAuthenticated', true);
    }}
  };
    const handleReset = () => {
        props.onReset();
      };
 return (
  <div className='Sidebar'>
   <div className="logo"><Logo/></div>
   <ul className='SidebarList'>
    {SidebarData.map((val, key) => {
     return (
      <li 
       key={key} 
       className='row'
       id={window.location.pathname.startsWith(val.link)
        ||(window.location.pathname ==="/" && val.link === "/home")? 'active' : ''}
       onClick={() => { window.location.pathname = val.link }}> 
       <div onClick={handleClick}>{val.icon}</div>
      </li>
     );
    })}
   </ul>
   <Link to="/home" className="exit" onClick={handleReset}><ExitIcon/></Link>
  </div>
 );
};


export default Sidebar;