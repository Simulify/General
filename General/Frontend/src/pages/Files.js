import React, { useState ,useEffect} from 'react';
import '../pages/Files.css';
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
          <FileNoDelete label="XOR( OU exclusif ) avec la pile" codeHexa="" codeMemo="MOV BX 12
PUSH BX
MOV BX 56
PUSH BX
POP ACC
POP BX
XOR ACC BX
SORT
STOP"/>
      </Link>

   
    <Link to="/code">
          <FileNoDelete label="Permutation du contenu de 2 cases mémoire" codeHexa="" codeMemo="MOV ACC 12
MOV DX 10
MOV SI 7
MOV BX 20
CHM [BX]
MOV DX ACC
CHM [SI]
RGM [BX]
MOV ACC DX
RGM [SI]
STOP"  />
    </Link>
    <Link to="/code">
          <FileNoDelete label="Rotation et décalage" codeHexa="" codeMemo="MOV ACC 8
SHR ACC 3
MOV BX 7
SHL BX 4
MOV CX 32
ROR CX 5
MOV DX 24
ROL DX 10
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
