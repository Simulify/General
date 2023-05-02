import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';

function GuideInstrArth() {
 return (
  <div className="heroinstr">
    <Navbar label="Guide" />
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
        <th colSpan="5">Instructions arithmétiques</th>
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
        <td>000000</td>
        <td>ADD REG OP</td>
        <td rowSpan="2">Additionner/ Soustraire le contenu de
          <br/>l'opérande OP avec/du contenu de registre.
          <br/><br/>Un seul opérande : REG = ACC.</td>
        <td rowSpan="2" className='t'>Tous</td>
        <td rowSpan="2" className='t'>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>000001</td>
        <td>SUB REG OP</td>
      </tr>
      <tr>
        <td>000010</td>
        <td>INC OP</td>
        <td rowSpan="2">Incrémenter/ Décrémenter le contenu du
          <br/>l'opérande OP.
          <br/><br/>Cas Immédiat : le résultat est rangé dans l'ACC.</td>
        <td rowSpan="2" className='t'>Tous</td>
        <td rowSpan="2" className='t'>R = REG <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>000011</td>
        <td>DEC OP</td>
      </tr>
      <tr>
        <td>000100</td>
        <td>MUL REG OP</td>
        <td>Multiplier le contenu du l'opérande OP par le
          <br/>contenu de registre.
          <br/><br/>Un seul opérande : REG = ACC.</td>
        <td className='t'>Tous</td>
        <td className='t'>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
      </tr>
    </tbody>
  </table>
 );
}


export default GuideInstrArth;