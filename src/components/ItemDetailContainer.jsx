import React, { useEffect, useState } from 'react';
import arrayAviones from '../aviones.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayAviones.find((it) => it.id == parseInt(id)));
      }, 2000);
    }).then((data) => setItem(data));
  }, []);

  return (
    <div className="container-fluid d-flex flex-column gap-1 px-0">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
