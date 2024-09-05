
import React, { useState } from 'react';
import Input from './componentes/Input';
import Boton from './componentes/Boton';

function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  
  const esCapicua = (texto) => {
    const textoLimpio = texto.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return textoLimpio === textoLimpio.split('').reverse().join('');
  };

  
  const manejarAnalisis = () => {
    if (esCapicua(texto)) {
      setResultado('El texto es capicúa.');
    } else {
      setResultado('El texto no es capicúa.');
    }
  };

  return (
    <div>
      <h1>Verificador de Capicúa</h1>
      <Input valor={texto} actualizarValor={setTexto} />
      <Boton manejarAnalisis={manejarAnalisis} />
      <p>{resultado}</p>
    </div>
  );
}

export default App;
