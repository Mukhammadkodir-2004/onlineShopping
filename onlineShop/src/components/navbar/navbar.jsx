import {
  FaChevronDown,
  FaGlobe,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaSortDown,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Image from "../../assets/images/headerImg.jpg";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <navbar className="navbar">
      <div className="container">
        <div className="navbarHero">
          <div className="navbarPhone">
            <span className="phone-icon">
              <FaPhone />
            </span>
            <p> 0129- 12323-123123</p>
          </div>
          <div className="navbarLogo">
            <h2>Online Shopping</h2>
            <img src={Logo} alt="logo" width={90} />
          </div>
          <div className="navbarItems">
            <div className="shopping">
              <FaShoppingCart />
              <p>Cart</p>
            </div>
            <div className="searchBar" onMouseEnter={() => setIsHovered(true)}>
              <FaSearch />
              <p>Search</p>
              {isHovered && (
                <div className="searchBarHover">
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="Search for products"
                  />
                </div>
              )}
            </div>
            <div className="languageList">
              <FaGlobe />
              <p>
                Eng <FaSortDown />{" "}
              </p>
            </div>
          </div>
        </div>


        <div className="navbarMenu">
          <ul className="navbarList">
            <li className="navbarListItem"> 
            <Link className="link" to="/"><p>Home</p></Link>
            </li>

{/*shop is a dropdown, so it has a different structure than the other list items*/}
            <li className="navbarListItem">
              <div className="dropDown">
                <div
                  className="dropDownToggle"
                  onMouseEnter={() => setIsDropDownOpen(true)}>
                  <p>Shop</p>
                  <FaChevronDown style={{ fontSize: "12px", color: "grey" }} />
                </div>
                {isDropDownOpen && (
                  <div className="mainBox">
                    <div className="dropDownPages">
                      <p className="dropDownTitle">Pages</p>
                      <ul className="pagesList">
                        <li className="pagesItem">
                          <Link className="link" to="/shop"><p className="linkItem">Shop</p></Link>
                        </li>
                        <li className="pagesItem">
                          <Link className="link" to="/checkout"><p className="linkItem">Checkout</p></Link>
                        </li>
                        <li className="pagesItem">
                          <Link className="link" to="/cart"><p className="linkItem">Cart</p></Link>
                        </li>
                        <li className="pagesItem">
                          <Link className="link" to="/pricing"><p className="linkItem">Pricing</p></Link>
                        </li>
                        <li className="pagesItem">
                          <Link className="link" to="/confirmation"><p className="linkItem">Confirmation</p></Link>
                        </li>
                       
                        
                      </ul>
                    </div>
                    <div className="dropDownLayouts">
                      <p className="dropDownTitle">Layouts</p>
                      <ul className="layoutList">
                        <li className="layoutItem">
                          <Link className="link" to="/product">
                           <p className="linkItem"> Product <br /> Details</p>
                          </Link>
                        </li>
                        <li className="layoutItem">
                          <Link className="link" to="/sidebar">
                            <p className="linkItem">Shop with <br /> sidebar</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>
{/*pages and blog are dropdowns, so they have a different structure than the other list items*/}
            <li className="navbarListItem">
              <div className="pagesDropDown">
                <div className="dropDownToggle" onMouseEnter={()=>setIsDropDownOpen(true)} >
                <p>Pages</p>
                <FaChevronDown style={{ fontSize: "12px", color: "grey" }} />
                </div>
                {isDropDownOpen && (
                    <div className="pagesMainBox">
                        <div className="introduction">
                            <p className="introTitle">Pages</p>
                            <ul className="mainPagesList">
                                <li className="mainPagesItem">
                                    <Link className="link">
                                        <p className="linkPagesItem">Contact Us</p>
                                    </Link>
                                </li>
                                <li className="mainPagesItem">
                                    <Link className="link">
                                        <p className="linkPagesItem">About Us</p>
                                    </Link>
                                </li>
                                <li className="mainPagesItem">
                                    <Link className="link">
                                        <p className="linkPagesItem">404 page</p>
                                    </Link>
                                </li>
                                <li className="mainPagesItem">
                                    <Link className="link">
                                        <p className="linkPagesItem">Coming soon</p>
                                    </Link>
                                </li>
                                <li className="mainPagesItem">
                                    <Link className="link">
                                        <p className="linkPagesItem">FAQ</p>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="dashboard">
                            <p className="introTitle">Dashboard</p>
                            <ul className="dashList">
                                <li className="dashItem">
                                    <Link className="link">
                                        <p className="linkDashItem">User Interface</p>
                                    </Link>
                                </li>
                                <li className="dashItem">
                                    <Link className="link">
                                        <p className="linkDashItem">Orders</p>
                                    </Link>
                                </li>
                                <li className="dashItem">
                                    <Link className="link">
                                        <p className="linkDashItem">Address</p>
                                    </Link>
                                </li>
                                <li className="dashItem">
                                    <Link className="link">
                                        <p className="linkDashItem">Profile details</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="utility">
                            <p className="introTitle">Utility</p>
                            <ul className="utList">
                                <li className="utItem">
                                    <Link className="link">
                                        <p className="linkUtItem">Login Page</p>
                                    </Link>
                                </li>
                                <li className="utItem">
                                    <Link className="link">
                                        <p className="linkUtItem">Signing Page</p>
                                    </Link>
                                </li>
                                <li className="utItem">
                                    <Link className="link">
                                        <p className="linkUtItem">Forget Password</p>
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div className="imageBox">
                            <img width={250} src={Image} alt="header Image" />
                        </div>
                    </div>
                )}
                {/* </div> */}
              </div>
            </li>

{/*blog is a dropdown, so it has a different structure than the other list items*/}
            <li className="navbarListItem">
              <div className="blogDropDown">
                <div className="dropDownToggle" onMouseEnter={()=>setIsDropDownOpen(true)}  >
                <p>Blog</p>
                  <FaChevronDown style={{ fontSize: "12px", color: "grey" }} />
                </div>
                {isDropDownOpen && (
                    <div className="blogMainPage">
                        <div className="blogList">
                            <ul className="blogTypeList">
                                <li className="blogListItem">
                                    <Link className="link">
                                        <p className="linkBlogItem">Blog Left Sidebar</p>
                                    </Link>
                                </li>
                                <li className="blogListItem">
                                    <Link className="link">
                                        <p className="linkBlogItem">Blog Right Sidebar</p>
                                    </Link>
                                </li>
                                <li className="blogListItem">
                                    <Link className="link">
                                        <p className="linkBlogItem">Blog Full Width</p>
                                    </Link>
                                </li>
                                <li className="blogListItem">
                                    <Link className="link">
                                        <p className="linkBlogItem">Blog 2 Columns </p>
                                    </Link>
                                </li>
                                <li className="blogListItem">
                                    <Link className="link">
                                        <p className="linkBlogItem">Blog Single</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
              </div>
            </li>

{/*contact is a dropdown, so it has a different structure than the other list items*/}
            <li className="navbarListItem">
              <div className="dropDown">
                    <div className="dropDownToggle" onMouseEnter={()=>setIsDropDownOpen(true)} >
                    <p>Elements</p>
                    <FaChevronDown style={{ fontSize: "12px", color: "grey" }} />
                    </div>
                    {isDropDownOpen && (
                        <div className="elementsMainBox">
                            <ul className="elementList">
                                <li className="elementItem">
                                    <Link className="link">
                                        <p className="linkElementItem">
                                            Typography
                                        </p>
                                    </Link>
                                </li>
                                <li className="elementItem">
                                    <Link className="link">
                                        <p className="linkElementItem">
                                            Buttons
                                        </p>
                                    </Link>
                                </li>
                                <li className="elementItem">
                                    <Link className="link">
                                        <p className="linkElementItem">
                                            Alerts
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
              </div>
            </li>

          </ul>
        </div>
      </div>
    </navbar>
  );
};
