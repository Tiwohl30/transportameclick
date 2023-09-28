import React,{useState} from "react";
import NavbarIndex from "../components/NavBar";


function Pago(){

  const [searchText, setSearchText] = useState(""); // Estado para almacenar el texto de búsqueda

  // Método para actualizar el texto de búsqueda
  const handleSearch = () => {
    // Obtenemos todos los elementos con la clase "accordion-body"
    const accordionItems = document.querySelectorAll(".accordion-body");

    // Iteramos sobre cada elemento y modificamos su contenido
    accordionItems.forEach((item) => {
      const originalText = item.getAttribute("data-original-text");
      const text = originalText.toLowerCase();
      const searchTerm = searchText.toLowerCase();

      // Verificamos si el texto de búsqueda existe en el contenido del acordeón
      if (text.includes(searchTerm)) {
        // Reemplazamos el contenido con el texto resaltado
        item.innerHTML = originalText.replace(
          new RegExp(searchTerm, "gi"),
          (match) => `<mark>${match}</mark>`
        );
      } else {
        // Si no coincide, restauramos el contenido original
        item.innerHTML = originalText;
      }
    });
  };



return(<div>


    {/* barra de navegacion */}
    <NavbarIndex />

    <br /><br /><br /><br />
    <h1 style={{"marginLeft": "60px",}}> Problemas con el pago </h1>
    


    
    <div className="container">
      <br />
      

      {/* Barra de busqueda */}
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

    <h2 className="mt-5">Todos los temas:</h2> <br /><br />



    {/* Elemento acordeon*/}
    <div className="accordion accordion-flush" id="accordionFlushExample">
      

      {/* item de acordeon */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          Mi tarjeta de crédito fue rechazada, ¿qué debo hacer?</h4>
          </button>
        </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body" data-original-text="Te recomiendo verificar que la información de la tarjeta esté ingresada correctamente. Si el problema persiste, ponte en contacto con tu proveedor de tarjeta o intenta con otro método de pago.">
        Te recomiendo verificar que la información de la tarjeta esté ingresada correctamente. Si el problema persiste, ponte en contacto con tu proveedor de tarjeta o intenta con otro método de pago.
        </div>
      </div>
      </div>

       <br /><br />


      {/* item de acordeon */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Qué métodos de pago se aceptan?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body" data-original-text="Aceptamos pagos con tarjeta de crédito y débito, así como pagos en efectivo en algunos casos.">
        Aceptamos pagos con tarjeta de crédito y débito, así como pagos en efectivo en algunos casos.
          </div>
        </div>
      </div>






  <br /><br />

      {/* Item de acorden */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Puedo pagar en efectivo?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body" data-original-text="Sí, en algunos casos puedes pagar en efectivo. Esto estará disponible como opción de pago en la aplicación.">
        Sí, en algunos casos puedes pagar en efectivo. Esto estará disponible como opción de pago en la aplicación.
          </div>
        </div>
      </div>




      </div>
        

    
    </div>
    


    {/* Footer */}
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