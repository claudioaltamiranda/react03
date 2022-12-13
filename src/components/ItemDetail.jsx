import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="container d-flex flex-column py-3 mb-4 gap-3">
        <h2 className="fs-1 fw-bolder text-dark">{item.nombre}</h2>
        <img
          src={item.imagen}
          alt={'item.nombre'}
          className="img-fluid rounded"
        />
        <p className="fs-4">{item.descripcion}</p>
        <p className="fw-bold fs-2">
          <span>{item.precio}</span>M U$S
        </p>
        <p className="fw-bold fs-3">{item.stock} unidades disponibles</p>
        <ItemCount stock={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
