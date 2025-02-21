import React, { useState } from "react";
import { Link } from "react-router-dom";

import estampadita from "../img/estampadita.jpeg";
import estampadita1 from "../img/estampadita1.jpeg";
import estampadita2 from "../img/estampadita2.jpeg";
import estampadita3 from "../img/estampadita3.jpeg";
import estampadita4 from "../img/estampadita4.jpeg";
import estampadita5 from "../img/estampadita5.jpeg";
import estampadita6 from "../img/estampadita6.jpeg";
import estampadita7 from "../img/estampadita7.jpeg";
import estampadita8 from "../img/estampadita8.jpeg";
import estampadita9 from "../img/estampadita9.jpeg";
import estampadita10 from "../img/estampadito10.jpeg";
import estampadita11 from "../img/estampadito11.jpeg";
import estampadita12 from "../img/estampadito12.jpeg";
import estampadita13 from "../img/estampadito13.jpeg";
import estampadita14 from "../img/estampadito14.jpeg";
import estampadita15 from "../img/estampadito15.jpeg";
import estampadita16 from "../img/estampadito16.jpeg";
import estampaditaa from "../imgg/estampadita0.0.webp";
import estampaditaa1 from "../imgg/estampadita1.1.webp";
import estampaditaa2 from "../imgg/estampadita2.2.webp";
import estampaditaa3 from "../imgg/estampadita3.3.webp";
import estampaditaa4 from "../imgg/estampadita4.4.webp";
import estampaditaa5 from "../imgg/estampadita5.5.webp";
import estampaditaa6 from "../imgg/estampadita6.6.webp";
import estampaditaa7 from "../imgg/estampadita7.7.webp";
import estampaditaa8 from "../imgg/estampadita8.8.webp";
import estampaditaa9 from "../imgg/estampadita9.9.webp";
import estampaditaa10 from "../imgg/estampadita10.10.webp";
import estampaditaa11 from "../imgg/estampadita11.11.webp";
import estampaditaa12 from "../imgg/estampadita12.12.webp";
import estampaditaa13 from "../imgg/estampadita13.13.webp";
import estampaditaa14 from "../imgg/estampadita14.14.webp";
import estampaditaa15 from "../imgg/estampadita15.15.webp";
import estampaditaa16 from "../imgg/estampadita16.16.webp";

const estampadas = [
  { img: estampadita, espalda: estampaditaa, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita1, espalda: estampaditaa1, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita2, espalda: estampaditaa2, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita3, espalda: estampaditaa3, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita4, espalda: estampaditaa4, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita5, espalda: estampaditaa5, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita6, espalda: estampaditaa6, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita7, espalda: estampaditaa7, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita8, espalda: estampaditaa8, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita9, espalda: estampaditaa9, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita10, espalda: estampaditaa10, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita11, espalda: estampaditaa11, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita12, espalda: estampaditaa12, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita13, espalda: estampaditaa13, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita14, espalda: estampaditaa14, nombre: "CAMISETA PICKLING BROWN", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita15, espalda: estampaditaa15, nombre: "CAMISETA PICKLING BROWN", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: estampadita16, espalda: estampaditaa16, nombre: "CAMISETA GINGER", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." }
];


const dividirEnFilas = (array, tamañoFila) => {
  return array.reduce((acc, _, i) => {
    if (i % tamañoFila === 0) acc.push(array.slice(i, i + tamañoFila));
    return acc;
  }, []);
};

const Estampadas = () => {
  const filasDeEstampadas = dividirEnFilas(estampadas, 4);
  const [selectedCamiseta, setSelectedCamiseta] = useState(null);

  return (
    <div>
      <h1 className="titulo1">LOOKLEPER</h1>
      <div className="raya-negra1">
        <Link to="/" className="inic"><h1 className="let1">INICIO</h1></Link>
        <h1 className="cami-estan">CAMISETAS ESTAMPADAS</h1>
      </div>

      {filasDeEstampadas.map((fila, index) => (
        <div className="orden-camisetas" key={index}>
          {fila.map((camiseta, subIndex) => (
            <div key={subIndex} className="forma-camisetas" onClick={() => setSelectedCamiseta(camiseta)}>
              <img className="ima" src={camiseta.img} alt={camiseta.nombre} />
              <h1 className="nombre-camiseta">{camiseta.nombre}</h1>
              <h1 className="precio-camiseta">{camiseta.precio}</h1>
              <h1 className="iva">IVA incluido</h1>
            </div>
          ))}
        </div>
      ))}

      <div className="inico">
        <Link to="/"><h1 className="let">VOLVER A INICIO</h1></Link>
      </div>
      
      {selectedCamiseta && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedCamiseta(null)}>&times;</span>
            <img src={selectedCamiseta.img} alt="Frontal" className="modal-img" />
            <img src={selectedCamiseta.espalda} alt="Espalda" className="modal-img" />
            <h2 className="letra-diseño">{selectedCamiseta.nombre}</h2>
            <h3>{selectedCamiseta.precio}</h3>
            <p className="letra-diseño">{selectedCamiseta.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estampadas;
