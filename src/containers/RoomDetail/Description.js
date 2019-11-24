import React from "react";
import Slider from "react-slick";

const Description = ({ images }) => {
  return (
    <div className="roomdetail__description__description">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
        accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
        viverra maecenas accumsan lacus vel facilisis.
      </span>
      <Slider dots={true} slidesToShow={3}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.image_title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Description;
