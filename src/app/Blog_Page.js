import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";

function Blog() {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-12 max-w-screen-2xl ">
        <div className="col-span-9 max-xl:col-span-12">
          <Gallery 
            images={[images.blog3, images.blog2, images.blog1]} 
            heightClass="xs:h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]" 
            minWidthClass="xs:min-w-[18rem] sm:min-w-[22rem] md:min-w-[26rem] lg:min-w-[30rem] xl:min-w-[34rem] 2xl:min-w-[38rem]" 
            flexDirection="row" 
          />
        <div className="flex gap-8 px-3">
        <div className=" blogsize text-white background">
          <span className="stroke-black stroke-2">BLOG</span>
        </div>
              <div className="flex flex-col justify-evenly">
                  <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">
                    Shidostudio is a very active club. We regularly participate in competitions in
                  various disciplines and go on seminars in Belgium and abroad. </div>
                  <div className=" background bg-white flex justify-center py-1 lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace border-4 border-black">MORE TO COME</div>
              </div>
        </div>
        </div>
        <div className="Side_blog col-span-3 border background mt-8 py-8 max-xl:hidden">
          <div className=" text-black flex justify-center font-mono	font-family: ui-monospace lg:text-xl xl:text-2xl 2xl:text-3xl italic">Instagram </div>
          <div className="flex-grow h-px bg-black mx-10"></div> {/* Added ml-4 for spacing */}
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
