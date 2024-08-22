import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";

function Blog() {
  return (
    <div className="background flex justify-center mt-20">
      <div className="grid grid-cols-12 max-w-screen-2xl">
        <div className="Main_Blog col-span-9">
          <Gallery 
            images={[images.blog3, images.blog2, images.blog1]} 
            imageHeight="40rem" 
            imageMinWidth="35rem" 
            flexDirection="row" 
          />
        </div>
        <div className="Side_blog col-span-3">
          <Gallery 
            images={[images.homepage2, images.homepage1, images.homepage3]}
            flexDirection="column" 
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
