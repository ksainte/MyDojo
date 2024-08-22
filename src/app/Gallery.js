'use client';

import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from "next/image";
import './Gallery.css'; // You may still use this for general styles

const Gallery = ({ images, imageHeight, imageMinWidth, flexDirection}) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 380;
    } else {
      current.scrollLeft += 380;
    }
  };

  const imageStyle = {
    height: imageHeight,
    minWidth: imageMinWidth,
    objectFit: 'cover',
  };

  const DirectionStyle = {
    flexDirection: flexDirection,
  };

  return (
    <div className="Gallery_components_design">
      <div className="Gallery_Down_design">
        <div className="app__gallery" style={DirectionStyle} ref={scrollRef}>
          {images.map((image, index) => (
            <div
              className="app__gallery-images"
              key={`gallery_image-${index + 1}`}
            
            >
              <Image src={image}  style={imageStyle} alt="gallery_image"/>
            </div>
          ))}
        </div>
      </div>

      <div className="app__gallery_arrows">
        <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

export default Gallery;
