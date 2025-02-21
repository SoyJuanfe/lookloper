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

import basicaa1 from '../imgg/basicaa1.webp';
import basicaa2 from '../imgg/basicaa2.webp';
import basicaa3 from '../imgg/basicaa3.webp';
import basicaa4 from '../imgg/basicaa4.webp';
import basicaa5 from '../imgg/basicaa5.webp';
import basicaa6 from '../imgg/basicaa6.webp';
import basicaa7 from '../imgg/basicaa7.webp';
import basicaa8 from '../imgg/basicaa8.webp';
import basicaa9 from '../imgg/basicaa9.webp';
import basicaa10 from '../imgg/basicaa10.webp';
import basicaa11 from '../imgg/basicaa11.webp';
import basicaa12 from '../imgg/basicaa12.webp';
import basicaa13 from '../imgg/basicaa13.webp';
import basicaa14 from '../imgg/basicaa14.webp';
import basicaa15 from '../imgg/basicaa15.webp';
import basicaa16 from '../imgg/basicaa16.webp';
import basicaa17 from '../imgg/basicaa17.webp';
import basicaa18 from '../imgg/basicaa18.webp';
import basicaa19 from '../imgg/basicaa19.webp';
import basicaa20 from '../imgg/basicaa20.webp';
import basicaa21 from '../imgg/basicaa21.webp';
import basicaa22 from '../imgg/basicaa22.webp';
import basicaa23 from '../imgg/basicaa23.webp';
import basicaa24 from '../imgg/basicaa24.webp';
import basicaa25 from '../imgg/basicaa25.webp';
import basicaa26 from '../imgg/basicaa26.webp';
import basicaa27 from '../imgg/basicaa27.webp';
import basicaa28 from '../imgg/basicaa28.webp';
import basicaa29 from '../imgg/basicaa29.webp';
import basicaa30 from '../imgg/basicaa30.webp';
import basicaa31 from '../imgg/basicaa31.webp';
import basicaa32 from '../imgg/basicaa32.webp';
import basicaa33 from '../imgg/basicaa33.webp';
import basicaa34 from '../imgg/basicaa34.webp';
import basicaa36 from '../imgg/basicaa36.webp';
import basicaa37 from '../imgg/basicaa37.webp';
import basicaa38 from '../imgg/basicaa38.webp';
import basicaa39 from '../imgg/basicaa39.webp';
import basicaa40 from '../imgg/basicaa40.webp';
import basicaa41 from '../imgg/basicaa41.webp';
import basicaa42 from '../imgg/basicaa42.webp';
import basicaa43 from '../imgg/basicaa43.webp';
import basicaa44 from '../imgg/basicaa44.webp';
import basicaa45 from '../imgg/basicaa45.webp';
import basicaa46 from '../imgg/basicaa46.webp';
import basicaa48 from '../imgg/basicaa48.webp';
import basicaa49 from '../imgg/basicaa49.webp';
import basicaa50 from '../imgg/basicaa50.webp';
import basicaa51 from '../imgg/basicaa51.webp';
import basicaa52 from '../imgg/basicaa52.webp';
import basicaa53 from '../imgg/basicaa53.webp';
import basicaa54 from '../imgg/basicaa54.webp';
import basicaa55 from '../imgg/basicaa55.webp';
import basicaa56 from '../imgg/basicaa56.webp';
import basicaa57 from '../imgg/basicaa57.jpg';
import basicaa58 from '../imgg/basicaa58.jpg';
import basicaa59 from '../imgg/basicaa59.webp';
import basicaa60 from '../imgg/basicaa60.jpg';
import basicaa61 from '../imgg/basicaa61.webp';
import basicaa62 from '../imgg/basicaa62.webp';


const basicas = [
    { img: basica1, espalda: basicaa1, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica2, espalda: basicaa2, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica3, espalda: basicaa3, nombre: "CAMISETA SAND", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica4, espalda: basicaa4, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica5, espalda: basicaa5, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica6, espalda: basicaa6, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica7, espalda: basicaa7, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica8, espalda: basicaa8, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica9, espalda: basicaa9, nombre: "PICKLING CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica10, espalda: basicaa10, nombre: "PICKLING GRIS AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica11, espalda: basicaa11, nombre: "PICKLING VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica12, espalda: basicaa12, nombre: "PICKLING ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica13, espalda: basicaa13, nombre: "PICKLING AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica14, espalda: basicaa14, nombre: "PICKLING GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica15, espalda: basicaa15, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica16, espalda: basicaa16, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica17, espalda: basicaa17, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica18, espalda: basicaa18, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica19, espalda: basicaa19, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica20, espalda: basicaa20, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica21, espalda: basicaa21, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica22, espalda: basicaa22, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica23, espalda: basicaa23, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica24, espalda: basicaa24, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica25, espalda: basicaa25, nombre: "CAMISETA ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica26, espalda: basicaa26, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica27, espalda: basicaa27, nombre: "CAMISETA VERDE CLARO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica28, espalda: basicaa28, nombre: "CAMISETA ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica29, espalda: basicaa29, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica30, espalda: basicaa30, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica31, espalda: basicaa31, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica32, espalda: basicaa32, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica33, espalda: basicaa33, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica34, espalda: basicaa34, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica35, nombre: "CAMISETA CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica36, espalda: basicaa36, nombre: "CAMISETA BLANCO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica37, espalda: basicaa37, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica38, espalda: basicaa38, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica39, espalda: basicaa39, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica40, espalda: basicaa40, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica41, espalda: basicaa41, nombre: "CAMISETA CAFE CLARO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica42, espalda: basicaa42, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica43, espalda: basicaa43, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica44, espalda: basicaa44, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica45, espalda: basicaa45, nombre: "CAMISETA ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica46, espalda: basicaa46, nombre: "CAMISETA AZUL REY", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica47, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica48, espalda: basicaa48, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica49, espalda: basicaa49, nombre: "CAMISETA ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica50, espalda: basicaa50, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica51, espalda: basicaa51, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica52, espalda: basicaa52, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica53, espalda: basicaa53, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica54, espalda: basicaa54, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica55, espalda: basicaa55, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica56, espalda: basicaa56, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica57, espalda: basicaa57, nombre: "CAMISETA GRIS AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica58, espalda: basicaa58, nombre: "CAMISETA CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica59, espalda: basicaa59, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica60, espalda: basicaa60, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica61, espalda: basicaa61, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
    { img: basica62, espalda: basicaa62, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
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
            <img src={selectedCamiseta.espalda}  className="modal-img" />               
            <h2 className="letra-diseño">{selectedCamiseta.nombre}</h2>
            <h3>{selectedCamiseta.precio}</h3> 
            <p className="letra-diseño">{selectedCamiseta.descripcion}</p>                    
          </div>
        </div>
      )} 

    </div>
  );
};

export default Basicas;