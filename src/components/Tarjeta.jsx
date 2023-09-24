import React from "react";
import Button from '@mui/material/Button';
import '../../src/css/opcion.css'

function Card({name}){

    return(
    <div className="menu-item">
        <i className="fa-solid fa-user" />
        <br />
        <h4>{name}</h4>
    
    </div>)
}

export default Card;