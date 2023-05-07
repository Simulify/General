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


function Files({ isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser }) {


  //the variables of the visibility of hte files and folders ... by default it's at false util click
  const [myFilesVisible, setMyFilesVisible] = useState(false);
  const [arithmeticVisible, setArithmeticVisible] = useState(false);
  const [logicVisible, setLogicVisible] = useState(false);
  const [branchingVisible, setBranchingVisible] = useState(false);
  const [transferVisible, setTransferVisible] = useState(false);
  const [shiftVisible, setShiftVisible] = useState(false);
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

  function handleArithmeticClick() {
    setArithmeticVisible((prevState) => !prevState);
  }

  function handleLogicClick() {
    setLogicVisible((prevState) => !prevState);
  }

  function handleBranchingClick() {
    setBranchingVisible((prevState) => !prevState);
  }

  function handleTransferClick() {
    setTransferVisible((prevState) => !prevState);
  }

  function handleShiftClick() {
    setShiftVisible((prevState) => !prevState);
  }
//---------------------------------------------------------
  

  return (
    
  
    <div className="Files">

      <Navbar label="Les fichier" />
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
          <div className="subfiles-arithmetic" onClick={handleArithmeticClick}>
            <SubfilesButton label="Arithmétiques"  />
          </div>
          <div className={`file-arithmetic ${arithmeticVisible ? 'show' : ''}`}>
          <Link to="/code">
          <FileNoDelete label="ADD" codeHexa="azerty" codeMemo="azerty "  />
    </Link>
    <Link to="/code">
    <FileNoDelete label="SUB" codeHexa="azerty" codeMemo="azerty "  />
      </Link>
      <Link to="/code">
      <FileNoDelete label="DIV" codeHexa="azerty" codeMemo="azerty " />
      </Link>
          </div>

          <div className="subfiles-logic" onClick={handleLogicClick}>
            <SubfilesButton label="Logique"  />
          </div>

          <div className={`file-logic ${logicVisible ? 'show' : ''}`}>
          <Link to="/code">
          <FileNoDelete label="ET" codeHexa="azerty" codeMemo="azerty "/>
      </Link>
      <Link to="/code">
      <FileNoDelete label="OU" codeHexa="azerty" codeMemo="azerty " />
    </Link>
    <Link to="/code">
    <FileNoDelete label="NON" codeHexa="azerty" codeMemo="azerty " />
    </Link>
           
          </div>

          <div className="subfiles-branching" onClick={handleBranchingClick}>
            <SubfilesButton label="Branchement"  />
          </div>

          <div className={`file-branching ${branchingVisible ? 'show' : ''}`}>
          <Link to="/code">
          <FileNoDelete label="BCV" codeHexa="azerty" codeMemo="azerty " />
    </Link>
    
    <Link to="/code">
    <FileNoDelete label="LOOP" codeHexa="azerty" codeMemo="azerty " />
    </Link>
         
          </div>

          <div className="subfiles-transfer" onClick={handleTransferClick}>
            <SubfilesButton label="Transfert"  />
          </div>

          <div className={`file-transfer ${transferVisible ? 'show' : ''}`}>
          <Link to="/code">
          <FileNoDelete label="PERMUT" codeHexa="azerty" codeMemo="azerty "  />
    </Link>
          </div>

          <div className="subfiles-shift" onClick={handleShiftClick}>
            <SubfilesButton label="Décalages" />
          </div>

          <div className={`file-shift ${shiftVisible ? 'show' : ''}`}>
          <Link to="/code">
          <FileNoDelete label="SHIFT LEFT" codeHexa="azerty" codeMemo="azerty "  />
    </Link>
    <Link to="/code">
    <FileNoDelete label="SHIFT RIGHT" codeHexa="azerty" codeMemo="azerty " />
    </Link>
          </div>
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
