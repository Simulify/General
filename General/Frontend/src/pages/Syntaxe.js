
  import React, { useState } from "react";
  import "./Syntaxe.css";
  import Navbar from '../components/Navbar';
  import { ReactComponent as Point } from '../Images/point.svg';
  import { ReactComponent as Fleche } from '../Images/Dropdown.svg';
  
  const explication = [
    {
      id: 1,
      titre:(
        <div className="p1">Format d'une ligne en code
        </div>), 
      description: (
        <div>
        Dans le cas d'un seul opérande :
        <br />[Etiquette:] Opérateur OP
        <br /><br />Dans le cas de deux opérandes :
        <br />[Etiquette:] Opérateur OP1 OP2 
        <br /><br />Dans le cas d'instruction LOOP/BCV/BCF :
        <br />LOOP Etiquette 
        <br />BCV CDT Étiquette
        </div>)
    },
    {
      id: 2,
      titre: (
        <div className="p2">Les règles
        </div>),
      description: (
        <div>
        Op en mode direct : [ valeur en décimal , binaire avec B a la fin ou en hexa avec H a la fin ].
        <br />Op en mode indirect : *,valeur en décimal , binaire ou en hexa.
        <br />Op en mode basé : [BX ].
        <br />Op en mode indexé : [SI ].
        <br />Op en mode basé indexé : [BX+SI].
        <br /><br />Les opérandes/opérateurs doivent être en majuscule.
        </div>)
    },
    {
      id: 3,
      titre: (
        <div className="p3">Exemple 1
        </div>),
      description: (
        <div><br />
        <br />MOV CX 5
        <br />here: MOV BX CX
        <br />MOV DX [BX]
        <br />LOOP here
        <br />STOP
        </div>) 
    },
    {
      id: 4,
      titre: (
        <div className="p4">Exemple 2
        </div>),
      description: (
        <div><br />
        <br />MOV ACC 2
        <br />ICI: SUB ACC 1
        <br />CMP ACC 0
        <br />BCF 6 ICI
        <br />STOP
        </div>)
    },
    {
      id: 5,
      titre: (
        <div className="p4">Exemple 3
        </div>),
      description:(
        <div>
        MOV ACC 005CH
        <br />RGM [005CH]
        <br />MOV BX *,1CAH
        <br />PUSH ACC
        <br />PUSH BX
        <br />POP ACC
        <br />POP BX
        <br />PUSH ACC
        <br />STOP
        </div>)
    }
  ];
  
  export default function Syntaxe(props) {
    const [reponseVisible, setReponseVisible] = useState(null);
    const handleClickQuestion = (id) => {
      if (reponseVisible === id) {
        // Si la réponse est déjà visible, la masquer
        setReponseVisible(null);
      } else {
        // Sinon, afficher la réponse correspondante
        setReponseVisible(id);
      }
    };
  
   return (
    <div className="Syntaxe">
      <Navbar label="Syntaxe de programmation"  isAuthenticated={props.isAuthenticated}/>
  
      <div className="explication">
       {explication.map(({ id, titre }) => (
        <div
         key={id}
         className={`titre ${reponseVisible === id ? "active" : ""}`}
         onClick={() => handleClickQuestion(id)}>
          <Point className="point"/>
          {titre}
          <Fleche className="fleche"/>
        </div>
       ))}
      </div>
  
      <div className="descriptions">
       {explication.map(({ id, description }) => (
        <div
         key={id}
         className={`description ${reponseVisible === id ? "active" : ""}`}>
          {reponseVisible === id && description}
        </div>
       ))}
      </div>
    </div>
   );
  }