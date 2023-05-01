import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';

function GuideInstrDtrs() {
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
        <th colSpan="5">Instructions de transfert de données</th>
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
        <td>010100</td>
        <td>MOV REG OP</td>
        <td>Transférer le contenu de l'opérande OP vers
            <br/>le registre.</td>
        <td className='t'>Tous</td>
        <td className='t'>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
      </tr>
      <tr>
        <td>010101</td>
        <td>CHM OP</td>
        <td>Le contenu de l'accumulateur est écrasé
            <br/>par le contenu de l'opérande OP.</td>
        <td className='t'>Tous sauf <br/> Registre</td>
        <td className='t'>R = ACC</td>
      </tr>
      <tr>
        <td>010110</td>
        <td>RGM ADR</td>
        <td>Le contenu de l'accumulateur est rangé
            <br/>dans l'adresse ADR.</td>
        <td className='t'>Direct</td>
        <td className='t'>R = ACC</td>
      </tr>
      <tr>
        <td>010111</td>
        <td>PUSH REG</td>
        <td>Empiler le contenu du registre au sommet
            <br/>de la pile.</td>
        <td className='t'>Registre</td>
        <td className='t'>R = REG</td>
      </tr>
      <tr>
        <td>011000</td>
        <td>POP REG</td>
        <td>Dépiler le mot présent au sommet de la
            <br/>pile et le mettre dans le registre.</td>
        <td className='t'>Registre</td>
        <td className='t'>R = REG</td>
      </tr>
    </tbody>
  </table>
 );
}


export default GuideInstrDtrs;