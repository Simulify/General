import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';

function GuideInstrArth() {
  return (
    <div className="heroinstr">
      <Navbar label="Guide" />
      <a href="/guide/instructions" className="prev">Retour</a>
      {/* <h2 className='h2'>Instructions arithmétiques</h2> */}
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
            <th>Instructions</th>
            <th>Format</th>
            <th>Explication</th>
            <th>MOD</th>
            <th>Champs R,C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000000 <br/> ADD</td>
            <td className='t2'>ADD REG OP</td>
            <td className='lft'>Additionner le contenu de l'opérande OP avec<br/> le contenu de registre.
                <br/>Un seul opérande : REG = ACC.</td>
            <td>Tous</td>
            <td>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
          </tr>
          <tr>
            <td>000001 <br/> SUB</td>
            <td className='t2'>SUB REG OP</td>
            <td className='lft'>Soustraire le contenu de l'opérande OP  du <br/>contenu de registre.
                <br/>Un seul opérande : REG = ACC.</td>
            <td>Tous</td>
            <td>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
          </tr>
          <tr>
            <td>000010 <br/> INC</td>
            <td className='t2'>INC OP</td>
            <td className='lft'>Incrémenter le contenu du l'opérande OP. <br/>
                Cas Immédiat : le résultat est rangé dans l'ACC.</td>
            <td>Tous</td>
            <td>R = REG <br/> (MOD = 011)</td>
          </tr>
          <tr>
            <td>000011 <br/> DEC</td>
            <td className='t2'>DEC OP</td>
            <td className='lft'>Décrémenter le contenu du l'opérande OP. <br/>
                Cas Immédiat : le résultat est rangé dans l'ACC.</td>
            <td>Tous</td>
            <td>R = REG <br/> (MOD = 011)</td>
          </tr>
          <tr>
            <td>000100 <br/> MUL</td>
            <td className='t2'>MUL REG OP</td>
            <td className='lft'>Multiplier le contenu du l'opérande OP par le<br/> contenu de registre.
                <br/>Un seul opérande : REG = ACC.</td>
            <td>Tous</td>
            <td>R = REG <br/> C = REG2 <br/> (MOD = 011)</td>
          </tr>
        </tbody>
      </table>
    );
}

export default GuideInstrArth;
