import React, { useState }  from "react";
import { Link } from 'react-router-dom';

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


import overr1 from '../imgg/over1.1.webp';
import overr2 from '../imgg/over2.2.webp';
import overr3 from '../imgg/over3.3.webp';
import overr4 from '../imgg/over4.4.webp';
import overr5 from '../imgg/over5.5.webp';
import overr6 from '../imgg/over6.6.webp';
import overr7 from '../imgg/over7.7.webp';
import overr8 from '../imgg/over8.8.webp';
import overr9 from '../imgg/over9.9.webp';
import overr10 from '../imgg/over10.10.webp';
import overr11 from '../imgg/over11.11.webp';
import overr12 from '../imgg/over12.12.webp';
import overr13 from '../imgg/over13.13.webp';
import overr14 from '../imgg/over14.14.webp';
import overr15 from '../imgg/over15.15.webp';
import overr16 from '../imgg/over16.16.webp';
import overr17 from '../imgg/over17.17.webp';
import overr18 from '../imgg/over18.18.webp';
import overr19 from '../imgg/over19.19.webp';
import overr20 from '../imgg/over20.20.webp';
import overr21 from '../imgg/over21.21.webp';
import overr22 from '../imgg/over22.22.webp';
import overr23 from '../imgg/over23.23.webp';
import overr24 from '../imgg/over24.24.webp';
import overr25 from '../imgg/over25.25.webp';
import overr26 from '../imgg/over26.26.webp';
import overr27 from '../imgg/over27.27.webp';
import overr28 from '../imgg/over28.28.webp';
import overr29 from '../imgg/over29.29.webp';
import overr30 from '../imgg/over30.30.webp';
import overr31 from '../imgg/over31.31.webp';
import overr32 from '../imgg/over32.32.webp';
import overr33 from '../imgg/over33.33.webp';
import overr34 from '../imgg/over34.34.webp';
import overr35 from '../imgg/over35.35.webp';
import overr36 from '../imgg/over36.36.webp';
import overr37 from '../imgg/over37.37.webp';
import overr38 from '../imgg/over38.38.webp';
import overr39 from '../imgg/over39.39.webp';
import overr40 from '../imgg/over40.40.webp';
import overr41 from '../imgg/over41.41.webp';
import overr42 from '../imgg/over42.42.webp';
import overr43 from '../imgg/over43.43.webp';
import overr44 from '../imgg/over44.44.webp';
import overr45 from '../imgg/over45.45.webp';
import overr46 from '../imgg/over46.46.webp';
import overr47 from '../imgg/over47.47.webp';
import overr48 from '../imgg/over48.48.webp';
import overr49 from '../imgg/over49.49.webp';
import overr50 from '../imgg/over50.50.webp';
import overr51 from '../imgg/over51.51.webp';
import overr52 from '../imgg/over52.52.webp';
import overr53 from '../imgg/over53.53.webp';
import overr54 from '../imgg/over54.54.webp';
import overr55 from '../imgg/over55.55.webp';
import overr56 from '../imgg/over56.56.webp';
import overr57 from '../imgg/over57.57.webp';
import overr58 from '../imgg/over58.58.webp';
import overr59 from '../imgg/over59.59.webp';
import overr60 from '../imgg/over60.60.webp';
import overr61 from '../imgg/over61.61.webp';
import overr62 from '../imgg/over62.62.webp';
import overr63 from '../imgg/over63.63.webp';
import overr64 from '../imgg/over64.64.webp';
import overr65 from '../imgg/over65.65.webp';
import overr66 from '../imgg/over66.66.webp';
import overr67 from '../imgg/over67.67.webp';
import overr68 from '../imgg/over68.68.webp';
import overr69 from '../imgg/over69.69.webp';
import overr70 from '../imgg/over70.70.jpg';
import overr71 from '../imgg/over71.71.webp';
import overr72 from '../imgg/over72.72.webp';
import overr73 from '../imgg/over73.73.webp';
import overr74 from '../imgg/over74.74.webp';
import overr75 from '../imgg/over75.75.webp';
import overr76 from '../imgg/over76.76.webp';
import overr77 from '../imgg/over77.77.webp';
import overr78 from '../imgg/over78.78.webp';
import overr79 from '../imgg/over79.79.webp';
import overr80 from '../imgg/over80.80.webp';
import overr81 from '../imgg/over81.81.webp';
import overr82 from '../imgg/over82.82.webp';
import overr83 from '../imgg/over83.83.webp';
import overr84 from '../imgg/over84.84.webp';
import overr85 from '../imgg/over85.85.webp';
import overr86 from '../imgg/over86.86.webp';
import overr87 from '../imgg/over87.87.webp';
import overr88 from '../imgg/over88.88.webp';
import overr89 from '../imgg/over89.89.webp';
import overr90 from '../imgg/over90.90.webp';
import overr91 from '../imgg/over91.91.webp';
import overr92 from '../imgg/over92.92.webp';
import overr93 from '../imgg/over93.93.webp';


