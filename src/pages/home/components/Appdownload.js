import React from "react";
import App_download from "../../../img/home/Appdownload/App-coming-soon.png";
import App_download_mobile from "../../../img/home/Appdownload/App-coming-soon-mobile.png";
import "../style/homepage.css";
const Cta = () => {
   return (
      <>
         <img class="desktop-only" loading="lazy" src={App_download}  alt="Responsive image"></img>
         <img class="mobile-only" loading="lazy" src={App_download_mobile}  alt="Responsive mobile-image"></img>
         <script>
            
         </script>
      </>
   );
   };

export default Cta

