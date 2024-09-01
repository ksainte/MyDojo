import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";

function Blog() {
  return (
    <div className="flex justify-center mt-10" id="blog">
      <div className="grid grid-cols-12 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl max-md:gap-6 xl:max-h-screen">
        <div className="col-span-9 max-xl:col-span-12 max-md:flex max-md:flex-col-reverse max-md:gap-6 ">
            <Gallery 
              images={[images.blog3, images.blog2, images.blog1]} 
              heightClass="xxxs:h-[12rem] xxs:h-[16rem] xs:h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]" 
              minWidthClass="xxxs:min-w-[16rem] xs:min-w-[18rem] sm:min-w-[22rem] md:min-w-[26rem] lg:min-w-[30rem] xl:min-w-[34rem] 2xl:min-w-[38rem]"
              flexDirection="row"
              marginLeft="2rem"
            />
          <div className=" max-md:gap-6 flex md:gap-8 px-3 max-md:flex-col-reverse ">
              <div className=" blogsize text-white">
                <span className="xxxs:text-7xl xxs:text-8xl xs:text-8xl sm:text-8xl md:text-9xl max-md:flex max-md:justify-center stroke-black stroke-2">BLOG</span>
              </div>
                <div className="flex flex-col justify-evenly ">
                    <div className="py-1 xxs:text-md xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace max-md:text-center">
                      Shidostudio is a very active club. We regularly participate in competitions in
                    various disciplines and go on seminars in Belgium and abroad. </div>
                    <div className="max-md:hidden background bg-white flex justify-center py-1 max-lg:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace border-4 border-black">AND MORE TO COME</div>
                </div>
          </div>
        </div>
        <div className="mx-10 hidden max-md:flex col-span-12 background bg-white justify-center py-1 lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family:ui-monospace border-4 border-black text-center">
          AND MORE TO COME
        </div>
        <div className="col-span-3 background  max-xl:hidden overflow-y-auto max-h-[57rem]">
          <div className="mt-1 text-black flex justify-center font-mono	font-family: ui-monospace lg:text-xl xl:text-2xl 2xl:text-3xl italic">Instagram </div>
          <div className="flex-grow h-px bg-black mx-10"></div>
          <Gallery 
            images={[images.homepage2, images.homepage1, images.homepage3, images.homepage3]}
            flexDirection="column"
            display="none"
            marginLeft="2rem"
            marginRight="2rem"
            marginTop="2rem"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
