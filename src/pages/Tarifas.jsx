import React,{useState} from "react";
import NavbarIndex from "../components/NavBar";


function Tarifas(){

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



return(<div >


    {/* Componente barra de navegacion */}
    <NavbarIndex />

    <br /><br /><br /><br />
    <h1 style={{"marginLeft": "60px",}}> Tarifas y costos </h1>
    

    <div className="container">
      <br />

      
    
          
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


    {/* Contenedor del elemento acordeon */}
    <div className="accordion accordion-flush" id="accordionFlushExample">
      

      {/* item de acorden */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Cuánto cuesta un viaje desde [origen] a [destino]?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body" data-original-text="El costo del viaje dependerá de la distancia entre el origen y el destino, así como de las tarifas vigentes. Puedes verificar el precio estimado en la aplicación antes de confirmar la reserva.">
        El costo del viaje dependerá de la distancia entre el origen y el destino, así como de las tarifas vigentes. Puedes verificar el precio estimado en la aplicación antes de confirmar la reserva.
          </div>
        </div>
      </div>

  <br /><br />



  {/* item de acorden */}

    <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Cómo se calculan las tarifas?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body" data-original-text="Las tarifas se calculan principalmente en base a la distancia y la duración del viaje. También pueden incluir tarifas adicionales como las de servicio durante horas punta.">
          Las tarifas se calculan principalmente en base a la distancia y la duración del viaje. También pueden incluir tarifas adicionales como las de servicio durante horas punta.
          </div>
        </div>
    </div>






  <br /><br />


    {/* item de acorden */}

    <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"><h4>
          ¿Hay tarifas fijas para ciertas rutas?</h4>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body" data-original-text="Sí, algunas rutas pueden tener tarifas fijas establecidas. Estas se mostrarán al momento de hacer la reserva.">
          Sí, algunas rutas pueden tener tarifas fijas establecidas. Estas se mostrarán al momento de hacer la reserva.

          </div>
        </div>
    </div>




</div>
        

    
    </div>
    

  {/* pie de pagina */}

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
        <a className="text-white">transportameclick.com</a>
      </div>
      
    </footer>

    </div>)}

    export default Tarifas;