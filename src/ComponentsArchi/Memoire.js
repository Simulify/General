import React from "react";
import CaseMemoire from "./CaseMemoire";
import "../Simulation.css";

function Memoire() {
  const casesData = [];

  // Boucle pour générer les données de chaque case
  for (let i = 0; i < 6885; i++) {
    casesData.push({ case1: "0", case2: "0", case3: "0", case4: "0" });
  }

  // Boucle pour générer les composants CaseMemoire avec les données générées
  const casesMemoire = casesData.map((data, index) => (
    <CaseMemoire
      key={index}
      case1={data.case1}
      case2={data.case2}
      case3={data.case3}
      case4={data.case4}
    />
  ));

  return <div className="Memoire"> {casesMemoire}</div>;
}

export default Memoire;
