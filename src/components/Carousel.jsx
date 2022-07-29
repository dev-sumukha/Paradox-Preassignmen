import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/img1.jpg" className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src="./images/img2.jpg" className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src="./images/img3.jpg" className="d-block w-100" alt="img3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
