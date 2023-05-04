import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';

function GuideInstrShrt() {
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
        <th colSpan="5">Instructions de décalage et rotation</th>
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
        <td>001101</td>
        <td>SHL OP N</td>
        <td rowSpan="2">Décaler les bits du contenu de l'opérande OP,
          <br/>N fois vers la gauche/droite et remplacer les bits
          <br/>décalés par des 0.</td>
        <td rowSpan="2" className='t'>Tous sauf <br/> Immédiat</td>
        <td rowSpan="2" className='t'>R = REG <br/> (MOD = 011) <br/> C = N</td>
      </tr>
      <tr>
        <td>001110</td>
        <td>SHR OP N</td>
      </tr>
      <tr>
        <td>001111</td>
        <td >ROL OP N</td>
        <td rowSpan="2">Une rotation des bits du contenu de l'opérande OP,
          <br/>N fois vers la gauche/droite.</td>
        <td rowSpan="2" className='t'>Tous sauf <br/> Immédiat</td>
        <td rowSpan="2" className='t'>R = REG <br/> (MOD = 011) <br/> C = N</td>
      </tr>
      <tr>
        <td>010000</td>
        <td>ROR OP N</td>
      </tr>
    </tbody>
  </table>
 );
}


export default GuideInstrShrt;