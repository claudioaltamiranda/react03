import React, { useEffect, useState } from 'react';
import arrayAviones from '../aviones.json';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id ? arrayAviones.filter((av) => av.categoria === id) : arrayAviones
        );
      }, 2000);
    });
    promesa.then((aviones) => setItems(aviones));
  }, [id]);

  return (
    <div className="container-fluid d-flex flex-column gap-1 px-0">
      <div className="row">
        <Itemlist items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
