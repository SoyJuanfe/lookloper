import React from "react";
import { Link, Routes, Route } from 'react-router-dom'; // Importar Link para la navegación
import over1 from '../img/over1.webp';
import over2 from '../img/over2.webp';
import over3 from '../img/over3.webp';
import over4 from '../img/over4.webp';
import over5 from '../img/over5.webp';
import over6 from '../img/over6.webp';
import over7 from '../img/over7.webp';
import over8 from '../img/over8.webp';
import over9 from '../img/over9.webp';
import over10 from '../img/over10.webp';
import over11 from '../img/over11.webp';
import over12 from '../img/over12.jpg';
import over13 from '../img/over13.webp';
import over14 from '../img/over14.webp';
import over15 from '../img/over15.webp';
import over16 from '../img/over16.webp';
import over17 from '../img/over17.webp';
import over18 from '../img/over18.webp';
import over19 from '../img/over19.webp';
import over20 from '../img/over20.webp';
import over21 from '../img/over21.webp';
import over22 from '../img/over22.webp';
import over23 from '../img/over23.webp';
import over24 from '../img/over24.webp';
import over25 from '../img/over25.webp';
import over26 from '../img/over26.jpg';
import over27 from '../img/over27.webp';
import over28 from '../img/over28.webp';
import over29 from '../img/over29.webp';
import over30 from '../img/over30.webp';
import over31 from '../img/over31.webp';
import over32 from '../img/over32.webp';
import over33 from '../img/over33.webp';
import over34 from '../img/over34.webp';
import over35 from '../img/over35.webp';
import over36 from '../img/over36.webp';
import over37 from '../img/over37.webp';
import over38 from '../img/over38.webp';
import over39 from '../img/over39.webp';
import over40 from '../img/over40.webp';
import over41 from '../img/over41.webp';
import over42 from '../img/over42.webp';
import over43 from '../img/over43.webp';
import over44 from '../img/over44.webp';
import over45 from '../img/over45.webp';
import over46 from '../img/over46.webp';
import over47 from '../img/over47.webp';
import over48 from '../img/over48.webp';
import over49 from '../img/over49.webp';
import over50 from '../img/over50.webp';
import over51 from '../img/over51.webp';
import over52 from '../img/over52.webp';
import over53 from '../img/over53.webp';
import over54 from '../img/over54.webp';
import over55 from '../img/over55.webp';
import over56 from '../img/over56.webp';
import over57 from '../img/over57.webp';
import over58 from '../img/over58.webp';
import over59 from '../img/over59.webp';
import over60 from '../img/over60.webp';
import over61 from '../img/over61.webp';
import over62 from '../img/over62.webp';
import over63 from '../img/over63.webp';
import over64 from '../img/over64.webp';
import over65 from '../img/over65.webp';
import over66 from '../img/over66.webp';
import over67 from '../img/over67.webp';
import over68 from '../img/over68.webp';
import over69 from '../img/over69.webp';
import over70 from '../img/over70.jpg';
import over71 from '../img/over71.webp';
import over72 from '../img/over72.webp';
import over73 from '../img/over73.webp';
import over74 from '../img/over74.webp';
import over75 from '../img/over75.webp';
import over76 from '../img/over76.webp';
import over77 from '../img/over77.webp';
import over78 from '../img/over78.webp';
import over79 from '../img/over79.webp';
import over80 from '../img/over80.webp';
import over81 from '../img/over81.webp';
import over82 from '../img/over82.webp';
import over83 from '../img/over83.webp';
import over84 from '../img/over84.webp';
import over85 from '../img/over85.webp';
import over86 from '../img/over86.webp';
import over87 from '../img/over87.webp';
import over88 from '../img/over88.webp';
import over89 from '../img/over89.webp';
import over90 from '../img/over90.webp';
import over91 from '../img/over91.webp';
import over92 from '../img/over92.webp';
import over93 from '../img/over93.webp';


