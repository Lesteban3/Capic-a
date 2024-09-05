import React from 'react';

function Boton({ manejarAnalisis }) {
  return (
    <button onClick={manejarAnalisis}>
      Analizar
    </button>
  );
}

export default Boton;
