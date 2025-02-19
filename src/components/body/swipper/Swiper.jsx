import React from "react";
import { useState, useEffect } from "react";
import "./swiper.css";
import PropTypes from 'prop-types';

export function Swiper ({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  Swiper.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  };

  useEffect(() => {
    let timeoutId; // Timeout ID scoped within the useEffect

    const startTimeout = () => {
      timeoutId = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        startTimeout(); // Restart the timeout for the next image
      }, 3000);
    };

    startTimeout(); // Start the initial timeout

    return () => {
      clearTimeout(timeoutId); // Clear timeout on unmount or dependency change
    };

  }, [images]); // images is the only dependency

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevoiusImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
  }

  return (
      <div className="swiper-container">
        {/* here should be the information about the current state */}
        {}     
        <div className="swiper-picture" key={currentImageIndex}>
          <a href="https://www.youtube.com"><img src={images[currentImageIndex].src} /></a>
          <div className="bottom-left">{images[currentImageIndex].description}</div><br />
          <button className="left-button-arrow" onClick={prevoiusImage}></button>
          <button className="right-button-arrow" onClick={nextImage}></button>
          {/* <button className="image-button">More</button> */}
        </div>
        {/* Here should be the rest of images in the list */}
        <div className="right-list">
          {/* renderizar dinamicamente dependiendo de la cantidad de elementos que hayan en la lista */}
          {
            images.map((image, index) => {
              return (
                <div className={"right-list-item"} style={{height: `calc(100% / ${images.length})`}} key={index}>
                  <img src={image.src} /> 
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