// Lista de camisetas con precios diferentes
const camisetas = [
  { img: over1, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over2, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over3, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over4, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over5, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over6, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over7, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over8, nombre: "CAMISETA CAFE", precio: "$100.000" },
  { img: over9, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over10, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over11, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over12, nombre: "CAMISETA KAKHI", precio: "$100.000" },
  { img: over13, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over14, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: over15, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: over16, nombre: "CAMISETA VERDE CLARO", precio: "$100.000" },
  { img: over17, nombre: "CAMISETA ARENA", precio: "$100.000" },
  { img: over18, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: over19, nombre: "CAMISETA MORADO PICLKLING", precio: "$100.000" },
  { img: over20, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: over21, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over22, nombre: "CAMISETA PICKLING KAKHI", precio: "$100.000" },
  { img: over23, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over24, nombre: "CAMISETA PICKLING AZUL", precio: "$100.000" },
  { img: over25, nombre: "CAMISETA ROSA", precio: "$100.000" },
  { img: over26, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: over27, nombre: "CAMISETA GRIS OSCURO", precio: "$100.000" },
  { img: over28, nombre: "CAMISETA GRIS", precio: "$100.000" },
  { img: over29, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: over30, nombre: "CAMISETA SAND", precio: "$100.000" },
  { img: over31, nombre: "CAMISETA CAFE", precio: "$100.000" },
  { img: over32, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: over33, nombre: "CAMISETA CREMA", precio: "$100.000" },
  { img: over34, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over35, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over36, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over37, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over38, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over39, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over40, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over41, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over42, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over43, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over44, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over45, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over46, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over47, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over48, nombre: "CAMISETA NAZUL OSCURO", precio: "$100.000" },
  { img: over49, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
  { img: over50, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over51, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over52, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
  { img: over53, nombre: "CAMISETA BEIGE", precio: "$100.000" },
  { img: over54, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over55, nombre: "CAMISETA CAFE", precio: "$100.000" },
  { img: over56, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over57, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over58, nombre: "CAMISETA CAFE GRISÁCEO", precio: "$100.000" },
  { img: over59, nombre: "CAMISETA AZUL GRISÁCEO", precio: "$100.000" },
  { img: over60, nombre: "CAMISETA PICKLING CAFE", precio: "$100.000" },
  { img: over61, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over62, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: over63, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: over64, nombre: "CAMISETA BEIGE", precio: "$100.000" },
  { img: over65, nombre: "CAMISETA SAND", precio: "$100.000" },
  { img: over66, nombre: "CAMISETA VERDE MENTA", precio: "$100.000" },
  { img: over67, nombre: "CAMISETA VERDE OSCURO", precio: "$100.000" },
  { img: over68, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: over69, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over70, nombre: "CAMISETA PICKLING BROWN", precio: "$100.000" },
  { img: over71, nombre: "CAMISETA PICKLING AZUL", precio: "$100.000" },
  { img: over72, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over73, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over74, nombre: "CAMISETA CREMA", precio: "$100.000" },
  { img: over75, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over76, nombre: "CAMISETA ROJA", precio: "$100.000" },
  { img: over77, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over78, nombre: "CAMISETA VERDE", precio: "$100.000" },
  { img: over79, nombre: "CAMISETA APRICOT", precio: "$100.000" },
  { img: over80, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over81, nombre: "CAMISETA PICKLING GRISÁCEO", precio: "$100.000" },
  { img: over82, nombre: "CAMISETA APRICOT", precio: "$100.000" },
  { img: over83, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over84, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000" },
  { img: over85, nombre: "CAMISETA AZUL", precio: "$100.000" },
  { img: over86, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over87, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over88, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over89, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over90, nombre: "CAMISETA NEGRA", precio: "$100.000" },
  { img: over91, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over92, nombre: "CAMISETA CREMA", precio: "$100.000" },
  { img: over93, nombre: "CAMISETA VERDE GRISÁCEO", precio: "$100.000" },
];

// Función para dividir camisetas en filas de 4
const dividirEnFilas = (array, tamañoFila) => {
  return array.reduce((acc, _, i) => {
    if (i % tamañoFila === 0) acc.push(array.slice(i, i + tamañoFila));
    return acc;
  }, []);
};

const Oversize = () => {
  const filasDeCamisetas = dividirEnFilas(camisetas, 4); // Dividir en filas de 4

  return (
    <div>
      <div><h1 className="titulo1">LOOKLEPER</h1></div>

      <div className="raya-negra1">
        <div>
          <Link to="/" className="inic"><h1 >INICIO</h1></Link>
        </div>
        <div><h1 className="cami-estan">CAMISETAS OVERSIZE</h1></div>
      </div>

      {/* Mostrar las filas dinámicamente */}
      {filasDeCamisetas.map((fila, index) => (
        <div className="orden-camisetas" key={index}>
          {fila.map((camiseta, subIndex) => (
            <div key={subIndex} className="forma-camisetas">
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
    </div>
  );
};

export default Oversize;