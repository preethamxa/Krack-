

const Footer = ({ white_bg = '' }) => {
   return (
      <>
         <footer>
            <div className="footer__area">
               <div className={`footer__top grey-bg-4 pt-95 pb-45 ${white_bg && white_bg}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo">
                                    <Link href="/">
                                       <a>
                                          <img src="assets/img/logo/kracklogo.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <p>A unit of Cresurge Pvt. Ltd</p>
                                    <div className="footer__social">
                                       <h4>Follow Us</h4>

                                       <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">About US</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li>
                                       <a href="#">Tune your instrument</a>
                                    </li>
                                    <li>
                                       <a href="#">Contact</a>
                                    </li>
                                    <li>
                                       <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                       <a href="#">Terms & conditions</a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget mb-50">
                              <h3 className="footer__widget-title">Learner App</h3>
                              <div className="footer__widget-content">
                                 <ul>
                                    <li><a href="#"><img src="assets/img/home/app-store.png" alt="app store" /></a></li>
                                       <li><a href="#"><img src="assets/img/home/google-store.png" alt="google store" /></a></li>
                                 </ul>
                              </div>
                              <h3 className="footer__widget-title">Sign up</h3>

                              <div className="footer__subscribe">
                                 <p>Receive weekly newsletter with discounts & much more!</p>
                                 <form action="#">
                                    <div className="footer__social">
                                       <input type="text" placeholder="Email" />
                                       <button type="submit" className="tp-btn-subscribe">Sign up</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;