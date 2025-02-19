import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import "./Polos.css";
import polo1 from "../img/polo-1.jpeg";
import polo2 from "../img/polo-2.jpeg";
import polo3 from "../img/polo-3.jpeg";
import polo4 from "../img/polo4.jpeg";
import polo5 from "../img/polo5.jpeg";
import polo6 from "../img/polo6.jpeg";
import polo7 from "../img/polo7.jpeg";
import polo8 from "../img/polo8.jpeg";
import polo9 from "../img/polo9.jpeg";
import polo10 from "../img/polo10.jpeg";
import polo11 from "../img/polo11.jpeg";
import polo12 from "../img/polo12.jpeg";
import polo13 from "../img/polo13.jpeg";
import polo14 from "../img/polo14.jpeg";
import polo15 from "../img/polo15.jpeg";
import polo16 from "../img/polo16.jpeg";
import polo17 from "../img/polo17.jpg";
import polo18 from "../img/polo18.jpg";
import polo19 from "../img/polo19.jpg";
import polo20 from "../img/polo20.jpg";
import polo21 from "../img/polo21.jpg";
import polo22 from "../img/polo22.jpg";
import polo23 from "../img/polo23.jpg";
import polo24 from "../img/polo24.jpg";
import polo25 from "../img/polo25.jpg";
import polo26 from "../img/polo26.jpg";
import polo27 from "../img/polo27.jpg";
import polo28 from "../img/polo28.jpg";
import polo29 from "../img/polo29.jpg";
import polo30 from "../img/polo30.webp";
import polo31 from "../img/polo31.jpg";
import polo32 from "../img/polo32.jpg";
import polo33 from "../img/polo33.webp";
import polo34 from "../img/polo34.jpg";
import polo35 from "../img/polo35.webp";
import polo36 from "../img/polo36.jpg";
import polo37 from "../img/polo37.jpg";
import polo38 from "../img/polo38.jpg";
import polo39 from "../img/polo39.webp";
import polo40 from "../img/polo40.jpg";
import polo41 from "../img/polo41.webp";
import polo42 from "../img/polo42.webp";
import polo43 from "../img/polo43.webp";
import polo44 from "../img/polo44.jpg";
import polo45 from "../img/polo45.jpg";
import polo46 from "../img/polo46.jpg";
import polo47 from "../img/polo47.jpg";
import polo48 from "../img/polo48.jpg";

// Lista de camisetas tipo polo con precios diferentes
const polos = [
  { img: polo1, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo2, nombre: "CAMISETA MORADA", precio: "$100.000" },
  { img: polo3, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: polo4, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo5, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: polo6, nombre: "CAMISETA AZUL CLARO", precio: "$100.000" },
  { img: polo7, nombre: "CAMISETA AZUL NAVY", precio: "$100.000" },
  { img: polo8, nombre: "CAMISETA KAKHI", precio: "$100.000" },
  { img: polo9, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: polo10, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
  { img: polo11, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo12, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo13, nombre: "CAMISETA ROJA", precio: "$100.000" },
  { img: polo14, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo15, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: polo16, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo17, nombre: "CAMISETA VERDE GRISÁCEO", precio: "$100.000" },
  { img: polo18, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo19, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo20, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo21, nombre: "CAMISETA KAKHI", precio: "$100.000" },
  { img: polo22, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo23, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo24, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo25, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: polo26, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: polo27, nombre: "CAMISETA VERDE TÉ", precio: "$100.000" },
  { img: polo28, nombre: "CAMISETA GRIS-NEGRO", precio: "$100.000" },
  { img: polo29, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo30, nombre: "CAMISETA FUCSIA", precio: "$100.000" },
  { img: polo31, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: polo32, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: polo33, nombre: "CAMISETA APRICOT", precio: "$100.000" },
  { img: polo34, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo35, nombre: "CAMISETA ROJA", precio: "$100.000" },
  { img: polo36, nombre: "CAMISETA TURQUESA", precio: "$100.000" },
  { img: polo37, nombre: "CAMISETA ROSA", precio: "$100.000" },
  { img: polo38, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo39, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: polo40, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo41, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: polo42, nombre: "CAMISETA BEIGE", precio: "$100.000" },
  { img: polo43, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo44, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: polo45, nombre: "CAMISETA MAGENTA", precio: "$100.000" },
  { img: polo46, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: polo47, nombre: "CAMISETA VERDE OSCURO", precio: "$100.000" },
  { img: polo48, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
];

// Función para dividir polos en filas de 4
const dividirEnFilas = (array, tamañoFila) => {
  return array.reduce((acc, _, i) => {
    if (i % tamañoFila === 0) acc.push(array.slice(i, i + tamañoFila));
    return acc;
  }, []);
};

const Polos = () => {
  const filasDePolos = dividirEnFilas(polos, 4); // Dividir en filas de 4

  return (
    <div>
      <div>
        <h1 className="titulo1">LOOKLEPER</h1>
      </div>

      <div className="raya-negra1">
        <div>
          <Link to="/" className="inic">
            <h1 >INICIO</h1>
          </Link>
        </div>
        <div>
          <h1 className="cami-estan">CAMISETAS POLO</h1>
        </div>
      </div>

      {/* Mostrar las filas dinámicamente */}
      {filasDePolos.map((fila, index) => (
        <div className="orden-camisetas" key={index}>
          {fila.map((polo, subIndex) => (
            <div key={subIndex} className="forma-camisetas">
              <div>
                <img className="ima" src={polo.img} alt={polo.nombre} />
              </div>
              <div>
                <h1 className="nombre-camiseta">{polo.nombre}</h1>
              </div>
              <div>
                <h1 className="precio-camiseta">{polo.precio}</h1>
              </div>
              <div>
                <h1 className="iva">IVA incluido</h1>
              </div>
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
    </div>
    
  );
};

export default Polos;
