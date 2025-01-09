import React, { useState } from 'react';
import '../estilos/form.css';

export const Form = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [metodoPago, setMetodoPago] = useState('tarjeta');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    console.log('Datos enviados:', { nombre, direccion, email, metodoPago });
    alert('¡Gracias por tu compra!');
  };

  return (
    <div>
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Método de pago:</label>
          <select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
          >
            <option value="tarjeta">Tarjeta de crédito/débito</option>
            <option value="paypal">PayPal</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>
        </div>

        <button type="submit">Finalizar pago</button>
      </form>
    </div>
  );
};
