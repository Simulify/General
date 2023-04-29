import React, { useState ,useEffect} from 'react';
import '../pages/Files.css';
import SubfilesButton from '../components/SubfilesButton';
import FilesButton from '../components/FilesButton';
import File from '../components/File';
import Navbar from '../components/Navbar';
import Loope from '../Images/No Results@3x.svg';
import { Link } from "react-router-dom";


function Files() {


  const [fileExempleVisible, setFileExempleVisible] = useState(false);
  const [myFilesVisible, setMyFilesVisible] = useState(false);
  const [arithmeticVisible, setArithmeticVisible] = useState(false);
  const [logicVisible, setLogicVisible] = useState(false);
  const [branchingVisible, setBranchingVisible] = useState(false);
  const [transferVisible, setTransferVisible] = useState(false);
  const [shiftVisible, setShiftVisible] = useState(false);


     //Load the fileList state from localStorage, or use an empty array if it doesn't exist
  const [fileList, setFileList] = useState(
    JSON.parse(localStorage.getItem('fileList')) || []
  );

  // Save the fileList state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fileList', JSON.stringify(fileList));
  }, [fileList]);

  function addFile() {
    const newFile = { id: fileList.length + 1, label: 'Mon nouveau programme' };
    setFileList([...fileList, newFile]);
  }

  function removeFile(id) {
    setFileList(fileList.filter((file) => file.id !== id));
  }


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
 
  

  return (
    
  
    <div className="Files">

      <Navbar label="Les fichiers" />
    
      <button onClick={() => removeFile(1)}>Remove File with ID 3</button>
      <button onClick={addFile}>Add File</button>

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
          <File label="ADD" />
    </Link>
    <Link to="/code">
    <File label="SUB" />
      </Link>
      <Link to="/code">
      <File label="DIV" />
      </Link>
          </div>

          <div className="subfiles-logic" onClick={handleLogicClick}>
            <SubfilesButton label="Logique"  />
          </div>

          <div className={`file-logic ${logicVisible ? 'show' : ''}`}>
          <Link to="/code">
          <File label="ET" />
      </Link>
      <Link to="/code">
      <File label="OU" />
    </Link>
    <Link to="/code">
    <File label="NON" />
    </Link>
           
          </div>

          <div className="subfiles-branching" onClick={handleBranchingClick}>
            <SubfilesButton label="Branchement"  />
          </div>

          <div className={`file-branching ${branchingVisible ? 'show' : ''}`}>
          <Link to="/code">
          <File label="BCV" />
    </Link>
    
    <Link to="/code">
    <File label="LOOP" />
    </Link>
         
          </div>

          <div className="subfiles-transfer" onClick={handleTransferClick}>
            <SubfilesButton label="Transfert"  />
          </div>

          <div className={`file-transfer ${transferVisible ? 'show' : ''}`}>
          <Link to="/code">
          <File label="PERMUT" />
    </Link>
   
    
         
     
      
          </div>

          <div className="subfiles-shift" onClick={handleShiftClick}>
            <SubfilesButton label="Décalages" />
          </div>

          <div className={`file-shift ${shiftVisible ? 'show' : ''}`}>
          <Link to="/code">
          <File label="SHIFT LEFT" />
    </Link>
    <Link to="/code">
    <File label="SHIFT RIGHT" />
    </Link>
        
           
          </div>
        </div>

       

        <div className="second-menu">
  <div className="menu-trigger-mesFichiers"   onClick={handleMyFilesClick} >
    <FilesButton label="Mes fichiers" />
    </div>

<div className={`file-exemple ${myFilesVisible ? 'show' : ''}`}>
  {fileList.length > 0 ? (
    <table>
      <tbody>
        {fileList.map((file) => (
          <tr key={file.id}>
            <td>
              <File
                label={file.label} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
