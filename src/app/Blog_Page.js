import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";

function Blog() {
  return (
    <div className="flex justify-center mt-10 background">
      <div className="grid grid-cols-12 max-w-screen-2xl">
        <div className="Main_Blog col-span-9">
          <Gallery 
            images={[images.blog3, images.blog2, images.blog1]} 
            heightClass="md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]" 
            minWidthClass="md:min-w-[23rem] lg:min-w-[27rem] xl:min-w-[31rem] 2xl:min-w-[35rem]" 
            flexDirection="row" 
          />
        <div className="flex gap-8 px-3">
        <div className=" blogsize text-white">
          <span className="stroke-black stroke-2">BLOG</span>
        </div>
              <div className="flex flex-col justify-evenly">
                  <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">
                    Shidostudio is a very active club. We regularly participate in competitions in
                  various disciplines and go on seminars in Belgium and abroad. </div>
                  <div className="  bg-white flex justify-center py-1 lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace border-4 border-black">MORE TO COME</div>
              </div>
        </div>
        </div>
        <div className="Side_blog col-span-3 border bg-purple-700 mt-8 py-8">
          <div className=" text-white flex justify-center font-mono	font-family: ui-monospace lg:text-xl xl:text-2xl 2xl:text-3xl italic">Instagram </div>
          <Gallery 
            images={[images.homepage2, images.homepage1, images.homepage3]}
            flexDirection="column"
            display="none"
            marginRight="2rem"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
