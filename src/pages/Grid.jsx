import React from "react";
import '../css/opcion.css'
import Card from "../components/Tarjeta";
import NavbarIndex from "../components/NavBar";
import { Link, Outlet } from "react-router-dom";

export default function Grid(){

    return(
    <>
    <NavbarIndex />

<br /><br />
    <div className="container text-center">

        <div className="info">
                <h1>Bienvenido a la página de soporte de Transportame.click</h1>
                <span>
                    <a href="/">A continuacion selecciona el modulo en el cual tengas dudas:</a>
                </span>
        </div>

        <div className="menu">   
              
            
            <Card name="Tarifas y costos" to="/Tarifas"/>
            <Card name="Disponibilidad de taxis" to="/Disponibilidad" />
            <Card name="Problemas con pagos" to="/ProblemasPago" />         
            
        </div>
    </div>

    
 
    <footer className="text-center text-white" 
    style={{"backgroundColor": "#000000", 
      "marginTop": "12rem",
      }}>
      
      <div className="container p-5 pb-5">
        
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>
      
      </div>
      
  
      
      <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)",}}>
        © 2020 Copyright:
        <a className="text-white">MDBootstrap.com</a>
      </div>
      
    </footer>

    
  

    </>
  )
}

