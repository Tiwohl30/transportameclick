import React from "react";
import '../../src/css/bar.css'




function BarraBusqueda() {
  

  return (

    <div className="d-flex justify-content-center h-100" id="bar">
        <div className="search">
            <input type="text" className="search-input" placeholder="search..." name="" />
            <a href="#" className="search-icon">
                <i className="fa fa-search"></i>
            </a>
        </div>
    </div>
    
  );
}

export default BarraBusqueda;