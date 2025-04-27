import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import image1 from "../assets/carousel-image/car1.png";
import image2 from "../assets/carousel-image/car2.jpg";
import image3 from "../assets/carousel-image/car4.png";

const CarouselComponent = () => {
  return <>
    <CCarousel controls indicators fade>
      <CCarouselItem>
        <CImage className="d-block w-100 " style={{ maxHeight: "600px" }} src={image1} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100"  style={{ maxHeight: "600px" }} src={image2} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100"  style={{ maxHeight: "600px" }} src={image3} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
    </>
};


export default CarouselComponent;