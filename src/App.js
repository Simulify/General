
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
          <Route path='/guide' element={<Guide/>}></Route>
          <Route path='/guide/architecture' element={<GuideArch/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );

}


export default App;
