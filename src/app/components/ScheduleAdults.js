import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 10 }, (_, i) => 12 + i * 1); // Hours from 10 to 20
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  const events = [
    { day: 'LUNDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE-BEG.', color: 'bg-purple-400' },
    { day: 'LUNDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE-ADV.', color: 'bg-purple-400' },
    { day: 'LUNDI', startHour: 20, endHour: 21, time: '20:00-21:00', label: 'KARATE-EXP.', color: 'bg-purple-400' },
    { day: 'MARDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'JUDO', color: 'bg-yellow-300' },
    { day: 'MARDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'K1', color: 'bg-orange-300' },
    // { day: 'MARDI', startHour: 20, endHour: 21.7, time: '20:00-21:30', label: 'JUDO-ADV.', color: 'bg-yellow-300' },
    { day: 'MERCREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1', color: 'bg-orange-300' },
    { day: 'MERCREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE', color: 'bg-purple-400' },
    { day: 'MERCREDI', startHour: 20, endHour: 21.7, time: '20:00-21:30', label: 'GRAPPLING', color: 'bg-sky-300' },
    { day: 'JEUDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'JUDO', color: 'bg-yellow-300' },
    { day: 'JEUDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'K1', color: 'bg-orange-300' },
    // { day: 'JEUDI', startHour: 20, endHour: 21.7, time: '20:00-21:30', label: 'JUDO', color: 'bg-yellow-300' },
    { day: 'VENDREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'MMA', color: 'bg-red-400' },
    { day: 'VENDREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'GRAPPLING', color: 'bg-sky-300' },
    // { day: 'SAMEDI', startHour: 13, endHour: 15.7, time: '13:00-15:30', label: 'JUDO COMPETITOR', color: 'bg-yellow-300' },
    { day: 'SAMEDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'K1', color: 'bg-orange-300' },
    { day: 'SAMEDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE', color: 'bg-purple-400' },
    { day: 'DIMANCHE', startHour: 14, endHour: 16.1, time: '14:00-16:00', label: 'KARATE-K1-COMPETITOR', color: 'bg-red-400' },
  ];

  const getEventStyle = (event) => {
    const duration = (event.endHour - event.startHour) * 100; // Duration based on hours
    return {
      top: 0,
      height: `${duration}%`,
      width: '100%',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10, // Ensure it appears above the slot borders
    };
  };

  return (
    <div className="grid grid-cols-8 gap-0 max-xs:py-5 py-10 ">
      {/* Header row with days */}
      <div className="col-span-1 max-xs:py-2 max-lg:py-3 max-xl:py-4 py-6"></div>
      {days.map((day) => (
        <div
          key={day}
          className="max-xs:text-[0.4rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-mono flex justify-center items-center font-bold bg-gray-200 border border-gray-300 "
        >
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Time label on the left side */}
          <div className="max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-[0.65rem] md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono italic flex items-center justify-center border border-gray-300 max-xs:py-[0.2rem] max-md:py-1 max-lg:py-[0.35rem] lg:py-2 xl:py-3 2xl:py-4 bg-gray-100">
            {`${hour}:00`}
          </div>
          {/* Time slots for each day */}
          {days.map((day) => (
            <div key={`${hour}-${day}`} className="relative border border-gray-300">
              {/* Display events */}
              {events
                .filter((event) => event.day === day && event.startHour === hour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute ${event.color} opacity-70`}
                    style={getEventStyle(event)}
                  >
                    <div className="flex flex-col text-center">
                      <span className="text-black max-xxs:text-[0.20rem] max-xs:text-[0.25rem] xs:text-[0.35rem] sm:text-[0.45rem] md:text-[0.55rem] lg:text-[0.65] xl:text-lg 2xl:text-xl font-mono">
                        {event.time}
                      </span>
                      <span className="text-black font-bold max-xxs:text-[0.25rem] max-xs:text-[0.30rem] xs:text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs xl:text-base 2xl:text-xl font-mono">
                        {event.label}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Schedule;
