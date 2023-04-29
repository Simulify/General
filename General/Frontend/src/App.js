import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
import Simulation from './pages/Simulation';
import Files from './pages/Files';
import Revision from './pages/Revision';
import Guide from './pages/Guide';
import GuideArch from './pages/GuideArch';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import Code from './pages/Code';
import MotDePassePage from './ComponentsSettings/MotDePassePage';
import GuideForm from './pages/GuideForm';
import GuideInstr from './pages/GuideInstr';
import GuideInstrArth from './pages/GuideInstrArth';
import GuideInstrLog from './pages/GuideInstrLog';
import GuideInstrShrt from './pages/GuideInstrShrt';
import GuideInstrBrch from './pages/GuideInstrBrch';
import GuideInstrDtrs from './pages/GuideInstrDtrs';
import GuideInstrInout from './pages/GuideInstrInout';
import RessourcePage from './pages/RessourcePage';
import LivresPage from './pages/LivresPage';
import VideoPage from './pages/VideoPage';
import SitesPage from './pages/SitesPage';
import ExplicationsPage from './pages/ExplicationsPage';
import ProfilePage from './ComponentsSettings/ProfilePage';
import LanguePage from './ComponentsSettings/LanguePage';
import ModePage from './ComponentsSettings/ModePage';

function App() {
 return (
  <div className="App">
    <BrowserRouter>
     <Sidebar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/code' element={<Code/>}></Route>
      <Route path='/code/simulation' element={<Simulation/>}></Route>
      <Route path='/files' element={<Files/>}></Route>
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
      <Route path='/settings' element={<Settings/>}></Route>
      <Route path='/settings/ProfilePage'  element={<ProfilePage/>}></Route>
      <Route path='/settings/MotDePassePage'  element={<MotDePassePage/>}></Route> 
      <Route path='/settings/LanguePage'  element={<LanguePage/>}></Route>
      <Route path='/settings/ModePage'  element={<ModePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/*' element={<ErrorPage/>}></Route>
     </Routes>
    </BrowserRouter>
  </div>
 );
}


export default App;