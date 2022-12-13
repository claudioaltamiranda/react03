import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);
  const [disp, setDisp] = useState(stock);

  useEffect(() => {
    setDisp(stock);
  }, [stock]);

  const onIncrementarCounter = () => {
    if (counter < disp) {
      setCounter(counter + 1);
    }
  };

  const onDecrementarCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    if (counter <= disp) {
      setDisp(disp - counter);
      setCounter(1);
    }
  };

  return (
    <div className="row">
      <div className="btn-group col-6 pr-1" role="group">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onDecrementarCounter}
        >
          -
        </button>
        <label type="button" className="btn btn-outline-primary">
          {counter}
        </label>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onIncrementarCounter}
        >
          +
        </button>
      </div>
      <div className="col-6">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
