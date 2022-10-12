//import { useState } from "react";
//import { useDispatch } from "react-redux";
//import links from "../../../../data/linkData";
//import useAuth from "../../../../hooks/useAuth";
//import useSticky from "../../../../hooks/useSticky";
//import { searchText } from "../../../../redux/features/coursesSlice";
//import { useRouter } from 'next/router';
// import LoginData from "../../data/LoginMenuData";
//import LoginData from "../../../../data/LoginMenuData";
//import Sidebar from "../../../../components/common/SideBar";

const Nav_bar = () => {
   // // sticky
   // const { headerSticky } = useSticky();
   // // user
   // const { user, logout } = useAuth();
   // // searchValue
   // const [searchValue, setSearchValue] = useState('');
   // // dispatch
   // const dispatch = useDispatch();
   // // router
   // const router = useRouter();
   // // handle sidebar show
   // const [show, setShow] = useState(false);
   // // handle close
   // const handleClose = () => setShow(false);
   // // handle sidebar show
   // const handleShow = () => setShow(true);
   // // handleSubmit
   // const handleSubmit = e => {
   //    e.preventDefault();
   //    if (!searchValue) {

   //    }
   //    else {
   //       dispatch(searchText(searchValue))
   //       router.push('/search-courses')
   //    }
   // } 
   return (
      <>
         <header>
            <div className="header__area">
               <div className={headerSticky ? "header__bottom header__sticky" : "header__bottom"} id="header-sticky" >
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                           <div className="logo">
                              <Link href="/">
                                 <a>
                                    <img src="assets/img/logo/kracklogo.png" alt="logo" />
                                 </a>
                              </Link>
                           </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                           <div className="main-menu">
                              <nav id="mobile-menu">
                                 {/* <ul>

                                    {!user?.email &&
                                       links.map((link) => {
                                          return <li key={link.id} className={link.submenu ? `has-dropdown` : ''}>
                                             <Link href={`${link.url}`}><a >{link.name}</a></Link>
                                             <ul className={link.submenu ? `submenu` : ''}>
                                                {
                                                   link?.submenu?.map((sub_menu, index) => {
                                                      return <li key={sub_menu.id}>
                                                         <Link href={`${sub_menu.url}`}><a >{sub_menu.name}</a></Link>
                                                      </li>
                                                   })
                                                }
                                             </ul>
                                          </li>
                                       })
                                    }

                                    {
                                       user?.email &&
                                       LoginData.map((link) => {
                                          return <li key={link.id} className={link.submenu ? `has-dropdown` : ''}>
                                             <Link href={`${link.url}`}><a >{link.name}</a></Link>
                                             <ul className={link.submenu ? `submenu` : ''}>
                                                {
                                                   link?.submenu?.map((sub_menu, index) => {
                                                      return <li key={sub_menu.id}>
                                                         <Link href={`${sub_menu.url}`}><a >{sub_menu.name}</a></Link>
                                                      </li>
                                                   })
                                                }
                                             </ul>
                                          </li>
                                       })
                                    }
                                 </ul> */}
                              </nav>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                              <div className="header__hamburger ml-50 d-xl-none">
                                 <button type="button" onClick={handleShow} className="hamurger-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
       
         </header>


         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default Nav_bar;