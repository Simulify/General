import React from "react";
import '../pages/Revision.css';
import { Link } from "react-router-dom";

function ButtonRevision({name, page}) {

    return (
        <button className="ButtonRevision" >
             <Link to = {'/${page}'}>
                   {name}
            </Link>
        </button>
    );
}

export default ButtonRevision