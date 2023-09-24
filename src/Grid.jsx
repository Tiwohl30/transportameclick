import React from "react";
import '../src/css/opcion.css'
import Card from "../src/components/Tarjeta";


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
            <Card name="Usuarios" />
            <Card name="Viajes y entregas" />
            <Card name="eats" />
            <Card name="Establecimientos y restaurantes" />
            <Card name="Empresas" />
            <Card name="Transporta" />            

        </div>
    </div>
    </>
  )
}

