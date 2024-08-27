import React from 'react';
import './components/Class.css';
import images from "./images";
import Image from "next/image";

const DisciplineStyle = {
    objectFit: 'cover',
    width: '100%',  // Equivalent to `w-full`
  height: '35rem', // Equivalent to `h-60` (Tailwind's `h-60` is typically `15rem`)
  };

function Disciplines() {
  return (
    <div className="flex justify-center mt-20 flex-col">
        <div className="bg-black w-full text-white flex items-center flex-col py-10">
            <div className="lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-black">
            <span className="stroke-white stroke-2 text-stroke">DISCIPLINES</span>
            </div>
            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace italic">
                    Everyone is welcome in our club, regardless of your level, physical condition, sex or age.
            </div>
        </div>
        <div className="grid grid-cols-2 gap-12 max-w-screen-2xl mx-auto py-10">
 
                 <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>
                 <Image src={images.d2}  style={DisciplineStyle} alt="gallery_image"/>
                 <Image src={images.d3}  style={DisciplineStyle} alt="gallery_image"/>
                 <Image src={images.d4}  style={DisciplineStyle} alt="gallery_image"/>

        </div>
    </div>
  );
}

export default Disciplines;
