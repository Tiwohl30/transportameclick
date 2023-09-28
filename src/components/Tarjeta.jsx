import React from "react";
import '../../src/css/opcion.css'
import { Link } from "react-router-dom";

function Card({name, to}){

    return(
    <Link to={to} className="menu-item" >
        <i className="fa-solid fa-user" />
        <br />
        <h4>{name}</h4>
    
    </Link>)
}

export default Card;