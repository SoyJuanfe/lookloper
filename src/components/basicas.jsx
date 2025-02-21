import React, { useState }  from "react";
import { Link } from "react-router-dom";

import basica1 from '../img/basica1.jpeg';
import basica2 from '../img/basica2.jpeg';
import basica3 from '../img/basica3.jpeg';
import basica4 from '../img/basica4.jpeg';
import basica5 from '../img/basica5.webp';
import basica6 from '../img/basica6.webp';
import basica7 from '../img/basica7.webp';
import basica8 from '../img/basica8.webp';
import basica9 from '../img/basica9.jpg';
import basica10 from '../img/basica10.jpg';
import basica11 from '../img/basica11.jpg';
import basica12 from '../img/basica12.webp';
import basica13 from '../img/basica13.jpg';
import basica14 from '../img/basica14.jpg';
import basica15 from '../img/basica15.webp';
import basica16 from '../img/basica16.webp';
import basica17 from '../img/basica17.webp';
import basica18 from '../img/basica18.jpg';
import basica19 from '../img/basica19.webp';
import basica20 from '../img/basica20.webp';
import basica21 from '../img/basica21.webp';
import basica22 from '../img/basica22.webp';
import basica23 from '../img/basica23.webp';
import basica24 from '../img/basica24.webp';
import basica25 from '../img/basica25.webp';
import basica26 from '../img/basica26.webp';
import basica27 from '../img/basica27.webp';
import basica28 from '../img/basica28.webp';
import basica29 from '../img/basica29.webp';
import basica30 from '../img/basica30.webp';
import basica31 from '../img/basica31.webp';
import basica32 from '../img/basica32.webp';
import basica33 from '../img/basica33.webp';
import basica34 from '../img/basica34.webp';
import basica35 from '../img/basica35.avif';
import basica36 from '../img/basica36.webp';
import basica37 from '../img/basica37.webp';
import basica38 from '../img/basica38.webp';
import basica39 from '../img/basica39.webp';
import basica40 from '../img/basica40.webp';
import basica41 from '../img/basica41.webp';
import basica42 from '../img/basica42.webp';
import basica43 from '../img/basica43.webp';
import basica44 from '../img/basica44.webp';
import basica45 from '../img/basica45.webp';
import basica46 from '../img/basica46.webp';
import basica47 from '../img/basica47.webp';
import basica48 from '../img/basica48.webp';
import basica49 from '../img/basica49.webp';
import basica50 from '../img/basica50.webp';
import basica51 from '../img/basica51.webp';
import basica52 from '../img/basica52.webp';
import basica53 from '../img/basica53.webp';
import basica54 from '../img/basica54.webp';
import basica55 from '../img/basica55.webp';
import basica56 from '../img/basica56.jpg';
import basica57 from '../img/basica57.jpg';
import basica58 from '../img/basica58.jpg';
import basica59 from '../img/basica59.webp';
import basica60 from '../img/basica60.webp';
import basica61 from '../img/basica61.webp';
import basica62 from '../img/basica62.webp';


