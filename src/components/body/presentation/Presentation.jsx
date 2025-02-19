import React from "react";
// import { useState, useEffect } from "react";
import "./presentation.css";
import PropTypes from 'prop-types';

export function Presentation () {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    Presentation.PropTypes = {
        images: PropTypes.arrayOf(PropTypes.shape({
            src: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })).isRequired
    }

    return(
        <>
            <div className="presentation-picture" >
                <img src="https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg" />
            </div>
            <div className="presentation-info">
                <h1>ANDREA CHACIN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolore nobis obcaecati facere sed in. Sapiente amet ipsum minus dolorum? Provident, architecto possimus qui fugit sunt libero aperiam quasi dolor?</p>
            </div>
        </>
    )

}