import React from 'react';
import './Sidebar.css';
import {SidebarData} from './SidebarData';
import { ReactComponent as Logo } from '../SidebarIcons/Logo.svg';
import { ReactComponent as ExitIcon} from '../SidebarIcons/Exit.svg';


function Sidebar () {
  return (
    <div className='Sidebar'>
      <div className="logo"><Logo/></div>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li 
              key={key} 
              className='row'
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link
              }}> 
                <div >{val.icon}</div>
            </li>
          );
        })}
      </ul>
      <a className="exit" href="./home"><ExitIcon/></a>
    </div>
  );
};



export default Sidebar;