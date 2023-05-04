import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';

function GuideInstrBrch() {
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
        <th colSpan="5">Instructions de branchement</th>
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
        <td>010001</td>
        <td>LOOP ETIQ</td>
        <td>(Boucle Pour), Décrémenter CX après chaque
          <br/>itération, et vérifier son contenu.
          <br/>Si CX ≠ 0 : reboucler (brancher vers l'adresse de
          <br/>l'étiquette ETIQ).
          <br/>Sinon (CX = 0) : passer à l'instruction suivante.</td>
        <td className='t'>Direct</td>
        <td className='t'>R = CX</td>
      </tr>
      <tr>
        <td>010010</td>
        <td>BCV CDT ETIQ</td>
        <td rowSpan="2">Vérifier la condition CDT dans le registre flags,
            <br/>et brancher vers l'adresse de l'étiquette ETIQ, si :
            <br/><br/>BCV : CDT est vérifiée.
            <br/>BCF : CDT n'est pas vérifiée.
            <br/><br/>CDT = 0 : branchement inconditionnelle.</td>
        <td rowSpan="2" className='t'>Direct</td>
        <td rowSpan="2" className='t'>C = CDT</td>
      </tr>
      <tr>
        <td>010011</td>
        <td>BCF CDT ETIQ</td>
      </tr>
    </tbody>
  </table>
 );
}


export default GuideInstrBrch;