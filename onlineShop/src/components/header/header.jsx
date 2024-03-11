import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";
import "./header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Slider1, Slider2, Slider3];

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
        setCurrentSlide(prevSlide => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
        setCurrentSlide(prevSlide => prevSlide - 1);
    }
  };
  let contentBoxClass = "contentBox";
  if (currentSlide === 0) {
    contentBoxClass += " slide-middle";
  } else if (currentSlide === 1) {
    contentBoxClass += " slide-left";
  } else if (currentSlide === 2) {
    contentBoxClass += " slide-right";
  }
  return (
    <header className="header">
      <div className="heroBanner" style={{ backgroundImage: `url(${images[currentSlide]})` }}>
        {/* Content Box */}
        <div key={currentSlide} className={contentBoxClass}>
          <p className="contentTitle" style={{ color: "white" }}>
            Products
          </p>
          <h1 className="contentText">The Beauty of nature is hidden in details.</h1>
          <button className="contentBtn">
            <Link className="link">
              <p className="linkItems">Shop</p>
            </Link>
          </button>
        </div>
        {/* Navigation buttons */}
        <button className="prevButton" onClick={prevSlide}>
          <FaChevronLeft className="leftBtn" />
        </button>
        <button className="nextButton" onClick={nextSlide}>
          <FaChevronRight className="rightBtn" />
        </button>
        {/* Dot indicators */}
        <div className="dotIndicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </header>
  );
};
