import React from 'react';

export const Card = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">Oportunidad</div>
        <div className="card-body">
          <h5 className="card-title">Nuestro mejor artículo</h5>
          <p className="card-text">
            Este artículo es todo lo que estabas buscando para disfrutar con tu
            familia y amigos
          </p>
          <a href="#" className="btn btn-primary">
            Agregar
          </a>
        </div>
      </div>
    </div>
  );
};
