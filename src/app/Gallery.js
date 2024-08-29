'use client';

import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from "next/image";
import './Gallery.css';

const Gallery = ({ images, heightClass, minWidthClass, flexDirection, display, marginRight}) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 380;
    } else {
      current.scrollLeft += 380;
    }
  };

  const DisplayStyle = {
    display: display,
  };

  return (
    <div className="Gallery_components_design">
      <div className="Gallery_Down_design">
        <div className="app__gallery" style={{ flexDirection }} ref={scrollRef}>
          {images.map((image, index) => (
            <div
              className={`app__gallery-images ${heightClass} ${minWidthClass}`}
              key={`gallery_image-${index + 1}`}
              style={{ marginRight }}
            >
              <Image src={image} alt="gallery_image" className={`object-cover ${heightClass} ${minWidthClass}`} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ DisplayStyle }} className="app__gallery_arrows justify-center" >
        <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

export default Gallery;
