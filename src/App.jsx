import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import instagra from './img/instagra.png';
import wasa from './img/whatsapp.png';
import polo from './img/polo.jpg';
import oversize from './img/oversize.jpeg';
import basica from './img/basica.jpeg';
import estampada from './img/estampada.jpeg';

// Importar páginas individuales
import Estampadas from './components/estampadas';
import Oversize from './components/oversize';
import Basicas from './components/basicas';
import Polos from './components/polos';
import Descuentos from './components/descuentos'; // Importar Descuentos

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estampadas" element={<Estampadas />} />
      <Route path="/oversize" element={<Oversize />} />
      <Route path="/basicas" element={<Basicas />} />
      <Route path="/polos" element={<Polos />} />
      <Route path="/descuentos" element={<Descuentos />} /> {/* Nueva ruta */}
    </Routes>
  );
}

const Home = () => {
  return (
    <div className='hol'>
      {/* Encabezado */}
      <h1 className='titulo'>LOOKLEPER</h1>

      {/* Menú de navegación */}
      <nav className='raya-negra'>
        <div className='texto-raya'>
          <Link to="/" className='palabras'><h1>Inicio</h1></Link>
          <Link to="/" className='palabras'><h1>Catálogo</h1></Link>
          <Link to="/descuentos" className='palabras'><h1>Descuentos</h1></Link>
          <Link to="/sobre-nosotros" className='palabras'><h1>Sobre Nosotros</h1></Link>
        </div>
      </nav>

      {/* Sección de productos */}
      <section className='modelos'>
        {[
          { nombre: "CAMISETAS ESTAMPADAS", img: estampada, link: "/estampadas" },
          { nombre: "CAMISETAS OVERSIZE", img: oversize, link: "/oversize" },
          { nombre: "CAMISETAS BÁSICAS", img: basica, link: "/basicas" },
          { nombre: "CAMISAS POLOS", img: polo, link: "/polos" }
        ].map((item, index) => (
          <div className='cuadros' key={index}>
            <Link to={item.link}>
              <h1 className='nombre'>{item.nombre}</h1>
              <img className='image' src={item.img} alt={item.nombre} />
            </Link>
          </div>
        ))}
      </section>

      {/* Pie de página */}
      <footer className="final">
        <h1 className='loo'>LOOKLEPER</h1>

        {/* Redes sociales */}
        <div className="footer-info">
          <h2>Redes Sociales</h2>
          <div className="redes">
            <img className="icono" src={instagra} alt="Instagram" />
            <span>@lookleper</span>
          </div>
          <div className="redes">
            <img className="icono" src={wasa} alt="WhatsApp" />
            <span>+57 320 7421838</span>
          </div>
        </div>

        {/* Contacto */}
        <div className="footer-contacto">
          <h2>Contacto</h2>
          <p>Email: lookleper@gmail.com</p>
          <p>Políticas | Términos y Condiciones</p>
        </div>
      </footer>
    </div>
  );
};
