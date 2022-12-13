import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} className="text-decoration-none text-dark">
      <div className="card">
        <img
          src={item.imagen}
          className="card-img-top img-fluid"
          alt={item.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p>
            <b>{item.precio} U$S Million</b>
          </p>
          <p>Stock: {item.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
