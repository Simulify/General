import SubfilesButton from './components/SubfilesButton';
import FilesButton from './components/FilesButton';
import File from './components/File';
import UpButton from './components/UpButton';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='App'>
      <div className='content'>
      <Navbar label="Mes fichiers"></Navbar>


<div className='two-buttons'>
<div className='Up-button-left'>
      
      <UpButton label='Ajouter fichier' onClick={handleClick} />
    </div>
    <div className='Up-button-right'>
      
      <UpButton label='Ajouter dossier' onClick={handleClick} />
    </div></div>  


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
