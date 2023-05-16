import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';

function GuideInstrLog(props) {
  return (
    <div className="heroinstr">
      <Navbar label="Guide" isAuthenticated={props.isAuthenticated}/>
      <a href="/guide/instructions" className="prev">Retour</a>
      <Table/>
    </div>
  );
}

function Table() {
 return (
  <table>
    <thead>
      <tr>
        <th colSpan="5">Instructions logiques</th>
      </tr>
      <tr>
        <th>Code</th>
        <th>Format</th>
        <th>Explication</th>
        <th>MOD</th>
        <th>Champs R,C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>000101</td>
        <td>NOT OP</td>
        <td>Le NON logique du contenu de l'opérande OP.
          <br/><br/>Cas Immédiat : le résultat est rangé dans l'ACC.</td>
        <td className='t'>Tous</td>
        <td className='t'>R = REG <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>000110</td>
        <td>AND REG OP</td>
        <td rowSpan="5" className='lft'>Le ET/OU, NON ET/OU, OU exclusif logique entre
          <br/>le contenu de l'opérande OP et le contenu de
          <br/>registre.
          <br/><br/>Un seul opérande : REG = ACC.</td>
          <td rowSpan="5" className='t'>Tous</td>
        <td rowSpan="5" className='t'>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>000111</td>
        <td>OR REG OP</td>
      </tr>
      <tr>
        <td>001000</td>
        <td>NAND REG OP</td>
      </tr>
      <tr>
        <td>001001</td>
        <td>NOR REG OP</td>
      </tr>
      <tr>
        <td>001010</td>
        <td>XOR REG OP</td>
      </tr>
      <tr>
        <td>001011</td>
        <td>CMP REG OP</td>
        <td>La comparaison logique entre le contenu de
          <br/>l'opérande OP et le contenu de registre, pour
          <br/>positionner le registre flags.</td>
        <td className='t'>Tous</td>
        <td className='t'>R = REG <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>001100</td>
        <td>RAZ REG</td>
        <td>Le contenu de registre est écrasé par la valeur 0.</td>
        <td className='t'>Tous</td>
        <td className='t'>R = REG</td>
      </tr>
    </tbody>
  </table>
 );
}


export default GuideInstrLog;