// Lista de camisetas con precios diferentes
const oversize = [
  { img: over1, espalda: overr1, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over2, espalda: overr2, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over3, espalda: overr3, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over4, espalda: overr4, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over5, espalda: overr5, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over6, espalda: overr6, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over7, espalda: overr7, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over8, espalda: overr8, nombre: "CAMISETA CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over9, espalda: overr9, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over10, espalda: overr10, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over11, espalda: overr11, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over12, espalda: overr12, nombre: "CAMISETA KAKHI", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over13, espalda: overr13, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over14, espalda: overr14, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over15, espalda: overr15, nombre: "CAMISETA BLANCO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over16, espalda: overr16, nombre: "CAMISETA VERDE CLARO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over17, espalda: overr17, nombre: "CAMISETA ARENA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over18, espalda: overr18, nombre: "CAMISETA BLANCO", precio: "$100.000" },
  { img: over19, espalda: overr19, nombre: "CAMISETA MORADO PICLKLING", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over20, espalda: overr20, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over21, espalda: overr21, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over22, espalda: overr22, nombre: "CAMISETA PICKLING KAKHI", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over23, espalda: overr23, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over24, espalda: overr24, nombre: "CAMISETA PICKLING AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over25, espalda: overr25, nombre: "CAMISETA ROSA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over26, espalda: overr26, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over27, espalda: overr27, nombre: "CAMISETA GRIS OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over28, espalda: overr28, nombre: "CAMISETA GRIS", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over29, espalda: overr29, nombre: "CAMISETA AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over30, espalda: overr30, nombre: "CAMISETA SAND", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over31, espalda: overr31, nombre: "CAMISETA CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over32, espalda: overr32, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over33, espalda: overr33, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over34, espalda: overr34, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over35, espalda: overr35, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over36, espalda: overr36, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over37, espalda: overr37, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over38, espalda: overr38, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over39, espalda: overr39, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over40, espalda: overr40, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over41, espalda: overr41, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over42, espalda: overr42, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over43, espalda: overr43, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over44, espalda: overr44, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over45, espalda: overr45, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over46, espalda: overr46, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over47, espalda: overr47, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over48, espalda: overr48, nombre: "CAMISETA NAZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over49, espalda: overr49, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over50, espalda: overr50, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over51, espalda: overr51, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over52, espalda: overr52, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over53, espalda: overr53, nombre: "CAMISETA BEIGE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over54, espalda: overr54, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over55, espalda: overr55, nombre: "CAMISETA CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over56, espalda: overr56, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over57, espalda: overr57, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over58, espalda: overr58, nombre: "CAMISETA CAFE GRISÁCEO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over59, espalda: overr59, nombre: "CAMISETA AZUL GRISÁCEO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over60, espalda: overr60, nombre: "CAMISETA PICKLING CAFE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over61, espalda: overr61, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over62, espalda: overr62, nombre: "CAMISETA BLANCO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over63, espalda: overr63, nombre: "CAMISETA BLANCO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over64, espalda: overr64, nombre: "CAMISETA BEIGE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over65, espalda: overr65, nombre: "CAMISETA SAND", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over66, espalda: overr66, nombre: "CAMISETA VERDE MENTA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over67, espalda: overr67, nombre: "CAMISETA VERDE OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over68, espalda: overr68, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over69, espalda: overr69, nombre: "CAMISETA BLANCA", precio: "$100.000" },
  { img: over70, espalda: overr70, nombre: "CAMISETA PICKLING BROWN", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over71, espalda: overr71, nombre: "CAMISETA PICKLING AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over72, espalda: overr72, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over73, espalda: overr73, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over74, espalda: overr74, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over75, espalda: overr75, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over76, espalda: overr76, nombre: "CAMISETA ROJA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over77, espalda: overr77, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over78, espalda: overr78, nombre: "CAMISETA VERDE", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over79, espalda: overr79, nombre: "CAMISETA APRICOT", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over80, espalda: overr80, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over81, espalda: overr81, nombre: "CAMISETA PICKLING GRISÁCEO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over82, espalda: overr82, nombre: "CAMISETA APRICOT", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over83, espalda: overr83, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over84, espalda: overr84, nombre: "CAMISETA AZUL OSCURO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over85, espalda: overr85, nombre: "CAMISETA AZUL", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over86, espalda: overr86, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over87, espalda: overr87, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over88, espalda: overr88, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over89, espalda: overr89, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over90, espalda: overr90, nombre: "CAMISETA NEGRA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over91, espalda: overr91, nombre: "CAMISETA BLANCA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over92, espalda: overr92, nombre: "CAMISETA CREMA", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." },
  { img: over93, espalda: overr93, nombre: "CAMISETA VERDE GRISÁCEO", precio: "$100.000", descripcion: "Diseño único y tela de alta calidad." }
];

// Función para dividir camisetas en filas de 4
const dividirEnFilas = (array, tamañoFila) => {
  return array.reduce((acc, _, i) => {
    if (i % tamañoFila === 0) acc.push(array.slice(i, i + tamañoFila));
    return acc;
  }, []);
};

const Oversize = () => {
  const filasDeOversize = dividirEnFilas(oversize, 4); // Dividir en filas de 4
  const [selectedCamiseta, setSelectedCamiseta] = useState(null);

  return (
    <div>
      <div><h1 className="titulo1">LOOKLEPER</h1></div>

      <div className="raya-negra1">
        <div>
          <Link to="/" className="inic"><h1 className="let1">INICIO</h1></Link>
        </div>
        <div><h1 className="cami-estan">CAMISETAS OVERSIZE</h1></div>
      </div>

      {/* Mostrar las filas dinámicamente */}
      {filasDeOversize.map((fila, index) => (
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
                <Link to="/">
                  <h1 className="let"> VOLVER A INICIO</h1>
                </Link>
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

export default Oversize;