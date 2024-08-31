import React from 'react';
import Schedule from './components/Schedule';
import images from "./images";
import Image from "next/image";

const DisciplineStyle = {
    objectFit: 'cover',
    width: '100%',  // Equivalent to `w-full`
  height: '35rem', // Equivalent to `h-60` (Tailwind's `h-60` is typically `15rem`)
  };

  //Shidostudio's professors.
  //PROFESSEURS
const ProfesseursPage = () => {
    return (
        <div className="flex-col pb-10">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">PROFESSEURS</span>
                </div>
                <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                Our professors.
                </div>
            </div>

            <div className="flex justify-center w-full mt-10">
                <div className="flex justify-evenly items-center w-full xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-10">
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-purple-700 flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">YULI NAGATA</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1, MMA</div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-purple-700 flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">ARTHUR BUYSSENS</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1 </div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>   
                        <div className="bg-purple-700 flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">MARWAN OIHDI</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">assistant professeur kids</div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfesseursPage;
