import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide my-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={"https://images.unsplash.com/photo-1526222344609-ca3e80ea3b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Smartphones</h5>
              <p>Buy best selling mobiles at lowest prices!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={"https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Laptops</h5>
              <p>Shop for professional,gaming and student laptops</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={"https://wallpapercave.com/wp/wp4128735.jpg"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bluetooth Speakers</h5>
              <p>Shop for best selling bluetooth devices</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
