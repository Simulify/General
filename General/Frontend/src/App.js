import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState,useEffect} from 'react';

import './pages/ColorsVar.css'; 
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
import Simulation from './pages/Simulation';
import Files from './pages/Files';
import Revision from './pages/Revision';
import Guide from './pages/Guide';
import GuideArch from './ComponentsGuide/GuideArch';
import GuideForm from './ComponentsGuide/GuideForm';
import GuideInstr from './ComponentsGuide/GuideInstr';
import GuideInstrArth from './ComponentsGuide/GuideInstrArth';
import GuideInstrLog from './ComponentsGuide/GuideInstrLog';
import GuideInstrShrt from './ComponentsGuide/GuideInstrShrt';
import GuideInstrBrch from './ComponentsGuide/GuideInstrBrch';
import GuideInstrDtrs from './ComponentsGuide/GuideInstrDtrs';
import GuideInstrInout from './ComponentsGuide/GuideInstrInout';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Code from './pages/Code';
import Syntaxe from './pages/Syntaxe';
import MotDePassePage from './ComponentsSettings/MotDePassePage';
import RessourcePage from './pages/RessourcePage';
import LivresPage from './pages/LivresPage';
import VideoPage from './pages/VideoPage';
import SitesPage from './pages/SitesPage';
import ExplicationsPage from './pages/ExplicationsPage';
import ProfilePage from './ComponentsSettings/ProfilePage';
import LanguePage from './ComponentsSettings/LanguePage';
import ModePage from './ComponentsSettings/ModePage';
import { Sim } from './pages/Sim';
import FAQ from './pages/FAQ';

function App() {
  


  const [isAuthenticated, setIsAuthenticated] = useState(false); //une variable qui est mise à jour au login & logout
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') || null);
  

  function handleReset() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    localStorage.setItem("buttonClicked", "false");
  }
  function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('user'));
    return isAuthenticated ? (
      <React.Fragment>{children}</React.Fragment>
    ) : (
      <Navigate to="/login" replace />
    );
  }
  
 return (
  <div className="App">
    <BrowserRouter>
    <Sidebar onReset={handleReset} />
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/code/programmation-syntaxe' element={<Syntaxe/>}></Route>
      <Route path="/settings/*" element={<PrivateRoute><Routes><Route path="/" element={<Settings />} /></Routes></PrivateRoute>}/>
      <Route path='/code' element={<Sim></Sim>}></Route>
      <Route path='/code/simulation' element={<Sim></Sim>}></Route>
      <Route path="/files/*" element={<PrivateRoute currentUser={currentUser}><Files currentUser={currentUser} /></PrivateRoute>} />
      <Route path="/files/:username" element={<PrivateRoute currentUser={currentUser}><Routes><Route path="/" element={<Files currentUser={currentUser} />} /></Routes></PrivateRoute>} />

      {/*  changes are done here */ }
      <Route path="/settings/*" element={<PrivateRoute currentUser={currentUser}><Settings currentUser={currentUser} /></PrivateRoute>} />
      <Route path="/settings/Userprofile/:username" element={<PrivateRoute currentUser={currentUser}><Routes><Route path="/" element={<ProfilePage currentUser={currentUser} />} /></Routes></PrivateRoute>} />
      <Route path="/settings/Userpassword/:username" element={<PrivateRoute currentUser={currentUser}><Routes><Route path="/" element={<MotDePassePage currentUser={currentUser} />} /></Routes></PrivateRoute>} />
      <Route path="/settings/Usermode/:username" element={<PrivateRoute currentUser={currentUser}><Routes><Route path="/" element={<ModePage currentUser={currentUser} />} /></Routes></PrivateRoute>} />
      <Route path="/settings/Userlanguage/:username" element={<PrivateRoute currentUser={currentUser}><Routes><Route path="/" element={<LanguePage currentUser={currentUser} />} /></Routes></PrivateRoute>} />
      <Route path='/revision' element={<Revision/>}></Route>
      <Route path='/revision/ressources' element={<RessourcePage/>}></Route>
      <Route path='/revision/ressources/livres' element={<LivresPage/>}></Route>
      <Route path='/revision/ressources/sites' element={<SitesPage/>}></Route>
      <Route path='/revision/ressource/videos' element={<VideoPage/>}></Route>
      <Route path='/revision/explication' element={<ExplicationsPage/>}></Route>
      <Route path='/guide' element={<Guide/>}></Route>
      <Route path='/guide/architecture' element={<GuideArch/>}></Route>
      <Route path='/guide/instruction-format' element={<GuideForm/>}></Route>
      <Route path='/guide/instructions' element={<GuideInstr/>}></Route>
      <Route path='/guide/instructions/arithmetic' element={<GuideInstrArth/>}></Route>
      <Route path='/guide/instructions/logic' element={<GuideInstrLog/>}></Route>
      <Route path='/guide/instructions/shift-rotation' element={<GuideInstrShrt/>}></Route>
      <Route path='/guide/instructions/branch' element={<GuideInstrBrch/>}></Route>
      <Route path='/guide/instructions/in-out' element={<GuideInstrInout/>}></Route>
      <Route path='/guide/instructions/data-transfer' element={<GuideInstrDtrs/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser}/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/*' element={<ErrorPage/>}></Route>
     </Routes>
    </BrowserRouter>
  </div>
 );
}


export default App;