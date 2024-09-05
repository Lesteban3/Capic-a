import React from 'react';

function Input({ valor, actualizarValor }) {
  return (
    <input
      type="text"
      value={valor}
      onChange={(e) => actualizarValor(e.target.value)}
      placeholder="Escribe un texto"
    />
  );
}

export default Input;
