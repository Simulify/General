import React, { useState } from 'react';
import '../pages/Files.css';
import SubfilesButton from '../components/SubfilesButton';
import FilesButton from '../components/FilesButton';
import File from '../components/File';
import Navbar from '../components/Navbar';
import Loope from '../Images/No Results@3x.svg';

function Files() {
  const [fileExempleVisible, setFileExempleVisible] = useState(false);
  const [myFilesVisible, setMyFilesVisible] = useState(false);
  const [arithmeticVisible, setArithmeticVisible] = useState(false);
  const [logicVisible, setLogicVisible] = useState(false);
  const [branchingVisible, setBranchingVisible] = useState(false);
  const [transferVisible, setTransferVisible] = useState(false);
  const [shiftVisible, setShiftVisible] = useState(false);

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
        <div className="menu-trigger-exemple">
          <FilesButton
            className="Examplebutton"
            label="Exemples"
            onClick={handleExempleClick}
          />
        </div>
        <div
          className={`Menu-exemples ${fileExempleVisible ? 'show' : ''}`}
        >
          <div className="subfiles-arithmetic">
            <SubfilesButton label="Opérations arithmétiques" onClick={handleArithmeticClick} />
          </div>

          <div className={`file-arithmetic ${arithmeticVisible ? 'show' : ''}`}>
            <File label="ADD" />
            <File label="SUB" />
            <File label="DIV" />
          </div>

          <div className="subfiles-logic">
            <SubfilesButton label="Logique" onClick={handleLogicClick} />
          </div>

          <div className={`file-logic ${logicVisible ? 'show' : ''}`}>
            <File label="ET" />
            <File label="OU" />
            <File label="NON" />
          </div>

          <div className="subfiles-branching">
            <SubfilesButton label="Branchement" onClick={handleBranchingClick} />
          </div>

          <div className={`file-branching ${branchingVisible ? 'show' : ''}`}>
            <File label="IF" />
            <File label="ELSE" />
            <File label="SWITCH" />
          </div>

          <div className="subfiles-transfer">
            <SubfilesButton label="Transfert" onClick={handleTransferClick} />
          </div>

          <div className={`file-transfer ${transferVisible ? 'show' : ''}`}>
            <File label="MOV" />
            <File label="CALL" />
            <File label="RET"/>
          </div>

          <div className="subfiles-shift">
            <SubfilesButton label="Décalages" onClick={handleShiftClick}/>
          </div>

          <div className={`file-shift ${shiftVisible ? 'show' : ''}`}>
            <File label="SHIFT LEFT" />
            <File label="SHIFT RIGHT" />
          </div>
        </div>

        <br />

        <div className="second-menu">
          <div className="menu-trigger-mesFichiers">
            <FilesButton
              label="Mes fichiers"
              onClick={handleMyFilesClick}
            />
          </div>
          <div className={`file-exemple ${myFilesVisible ? 'show' : ''}`}>
            <File label="Mon premier programme" />
            <File label="Mon deuxieme programme" />
            <File label="Mon troisieme programme" />
            <File label="Mon quatrieme programme" />
            <File label="Mon cinqieme programme" />
            <File label="Mon sixieme programme" />
          </div>
         

        </div>
       
        {!fileExempleVisible && !myFilesVisible && (
  <img className="Loope" src={Loope} alt="Loopeicon" />
)}

       
      </div>



      
    </div>
  );
}

export default Files;
