import React from 'react';

const CartWidget = () => {
  return (
    <div
      type="button"
      className="btn btn-primary position-relative ms-2"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
    >
      <ion-icon name="cart-outline"></ion-icon>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3+
        <span className="visually-hidden">artículo en el carrito</span>
      </span>
    </div>
  );
};

export default CartWidget;
