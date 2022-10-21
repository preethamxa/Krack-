import React from "react";
import "../style/mansory.css";
import Guitar from "../../../img/home/HomeMasonry/grid1Guitar.png";
import Singing from "../../../img/home/HomeMasonry/singing.png";
import Cajon from "../../../img/home/HomeMasonry/cajon1.png";
import Homestudio from "../../../img/home/HomeMasonry/homestudioo3.png";
import Podcast from "../../../img/home/HomeMasonry/podcast1.png";
import Ukulele from "../../../img/home/HomeMasonry/Ukulele.png";
import Kidpiano from "../../../img/home/HomeMasonry/piano4.png";
import HindiGuitar from "../../../img/home/HomeMasonry/hindiguitar.png";
import Dance from "../../../img/home/HomeMasonry/danceee2.png";
import Reels from "../../../img/home/HomeMasonry/reels4.png";
import Darbuka from "../../../img/home/HomeMasonry/darbuka3.png";
import Monopod from "../../../img/home/HomeMasonry/monopod4.png";
import "bootstrap/dist/css/bootstrap.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
export default function HomeMasonry() {
  return (
    <div>
      {" "}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <img src={Guitar} style={{ margin: 2 }} alt="Guitar"/>
          <img src={Podcast} style={{ margin: 2 }} alt="Podcast"/>
          <img src={Dance} style={{ margin: 2 }} alt="Dance" />
          <img src={Singing} style={{ margin: 2 }} alt="Singing"/>
          <img src={Ukulele} style={{ margin: 2 }} alt="Ukulele"/>
          <img src={Reels} style={{ margin: 2 }} alt="Reels"/>
          <img src={Cajon} style={{ margin: 2 }} alt="Cajon"/>
          <img src={Kidpiano} style={{ margin: 2 }} alt="Kidpiano"/>
          <img src={Darbuka} style={{ margin: 2 }} alt="Darbuka"/>
          <img src={Homestudio} style={{ margin: 2 }} alt="Homestudio"/>
          <img src={HindiGuitar} style={{ margin: 2 }} alt="HindiGuitar"/>
          <img src={Monopod} style={{ margin: 2 }} alt="Monopod"/>
        </Masonry>
      </ResponsiveMasonry>
      <Typography align="center"><Link to="#">See More &gt;&gt;</Link></Typography>
    </div>
  );
}
