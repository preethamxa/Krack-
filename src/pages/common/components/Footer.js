import React from 'react';
import '../style/Foot.css';
import krackLogo from "../../../img/common/Footerlogo.png";
import Apple from "../../../img/common/download-from-apple.png";
import Google from "../../../img/common/download-from-google.png";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
export default function Footer() {
  return (
    <div class="d-flex flex-column h-100">
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white"><img src={krackLogo} alt="logo"/></h5>
                    <p class="small text-white"> &nbsp; A unit of Cresurge Pvt. Ltd.</p>
                  
                </div>
                <div class="col-lg-4 col-md-6">
                    <h3 class="text-white mb-3">About US</h3>
                    <ul class="list-unstyled text-white">
                        <li>Tune your instrument</li><br></br>
                        <li>Contact</li><br></br>
                        <li>Privacy Policy</li><br></br>
                        <li>Terms & Conditions</li><br></br>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-3">
                    <h3 class="text-white mb-3">Learner App</h3>
                   
                    <h6 class="text-white mb-3">Coming soon!</h6>
                  
                    <img class="playstore" src={Apple} alt="apple-download"  />
                        <br></br>
                       <img class="appstore" src={Google} alt="google-download"/>
                   
                </div>
            </div>
        </div>
    </footer>
</div>
  );
}