const basicas = [
    { img: basica1, nombre: "CAMISETA CREMA", precio: "$100.000" },
    { img: basica2, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica3, nombre: "CAMISETA SAND", precio: "$100.000" },
    { img: basica4, nombre: "CAMISETA VERDE", precio: "$100.000" },
    { img: basica5, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica6, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica7, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica8, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica9, nombre: "PICKLING CAFE", precio: "$100.000" },
    { img: basica10, nombre: "PICKLING GRIS AZUL", precio: "$100.000" },
    { img: basica11, nombre: "PICKLING VERDE", precio: "$100.000" },
    { img: basica12, nombre: "PICKLING ROJA", precio: "$100.000" },
    { img: basica13, nombre: "PICKLING AZUL", precio: "$100.000" },
    { img: basica14, nombre: "PICKLING GRIS", precio: "$100.000" },
    { img: basica15, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
    { img: basica16, nombre: "CAMISETA CREMA", precio: "$100.000" },
    { img: basica17, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica18, nombre: "CAMISETA GRIS", precio: "$100.000" },
    { img: basica19, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
    { img: basica20, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica21, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica22, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica23, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica24, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica25, nombre: "CAMISETA ROJA", precio: "$100.000" },
    { img: basica26, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
    { img: basica27, nombre: "CAMISETA VERDE CLARO", precio: "$100.000" },
    { img: basica28, nombre: "CAMISETA ROJA", precio: "$180.000" },
    { img: basica29, nombre: "CAMISETA GRIS", precio: "$180.000" },
    { img: basica30, nombre: "CAMISETA BLANCA", precio: "$180.000" },
    { img: basica31, nombre: "CAMISETA AZUL OSCURO", precio: "$180.000" },
    { img: basica32, nombre: "CAMISETA AZUL OSCURO", precio: "$180.000" },
    { img: basica33, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica34, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica35, nombre: "CAMISETA CAFE", precio: "$100.000" },
    { img: basica36, nombre: "CAMISETA BLANCO", precio: "$100.000" },
    { img: basica37, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
    { img: basica38, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica39, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica40, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica41, nombre: "CAMISETA CAFE CLARO", precio: "$100.000" },
    { img: basica42, nombre: "CAMISETA CREMA", precio: "$100.000" },
    { img: basica43, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica44, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica45, nombre: "CAMISETA ROJA", precio: "$100.000" },
    { img: basica46, nombre: "CAMISETA AZUL REY", precio: "$100.000" },
    { img: basica47, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica48, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica49, nombre: "CAMISETA ROJA", precio: "$100.000" },
    { img: basica50, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica51, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica52, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica53, nombre: "CAMISETA NEGRA", precio: "$100.000" },
    { img: basica54, nombre: "CAMISETA BLANCA", precio: "$100.000" },
    { img: basica55, nombre: "CAMISETA GRIS", precio: "$100.000" },
    { img: basica56, nombre: "CAMISETA VERDE", precio: "$100.000" },
    { img: basica57, nombre: "CAMISETA GRIS AZUL", precio: "$100.000" },
    { img: basica58, nombre: "CAMISETA CAFE", precio: "$100.000" },
    { img: basica59, nombre: "CAMISETA CREMA", precio: "$100.000" },
    { img: basica60, nombre: "CAMISETA VERDE", precio: "$100.000" },
    { img: basica61, nombre: "CAMISETA CREMA", precio: "$100.000" },
    { img: basica62, nombre: "CAMISETA BLANCA", precio: "$100.000" },
];    

const dividirEnFilas = (array, tamañoFila) => {
  return array.reduce((acc, _, i) => {
    if (i % tamañoFila === 0) acc.push(array.slice(i, i + tamañoFila));
    return acc;
  }, []);
};

const Basicas = () => {
  const filasDeBasicas = dividirEnFilas(basicas, 4); // Dividir en filas de 4
   const [selectedCamiseta, setSelectedCamiseta] = useState(null);
  return (
    <div>
      <div><h1 className="titulo1">LOOKLEPER</h1></div>

      <div className="raya-negra1">
        <div>
          <Link to="/" className="inic"><h1 className="let1">INICIO</h1></Link>
        </div>
        <div><h1 className="cami-estan">CAMISETAS BÁSICAS</h1></div>
      </div>

      {/* Mostrar las filas dinámicamente */}
      {filasDeBasicas.map((fila, index) => (
        <div className="orden-camisetas" key={index}>
          {fila.map((camiseta, subIndex) => (
            <div key={subIndex} className="forma-camisetas" onClick={() => setSelectedCamiseta(camiseta)}>
              <div><img className="ima" src={camiseta.img} alt={camiseta.nombre} /></div>
              <div><h1 className="nombre-camiseta">{camiseta.nombre}</h1></div>
              <div><h1 className="precio-camiseta">{camiseta.precio}</h1></div>
              <div><h1 className="iva">IVA incluido</h1></div>
            </div>
          ))}
        </div>
      ))}
            <div>
                    <div className="inico">
                <Link to="/">
                  <h1 className="let"> VOLVER A INICIO</h1>
                </Link>
              </div>
              </div>

              {selectedCamiseta && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedCamiseta(null)}>&times;</span>
            <img src={selectedCamiseta.img} alt="Frontal" className="modal-img" />  
              
            <h2 className="letra-diseño">{selectedCamiseta.nombre}</h2>
            <h3>{selectedCamiseta.precio}</h3> 
                   
          </div>
        </div>
      )} 

    </div>
  );
};

export default Basicas;