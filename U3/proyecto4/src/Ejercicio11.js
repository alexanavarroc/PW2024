import React, { useState } from 'react';

export default function Ejercicio11() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={() => restar() }> -  </button>
      <span>{count}</span>
      
      <button onClick={() => sumar() }> +  </button>
      {/* <button onClick={() => setCount(count + 1)}> */}
    </div>
  );
}