import React from "react";
import img1 from "../../../img/home/HomeCarousel/img1.png";
import img2 from "../../../img/home/HomeCarousel/img2.png";
import SimpleImageSlider from "react-simple-image-slider";

export default function HomeCarousel() {
  const images = [
    {
      url: img1,
    },
    {
      url: img2,
    },
  ];

  return (
    <div>
      <div>
        <SimpleImageSlider width="100%" height={700} images={images} showBullets={true} showNavs={true} autoPlay={true} loop={true} />
      </div>
    </div>
  );
}
