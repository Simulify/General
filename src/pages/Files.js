import React, { useState } from 'react';
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

  const [fileList, setFileList] = useState([
    { id: 1, label: 'Mon premier programme' },
    { id: 2, label: 'Mon deuxieme programme' },
 
  ]);
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
            <SubfilesButton label="Opérations arithmétiques"  />
          </div>

          <div className={`file-arithmetic ${arithmeticVisible ? 'show' : ''}`}>
          <Link to="/Simulation">
          <File label="ADD" />
    </Link>
    <Link to="/Simulation">
    <File label="SUB" />
      </Link>
      <Link to="/Simulation">
      <File label="DIV" />
      </Link>
           
           
           
          </div>

          <div className="subfiles-logic" onClick={handleLogicClick}>
            <SubfilesButton label="Logique"  />
          </div>

          <div className={`file-logic ${logicVisible ? 'show' : ''}`}>
          <Link to="/Simulation">
          <File label="ET" />
      </Link>
      <Link to="/Simulation">
      <File label="OU" />
    </Link>
    <Link to="/Simulation">
    <File label="NON" />
    </Link>
           
           
        
          </div>

          <div className="subfiles-branching" onClick={handleBranchingClick}>
            <SubfilesButton label="Branchement"  />
          </div>

          <div className={`file-branching ${branchingVisible ? 'show' : ''}`}>
          <Link to="/Simulation">
          <File label="IF" />
    </Link>
    <Link to="/Simulation">
    <File label="ELSE" />
    </Link>
    <Link to="/Simulation">
    <File label="SWITCH" />
    </Link>
        
       
          
          </div>

          <div className="subfiles-transfer" onClick={handleTransferClick}>
            <SubfilesButton label="Transfert"  />
          </div>

          <div className={`file-transfer ${transferVisible ? 'show' : ''}`}>
          <Link to="/Simulation">
          <File label="MOV" />
    </Link>
    <Link to="/Simulation">
    <File label="CALL" />
    </Link>
    <Link to="/Simulation">
    <File label="RET"/>
    </Link>
         
     
      
          </div>

          <div className="subfiles-shift" onClick={handleShiftClick}>
            <SubfilesButton label="Décalages" />
          </div>

          <div className={`file-shift ${shiftVisible ? 'show' : ''}`}>
          <Link to="/Simulation">
          <File label="SHIFT LEFT" />
    </Link>
    <Link to="/Simulation">
    <File label="SHIFT RIGHT" />
    </Link>
        
           
          </div>
        </div>

        <br />

        <div className="second-menu" onClick={handleMyFilesClick}>
      <div className="menu-trigger-mesFichiers">
        <FilesButton label="Mes fichiers" />
      </div>
      <div className={`file-exemple ${myFilesVisible ? 'show' : ''}`}>
        {fileList.length > 0 ? (
          <table>
            <tbody>
              {fileList.map((file) => (
                 <Link to="/Simulation">
                  <tr key={file.id}>
                  <td>
                    <File label={file.label} />
                  </td>
                </tr>
                 </Link>
              
              ))}
            </tbody>
          </table>
        ) : (
          myFilesVisible && (
            <div className='empty'>
              <img className="Loope" src={Loope} alt="Loopeicon" />
            </div>
          )
        )}
      </div>
    </div>
       
     

       
      </div>



      
    </div>
  );
}

export default Files;
