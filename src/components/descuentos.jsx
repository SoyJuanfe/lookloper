import { Link } from 'react-router-dom';

const Descuentos = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Descuentos</h1>
      <p>Aun no hay descuentos disponibles</p>
      <p>Aquí encontrarás nuestras ofertas y descuentos exclusivos.</p>
      
      {/* Botón para volver al inicio */}
      <Link to="/">
        <button style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
};

export default Descuentos;
