import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';

function GuideInstrInout() {
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
            <th colSpan="5">Instructions d'entrée/sortie et arrêt de programme</th>
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
            <td>011001</td>
            <td >ENT</td>
            <td >Lecture d'une donnée à partir du clavier,<br/> elle est stockée dans l'accumulateur.
            </td>
            <td rowSpan="3" className='t'>Aucun</td>
            <td rowSpan="3" className='t'>Aucun</td>
          </tr>
          <tr>
            <td>011010</td>
            <td >SOR</td>
            <td >Affiché le contenu de l'accumulateur.</td>
          </tr>
          <tr>
            <td>011011</td>
            <td >STOP</td>
            <td >Provoque l'arrêt de programme en train d'exécuter.</td>
          </tr>
        </tbody>
      </table>
    );
}

export default GuideInstrInout;
