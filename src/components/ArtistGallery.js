import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function ArtistGallery() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg" // Placeholder image URL
          alt="First slide"
          style={{ height: "320px", borderRadius: "5px", objectFit: "cover" }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.iforher.com/wp-content/uploads/2023/07/Chest-Tattoo-Designs-for-women.jpg" // Placeholder image URL
          alt="First slide"
          style={{ height: "320px", borderRadius: "5px", objectFit: "cover" }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ed/20/f8/ed20f86cb261b71cf4443100767bd8d4.jpg" // Placeholder image URL
          alt="First slide"
          style={{ height: "320px", borderRadius: "5px", objectFit: "cover" }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
