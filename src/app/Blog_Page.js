import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";

function Blog() {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-12 max-w-screen-2xl ">
        <div className="col-span-9 max-xl:col-span-12 max-xs:flex max-xs:flex-col-reverse">
          <Gallery 
            images={[images.blog3, images.blog2, images.blog1]} 
            heightClass="xxs:h-[16rem] xs:h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]" 
            minWidthClass="xxs:min-w-[18rem] xs:min-w-[18rem] sm:min-w-[22rem] md:min-w-[26rem] lg:min-w-[30rem] xl:min-w-[34rem] 2xl:min-w-[38rem]" 
            flexDirection="row" 
          />
        <div className=" max-xs:gap-3 flex xs:gap-8 px-3 max-xs:flex-col-reverse">
            <div className=" blogsize text-white background ">
              <span className=" max-xs:text-8xl max-xs:flex max-xs:justify-center stroke-black stroke-2">BLOG</span>
            </div>
              <div className="flex flex-col justify-evenly ">
                  <div className=" lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace max-xs:px-2 max-xxs:text-lg max-xs:text-xl">
                    Shidostudio is a very active club. We regularly participate in competitions in
                  various disciplines and go on seminars in Belgium and abroad. </div>
                  <div className="max-xs:hidden background bg-white flex justify-center py-1 lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace border-4 border-black">MORE TO COME</div>
              </div>
        </div>
        </div>
        <div className="col-span-3 background mt-8 py-8 max-xl:hidden">
          <div className=" text-black flex justify-center font-mono	font-family: ui-monospace lg:text-xl xl:text-2xl 2xl:text-3xl italic">Instagram </div>
          <div className="flex-grow h-px bg-black mx-10"></div>
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
