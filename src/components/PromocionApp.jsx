import React from 'react';

const PromocionApp = () => {
  return (
    <div className="container-fluid d-flex flex-column py-5 my-5">
      <div className="d-flex">
        <h1 className="display-1 fw-bold mb-4">Aprovechá la promo</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img src={'/images/app.jpg'} alt="" />
        </div>
        <div className="col-md-9">
          <div className="d-flex flex-column h-100">
            <p className="fs-3 flex-grow-1 py-3">
              Descargá nuestra app y llevate dos misiles AA Sidewinder de
              regalo!
            </p>
            <div className="d-flex gap-3">
              <img
                src={'/images/appstore.png'}
                alt=""
                className="img-fluid app_img_size"
              />
              <img
                src={'/images/googleplay.png'}
                alt=""
                className="img-fluid app_img_size"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocionApp;
