import React, { useState ,useEffect} from 'react';
import '../pages/Files.css';
import SubfilesButton from '../components/SubfilesButton';
import FilesButton from '../components/FilesButton';
import File from '../components/File';
import FileNoDelete from '../components/FileNoDelete';
import Navbar from '../components/Navbar';
import Loope from '../Images/No Results@3x.svg';
import { Link } from "react-router-dom";
import axios from 'axios';


function Files(props) {


  //the variables of the visibility of hte files and folders ... by default it's at false util click
  const [myFilesVisible, setMyFilesVisible] = useState(false);

  const [fileExempleVisible, setFileExempleVisible] = useState(false);
  const [files, setFiles] = useState([]);
 //---------------------------------------------------------------------
  useEffect(() => { // when we load the page we fetch data of the current user stored
    const fetchData = async () => { 
      try {
        const storedUser = JSON.parse(localStorage.getItem("currentUser")); // we get the current user
        console.log('currentUser:', storedUser);
        console.log('currentUser_id:', storedUser._id);
        const response = await axios.get(`https://simulify.onrender.com/users/${storedUser._id}/files`); // when get the files of the user
        setFiles(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  

const [fileList, setFileList] = useState([]); // we create the list of personal files


useEffect(() => { //effect that add files in the list 
  setFileList(files.map((file) => ({ id: file._id, label: file.title, codeHexa: file.codeHexa,codeMemo:file.codeMemo })));
}, [files]);

async function removeFile(id) { // removes files based on their _id 
  try {
    console.log(`Removing file with ID ${id}`);
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    await axios.delete(`https://simulify.onrender.com/users/${storedUser._id}/codes/${id}`); //Delete request to the database
    setFileList(fileList.filter((file) => file.id !== id));
  } catch (error) {
    console.error(error);
  }
}
//------------------- The functions that make the toggle effect on click----------------------
  function handleExempleClick() {
   
    setFileExempleVisible((prevState) => !prevState);
  }

  function handleMyFilesClick() {
    setMyFilesVisible((prevState) => !prevState);
  }


//---------------------------------------------------------
  

  return (
    
 
    <div className="Files">

      <Navbar label="Les fichiers"  isAuthenticated={props.isAuthenticated}/>
      <div className="Menu-container">
        <div className="menu-trigger-exemple"
        onClick={handleExempleClick}>
          <FilesButton
            className="Examplebutton"
            label="Exemples"
            
          />
        </div>
        <div
          className={`Menu-exemples ${fileExempleVisible ? 'show' : ''}`}
        >
        
          
          <Link to="/code">
          <FileNoDelete label="Maximum de deux nombres" codeHexa="" codeMemo="MOV BX 5678H
MOV ACC BX
CMP ACC 1234H
BCV 02 L1
MOV BX 1234H
L1: MOV ACC BX
SOR
STOP" />
    </Link>
    <Link to="/code">
    <FileNoDelete label="Somme des entiers de 1 à 10" codeHexa="" codeMemo="MOV AX 0
MOV CX 10
MOV BX 1
L1: ADD ACC BX
INC BX
LOOP L1
SOR 
STOP"  />
      </Link>
      <Link to="/code">
      <FileNoDelete label="Factorielle d'un nombre" codeHexa="" codeMemo="ENT AX
MOV CX ACC
L1: MUL ACC CX
DEC CX
CMP CX 00
BCF 00 L1
SOR
STOP" />
      </Link>
      <Link to="/code">
          <FileNoDelete label="XOR( OU exclusif ) avec la pile" codeHexa="" codeMemo="MOV BX 12H
PUSH BX
MOV BX 56H
PUSH BX
POP BX
POP ACC
XOR ACC BX
SOR
STOP"/>
      </Link>

      <Link to="/code">
          <FileNoDelete label="Reste de division euclidienne" codeHexa="" codeMemo="MOV AX 54H
MOV BX 7H
MOV DX 0H
DIV: CMP AX BX 
BCV 4 EXIT
SUB ACC BX 
INC DX 
BCF 0 DIV
EXIT: MOV ACC DX
SOR"/>
    </Link>
    <Link to="/code">
          <FileNoDelete label="Permutation du contenu de 2 mot mémoire" codeHexa="" codeMemo="MOV AX 12H
MOV DX 10H
MOV SI 7H
MOV BX 20H
MOV CX 4H
CHM ACC [BX + SI] 
MOV DX AX
CHM ACC *CX
RGM [BX + SI] 
MOV ACC DX
RGM *CX
STOP"  />
    </Link>
    <Link to="/code">
          <FileNoDelete label="Rotation et décalage" codeHexa="" codeMemo="MOV AX 8
SHL ACC 3
SOR
MOV ACC 7
SHR ACC 4
SOR
MOV ACC 32
ROR ACC 5
SOR
MOV ACC 24
ROL ACC 10
SOR
STOP"  />
    </Link>
    {/*------------------ */}
         

        </div>
        <div className="second-menu">
  <div className="menu-trigger-mesFichiers" onClick={handleMyFilesClick}>
    <FilesButton label="Mes fichiers" />
  </div>

  <div className={`file-perso ${myFilesVisible ? 'show' : ''}`}>
  
    {fileList.length > 0 ? (
      <ul>
        {fileList.map((file) => (
      <li key={file.id}>
            <File id={file.id} label={file.label} codeHexa={file.codeHexa} codeMemo={file.codeMemo}  onDelete={() => removeFile(file.id)}   />
          </li>
        ))}
      </ul>
    ) : null}

    {myFilesVisible && fileList.length === 0 && (
      <img className="Loope" src={Loope} alt="Loopeicon" />
    )}
  </div>
</div>


      </div>
      </div>

        
  );
}

export default Files;
