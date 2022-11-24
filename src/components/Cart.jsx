import React from 'react';

export const Cart = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Tus artículos
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p>Acá irían los items seleccionados</p>
      </div>
    </div>
  );
};
