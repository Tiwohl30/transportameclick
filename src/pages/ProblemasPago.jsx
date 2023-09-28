import React from "react";
import NavbarIndex from "../components/NavBar";
import BarraBusqueda from "../components/BarraBusqueda";


function Pago(){

return(<div>


    <NavbarIndex />
    <br /><br /><br /><br />
    <h1 style={{"marginLeft": "60px",}}> Problemas con el pago </h1>
    

    <div className="container">
      <br />

    <BarraBusqueda />

    <h2 className="mt-5">Todos los temas:</h2> <br /><br />

    <div className="accordion accordion-flush" id="accordionFlushExample">
      
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          Mi tarjeta de crédito fue rechazada, ¿Qué debo hacer?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Te recomiendo verificar que la información de la tarjeta esté ingresada correctamente. Si el problema persiste, ponte en contacto con tu proveedor de tarjeta o intenta con otro método de pago.</div>
        </div>
      </div>

  <br /><br />

    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <h4>¿Qué métodos de pago se aceptan?</h4>
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Aceptamos pagos con tarjeta de crédito y débito, así como pagos en efectivo en algunos casos.</div>
      </div>
    </div>

  <br /><br />

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <h4>¿Puedo pagar en efectivo?</h4>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Sí, en algunos casos puedes pagar en efectivo. Esto estará disponible como opción de pago en la aplicación.
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

export default Pago;