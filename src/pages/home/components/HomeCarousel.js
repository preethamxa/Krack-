import React from "react";
import img1 from "../../../img/home/HomeCarousel/Desktop/img1.png";
import img2 from "../../../img/home/HomeCarousel/Desktop/img2.png";
import img3 from "../../../img/home/HomeCarousel/Desktop/img3.png";
import img4 from "../../../img/home/HomeCarousel/Desktop/img4.png";

import mobImg1 from "../../../img/home/HomeCarousel/Mobile/img1.png";
import mobImg2 from "../../../img/home/HomeCarousel/Mobile/img2.png";
import mobImg3 from "../../../img/home/HomeCarousel/Mobile/img3.png";
import mobImg4 from "../../../img/home/HomeCarousel/Mobile/img4.png";

import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function HomeCarousel() {
  const desktopImgs = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
  ];
  const mobileImgs = [
    {
      url: mobImg1,
    },
    {
      url: mobImg2,
    },
    {
      url: mobImg3,
    },
    {
      url: mobImg4,
    },
  ];
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("xs"));
  const tabView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <SimpleImageSlider width="100%" height={mobileView ? 500 : 700} images={tabView ? mobileImgs : desktopImgs} showBullets={true} showNavs={false} autoPlay={true} loop={true} />
    </div>
  );
}
