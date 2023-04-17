import SubfilesButton from './components/SubfilesButton';
import FilesButton from './components/FilesButton';
import File from './components/File';

import Navbar from './components/Navbar';



import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='App'>
      <div className='content'>
      <Navbar label="Mes fichiers"></Navbar>
   <div className='Menu-container'>
  
  
     <div className='menu-trigger-exemples'>
       <FilesButton label='Exemples' onClick={handleClick} />
     </div>

     <div className='subfiles-exemple'>
      
       <SubfilesButton label='Dossier' onClick={handleClick} />
     </div>
     <div className='file-exemple'>
      
      <File label='Mon premier exemple' onClick={handleClick} />
    </div>
   </div>
      </div>


    </div>
  );
}

export default App;
