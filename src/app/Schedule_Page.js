import React from 'react';
import Schedule from './components/Schedule';

const SchedulePage = () => {
    return (
        <div className="flex-col">
        <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
            <span className="stroke-white stroke-2 text-stroke">HORAIRE</span>
            </div>
            <div className="xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
            Schedule for each respective discipline.
            </div>
        </div>
            <div className="mx-auto max-md:px-5 xs:max-w-screen-md sm:max-w-screen-md md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <Schedule/>
            </div>
        </div>
    );
}

export default SchedulePage;