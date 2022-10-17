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
export default function Masonry() {
  return (
    <div class="row">
      <div class="column">
        <img src={Guitar} />
        <img src={Singing} />
        <img src={Cajon} />
        <img src={Homestudio} />
      </div>
      <div class="column">
        <img src={Podcast} />
        <img src={Ukulele} />
        <img src={Kidpiano} />
        <img src={HindiGuitar} />
      </div>
      <div class="column">
        <img src={Dance} />
        <img src={Reels} />
        <img src={Darbuka} />
        <img src={Monopod} />
      </div>
    </div>
  );
}
