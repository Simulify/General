import React from "react";
import "../Simulation.css";
import UcToRi from "./UcToRi";

function UC() {
    return (
        <div class="UC"> 
            <div class="text">
                <p>Unite de</p>
                <p>commande</p>
            </div> 
            <UcToRi/>
        </div>
    );
}

export default UC