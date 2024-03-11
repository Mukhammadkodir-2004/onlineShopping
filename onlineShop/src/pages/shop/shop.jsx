import { Link,useLocation } from "react-router-dom";
import "./shop.css";
// import "./main.css";
import Product1 from "../../assets/images/products/product1.jpg";
import Product2 from "../../assets/images/products/product2.jpg";
import Product3 from "../../assets/images/products/product3.jpg";
import Product4 from "../../assets/images/products/product4.jpg";
import Product5 from "../../assets/images/products/product5.jpg";
import Product6 from "../../assets/images/products/product6.jpg";
import Product7 from "../../assets/images/products/product7.jpg";
import Product8 from "../../assets/images/products/product8.jpg";
import Product9 from "../../assets/images/products/product9.jpg";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Footer, Main } from "../../components";

export const Shop = () => {
    const [showIcons, setShowIcons] = useState(false);
  
    const handleMouseEnter = () => {
      setShowIcons(true);
    };
  
    const handleMouseLeave = () => {
      setShowIcons(false);
    };
  
    return (
      <>
        <section className= "pageBoard">
          <div className="container">
            <div className="boardContent">
              <h3 className="pageTitle">Shop</h3>
              <div className="breadcrumb">
                <Link className="pageLink" to="/">Home</Link> / <span>Shop</span>
              </div>
            </div>
          </div>
        </section>
  
        <section className="trendyProducts" style={{ backgroundColor: location.pathname === "/shop" ? "white" : "" }}>
        <div className="container">
          {/* <h3 className="mainTitle">Trendy Products</h3> */}
          <div className="trendyProductsBoxes">
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product1}
                  width={360}
                  height={432}
                  alt="Product1"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Reef Boardsport</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product2}
                  width={360}
                  height={432}
                  alt="Product2"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product3}
                  width={360}
                  height={432}
                  alt="Product3"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Strayhorn SP</p>
                <p className="productPrice">$100</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product4}
                  width={360}
                  height={432}
                  alt="Product4"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Bradley Mid</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product5}
                  width={360}
                  height={432}
                  alt="Product5"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product6}
                  width={360}
                  height={432}
                  alt="Product6"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product7}
                  width={360}
                  height={432}
                  alt="Product7"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product8}
                  width={360}
                  height={432}
                  alt="Product8"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
            <div className="trendyContentBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="trendyProductsBox">
                <img
                  src={Product9}
                  width={360}
                  height={432}
                  alt="Product9"
                  className="productImage"
                />
                <div className={`bottomIcons ${showIcons ? 'show' : ''}`}>
                  <div className="search" >
                    <FaSearch/>
                  </div>
                  <div className="favorites">
                    <FaHeart/>
                  </div>
                  <div className="cart" >
                    <FaShoppingCart/>
                  </div>
                </div>
              </div>
              <div className="costs">
                <p className="productTitle">Rainbow Shoes</p>
                <p className="productPrice">$200</p>
              </div>
            </div>
          </div>
          <div className="subscribeBox">
                <h4 className="title">
                SUBSCRIBE TO NEWSLETTER
                </h4>
                <p className="subscribeText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,<br />
                facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.
                </p>
                <form className="emailForm">
                    <input className="email" placeholder="Enter your email Address" type="email" name="email" id="email" autoComplete="off" />
                     <button className="subscribe" type="submit">Subscribe Now</button>
                </form>
            </div>
        </div>
      </section>
  
        <Footer />
      </>
    );
  };
