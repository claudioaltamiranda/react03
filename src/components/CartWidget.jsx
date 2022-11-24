import React from 'react';

export const CartWidget = () => {
  return (
    <a
      type="button"
      className="btn btn-primary position-relative ms-2"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
    >
      Carrito
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4+
        <span className="visually-hidden">artículo en el carrito</span>
      </span>
    </a>
  );
};
