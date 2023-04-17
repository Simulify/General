// import SubfilesButton from './components/SubfilesButton';
// import FilesButton from './components/FilesButton';
// import File from './components/File';
// import UpButton from './components/UpButton';
// import Navbar from './components/Navbar';
// import '@fortawesome/fontawesome-free/css/all.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import Files from './pages/Files';
import Revision from './pages/Revision';
import Guide from './pages/Guide';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/simulation' element={<Simulation/>}></Route>
          <Route path='/files' element={<Files/>}></Route>
          <Route path='/revision' element={<Revision/>}></Route>
          <Route path='/guide' element={<Guide/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <div className='App'>
//       <div className='content'>
//       <Navbar label="Mes fichiers"></Navbar>


// <div className='two-buttons'>
// <div className='Up-button-left'>
      
//       <UpButton label='Ajouter fichier' onClick={handleClick} />
//     </div>
//     <div className='Up-button-right'>
      
//       <UpButton label='Ajouter dossier' onClick={handleClick} />
//     </div></div>  


//    <div className='Menu-container'>
  
  
//      <div className='menu-trigger-exemples'>
//        <FilesButton label='Exemples' onClick={handleClick} />
//      </div>

//      <div className='subfiles-exemple'>
      
//        <SubfilesButton label='Dossier' onClick={handleClick} />
//      </div>
//      <div className='file-exemple'>
      
//       <File label='Mon premier exemple' onClick={handleClick} />
//     </div>
//    </div>
//       </div>


//     </div>
//   );

export default App;
