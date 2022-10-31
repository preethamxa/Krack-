import React from "react";
import App_download from "../../../img/home/Appdownload/App-coming-soon.png";
import App_download_mobile from "../../../img/home/Appdownload/App-coming-soon-mobile.png";
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function HomeCarousel() {
  const desktopImgs = [
    {
      url: App_download,
    },
  ];
  const mobileImgs = [
    {
      url: App_download_mobile,
    },
  ];
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("xs"));
  const tabView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <SimpleImageSlider width="100%" height={mobileView ? 500 : 700} images={tabView ? mobileImgs : desktopImgs}  />
    </div>
  );
}
