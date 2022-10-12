import React from "react";
import App_download from "../../../img/home/Appdownload/App-coming-soon.png";
import App_download_mobile from "../../../img/home/Appdownload/App-coming-soon-mobile.png";
import "../style/homepage.css";
const Cta = () => {
   return (
      <>
         <img id="desktop" loading="lazy" src={App_download} class="img-fluid" alt="Responsive image"></img>
         <img id="mobile" loading="lazy" src={App_download_mobile} class="img-fluid" alt="Responsive mobile-image"></img>
         <script>
            
         </script>
      </>
   );
   };

export default Cta