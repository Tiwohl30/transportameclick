import React from "react";
import NavbarIndex from "../components/NavBar";
import BarraBusqueda from "../components/BarraBusqueda";
import Footer from "../components/Footer";

function Tarifas(){

return(<div>


    <NavbarIndex />
    <br /><br /><br /><br />
    <h1 style={{"marginLeft": "60px",}}> Tarifas y costos </h1>
    

    <div className="container">
      <br />

    <BarraBusqueda />

    <h2 className="mt-5">Todos los temas:</h2> <br /><br />

    <div className="accordion accordion-flush" id="accordionFlushExample">
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Cuánto cuesta un viaje desde [origen] a [destino]?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">El costo del viaje dependerá de la distancia entre el origen y el destino, así como de las tarifas vigentes. Puedes verificar el precio estimado en la aplicación antes de confirmar la reserva.</div>
        </div>
      </div>

  <br /><br />

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <h4>¿Cómo se calculan las tarifas?</h4>
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Las tarifas se calculan principalmente en base a la distancia y la duración del viaje. También pueden incluir tarifas adicionales como las de servicio durante horas punta.</div>
      </div>
    </div>

  <br /><br />

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <h4>¿Hay tarifas fijas para ciertas rutas?</h4>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Sí, algunas rutas pueden tener tarifas fijas establecidas. Estas se mostrarán al momento de hacer la reserva.
</div>
    </div>
  </div>
</div>
        

    
    </div>



    <footer className="text-center text-white" 
    style={{"backgroundColor": "#000000", 
      "marginTop": "8rem",
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
    

    </div>)}

export default Tarifas;