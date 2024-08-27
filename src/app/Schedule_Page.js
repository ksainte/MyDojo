import React from 'react';
import Schedule from './components/Schedule';

const SchedulePage = () => {
    return (
        <div className="flex-col">
            <div className="bg-black w-full text-white flex items-center flex-col py-10">
                <div className="lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-black">
                    <span className="stroke-white stroke-2 text-stroke">SCHEDULE</span>
                </div>
                <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace italic">
                    Schedule for each respective discipline.
                </div>
            </div>
            <div className="mx-auto max-w-screen-2xl">
            <Schedule/>
            </div>
        </div>
    );
}

export default SchedulePage;
