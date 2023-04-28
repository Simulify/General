import React from "react";
import FormSettings from "./FormSettings";
import Navbar from "../components/Navbar";

function ModePage() {
    return (
        <div className=" ModePage ">
            <Navbar label='Parametres'/>
            <FormSettings/>
            
        </div>

    );

}
export default ModePage;