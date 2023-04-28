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
            <th colSpan="4">Instructions arithmétiques</th>
          </tr>
          <tr>
            <th>Instructions</th>
            <th>Explication</th>
            <th>MOD</th>
            <th>Champs R,C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contenu 1</td>
            <td>Contenu 2</td>
            <td>Contenu 3</td>
            <td>Contenu 4</td>
          </tr>
          <tr>
            <td>Contenu 1</td>
            <td>Contenu 2</td>
            <td>Contenu 3</td>
            <td>Contenu 4</td>
          </tr>
          <tr>
            <td>Contenu 1</td>
            <td>Contenu 2</td>
            <td>Contenu 3</td>
            <td>Contenu 4</td>
          </tr>
          <tr>
            <td>Contenu 1</td>
            <td>Contenu 2</td>
            <td>Contenu 3</td>
            <td>Contenu 4</td>
          </tr>
          <tr>
            <td>Contenu 1</td>
            <td>Contenu 2</td>
            <td>Contenu 3</td>
            <td>Contenu 4</td>
          </tr>
        </tbody>
      </table>
    );
}

export default GuideInstrArth;
