import React from "react";
import '../css/opcion.css'
import Card from "../components/Tarjeta";
import { Link } from "react-router-dom";


export default function Grid(){

    return(
    <>
   
    <div className="container text-center">

        <div className="info">
                <h1>Bienvenido a la página de soporte de Transportame.click</h1>
                <span>
                    <a href="/">A continuacion selecciona el modulo en el cual tengas dudas:</a>
                </span>
        </div>

        <div className="menu">   
               
            <a><Card name="Usuarios" /> 
            </a>
            
            <Card name="Viajes y entregas" />
            <Card name="eats" />
            <Card name="Establecimientos y restaurantes" />
            <Card name="Empresas" />
            <Card name="Transporta" />            

        </div>
    </div>

    
 
  <footer className="text-center text-white" 
  style={{"backgroundColor": "#0a4275", 
    "marginTop": "25rem",
    }}>
    
    <div className="container p-4 pb-0">
      
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

