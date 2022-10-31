import React from "react";
import "../style/mansory.css";
import Guitar from "../../../img/home/HomeMasonry/Engguitar.png";
import Singing from "../../../img/home/HomeMasonry/singing.jpeg";
import Cajon from "../../../img/home/HomeMasonry/Cajon.png";
import Homestudio from "../../../img/home/HomeMasonry/Homestudio.png";
import Podcast from "../../../img/home/HomeMasonry/podcast.png";
import Ukulele from "../../../img/home/HomeMasonry/Ukulele.png";
import Kidpiano from "../../../img/home/HomeMasonry/Piano.png";
import HindiGuitar from "../../../img/home/HomeMasonry/Guitarhindi.png";
import Dance from "../../../img/home/HomeMasonry/Dance.png";
import Reels from "../../../img/home/HomeMasonry/Reels.png";
import Darbuka from "../../../img/home/HomeMasonry/Darbuka.png";
import Monopod from "../../../img/home/HomeMasonry/Monopod.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function HomeMasonry() {
  return (
    <div>
      {" "}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <img src={Guitar} style={{ margin: 2 }} alt="Guitar" />
          <img src={Podcast} style={{ margin: 2 }} alt="Podcast" />
          <img src={Dance} style={{ margin: 2 }} alt="Dance" />
          <img src={Singing} style={{ margin: 2 }} alt="Singing" />
          <img src={Ukulele} style={{ margin: 2 }} alt="Ukulele" />
          <img src={Reels} style={{ margin: 2 }} alt="Reels" />
          <img src={Cajon} style={{ margin: 2 }} alt="Cajon" />
          <img src={Kidpiano} style={{ margin: 2 }} alt="Kidpiano" />
          <img src={Darbuka} style={{ margin: 2 }} alt="Darbuka" />
          <img src={Homestudio} style={{ margin: 2 }} alt="Homestudio" />
          <img src={HindiGuitar} style={{ margin: 2 }} alt="HindiGuitar" />
          <img src={Monopod} style={{ margin: 2 }} alt="Monopod" />
        </Masonry>
      </ResponsiveMasonry>
      <Typography align="center">
        <Link to="/allcourses">See More &gt;&gt;</Link>
      </Typography>
    </div>
  );
}
