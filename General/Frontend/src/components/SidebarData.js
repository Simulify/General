import React from 'react';
import { ReactComponent as HomeIcon} from '../SidebarIcons/Home.svg';
import { ReactComponent as SimulationIcon} from '../SidebarIcons/Simulation.svg';
import { ReactComponent as FilesIcon} from '../SidebarIcons/Fichiers.svg';
import { ReactComponent as RevisionIcon} from '../SidebarIcons/Revision.svg';
import { ReactComponent as GuideIcon} from '../SidebarIcons/Guide.svg';
import { ReactComponent as SettingsIcon} from '../SidebarIcons/Setting.svg';

export const SidebarData = [
  {
    icon : <div className='homeicon'><HomeIcon /></div>,
    link : "/home",
  },
  {
    icon : <div className='simuicon'><SimulationIcon /></div>,
    link : "/code",
  },
  {
    icon : <div className='filesicon'><FilesIcon /></div>,
    link: `/files/${localStorage.getItem('username')}`,
  },
  {
    icon : <div className='revicon'><RevisionIcon /></div>,
    link : "/revision",
  },
  {
    icon : <div className='guideicon'><GuideIcon /></div>,
    link : "/guide",
  },
  {
    icon : <div className='seticon'><SettingsIcon /></div>,
    link: `/settings`,
  }
]