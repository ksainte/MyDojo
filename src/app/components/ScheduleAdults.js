import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 12 }, (_, i) => 10 + i * 1); // Hours from 10 to 20
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  const events = [
    { day: 'LUNDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE-BEG.', color: 'bg-purple-400' },
    { day: 'LUNDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE-MID.', color: 'bg-purple-400' },
    { day: 'LUNDI', startHour: 20, endHour: 21, time: '20:00-21:00', label: 'KARATE-ADV.', color: 'bg-purple-400' },
    { day: 'MARDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG.', color: 'bg-orange-300' },
    { day: 'MARDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'JUDO-BEG.', color: 'bg-yellow-300' },
    { day: 'MARDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'JUDO-MID.', color: 'bg-yellow-300' },
    { day: 'MERCREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG', color: 'bg-orange-300' },
    { day: 'MERCREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE-MIX', color: 'bg-purple-400' },
    { day: 'MERCREDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'GRAPPLING', color: 'bg-sky-300' },
    { day: 'JEUDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG.', color: 'bg-orange-300' },
    { day: 'JEUDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'K1-MID', color: 'bg-orange-300' },
    { day: 'JEUDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'JUDO', color: 'bg-yellow-300' },
    { day: 'VENDREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'MMA', color: 'bg-red-400' },
    { day: 'VENDREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'GRAPPLING', color: 'bg-sky-300' },
    { day: 'SAMEDI', startHour: 13, endHour: 15.5, time: '13:00-15:30', label: 'JUDO COMPETITOR', color: 'bg-yellow-300' },
    { day: 'SAMEDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'K1-MIX', color: 'bg-orange-300' },
    { day: 'SAMEDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE-MIX', color: 'bg-purple-400' },
    { day: 'DIMANCHE', startHour: 14, endHour: 16, time: '14:00-16:00', label: 'KARATE-K1-COMPETITOR', color: 'bg-red-400' },
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
      <div className="col-span-1 max-xs:py-4 py-6"></div>
      {days.map((day) => (
        <div
          key={day}
          className="max-xs:text-[0.50rem] xs:text-xs sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-mono flex justify-center items-center font-bold bg-gray-200 border border-gray-300 "
        >
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Time label on the left side */}
          <div className="max-xs:text-[0.50rem] xs:text-xs sm:text-xs lg:text-base xl:text-lg 2xl:text-xl font-mono italic flex items-center justify-center border border-gray-300 max-xs:py-3 py-4 bg-gray-100">
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
                      <span className="text-black max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono">
                        {event.time}
                      </span>
                      <span className="text-black font-bold max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono">
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

// import React from 'react';

// const Schedule = () => {
//   const hours = Array.from({ length: 12 }, (_, i) => 10 + i * 1); // Hours from 10 to 20
//   const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI','DIMANCHE'];

//   const events = [
//     { day: 'LUNDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE-BEG.', color: 'bg-purple-400' },
//     { day: 'LUNDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE-MID.', color: 'bg-purple-400' },
//     { day: 'LUNDI', startHour: 20, endHour: 21, time: '20:00-21:00', label: 'KARATE-ADV.', color: 'bg-purple-400' },
//     { day: 'MARDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG.', color: 'bg-orange-300' },
//     { day: 'MARDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'JUDO-BEG.', color: 'bg-yellow-300' },
//     { day: 'MARDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'JUDO-MID.', color: 'bg-yellow-300' },
//     { day: 'MERCREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG', color: 'bg-orange-300' },
//     { day: 'MERCREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'KARATE-MIX', color: 'bg-purple-400' },
//     { day: 'MERCREDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'GRAPPLING', color: 'bg-sky-300' },
//     { day: 'JEUDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'K1-BEG.', color: 'bg-orange-300' },
//     { day: 'JEUDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'K1-MID', color: 'bg-orange-300' },
//     { day: 'JEUDI', startHour: 20, endHour: 21.5, time: '20:00-21:30', label: 'JUDO', color: 'bg-yellow-300' },
//     { day: 'VENDREDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'MMA', color: 'bg-red-400' },    
//     { day: 'VENDREDI', startHour: 19, endHour: 20, time: '19:00-20:00', label: 'GRAPPLING', color: 'bg-sky-300' },
//     { day: 'SAMEDI', startHour: 13, endHour: 15.5, time: '13:00-15:30', label: 'JUDO COMPETITOR', color: 'bg-yellow-300' },
//     { day: 'SAMEDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'K1-MIX', color: 'bg-orange-300' },
//     { day: 'SAMEDI', startHour: 18, endHour: 19, time: '18:00-19:00', label: 'KARATE-MIX', color: 'bg-purple-400' },
//     { day: 'DIMANCHE', startHour: 14, endHour: 16, time: '14:00-16:00', label: 'KARATE-K1-COMPETITOR', color: 'bg-red-400' },

//   ];

//   const getEventStyle = (event, hour) => {
//     const startOffset = (event.startHour - hour) * 100; // Each hour is 100% of the grid row
//     const duration = (event.endHour - event.startHour) * 100; // Duration based on hours

//     return {
//       top: `${startOffset}%`,
//       height: `${duration}%`,
//       width: '100%',
//       left: 0,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     };
//   };

//   return (
//     <div className="grid grid-cols-8 gap-0 max-xs:py-5 py-10">
//       {/* Header row with days */}
//       <div className="col-span-1 max-xs:py-4 py-6"></div>
//       {days.map((day) => (
//         <div
//           key={day}
//           className="max-xs:text-[0.50rem] lg:text-lg xl:text-xl 2xl:text-2xl font-mono flex justify-center items-center font-bold bg-gray-200 border border-gray-300"
//         >
//           {day}
//         </div>
//       ))}

//       {/* Time rows */}
//       {hours.map((hour) => (
//         <React.Fragment key={hour}>
//           {/* Time label on the left side */}
//           <div className="max-xs:text-[0.50rem] lg:text-base xl:text-lg 2xl:text-xl font-mono italic flex items-center justify-center border border-gray-300 max-xs:py-3 py-4 bg-gray-100">
//             {`${hour}:00`}
//           </div>
//           {/* Time slots for each day */}
//           {days.map((day) => (
//             <div key={`${hour}-${day}`} className="relative border border-gray-300">
//               {/* Display events */}
//               {events
//                 .filter((event) => event.day === day && event.startHour < hour + 1 && event.endHour > hour)
//                 .map((event, index) => (
//                   <div
//                     key={index}
//                     className={`absolute ${event.color} opacity-70`}
//                     style={getEventStyle(event, hour)}
//                   >
//                     <div className="flex flex-col text-center">
//                       <span className="text-black max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono">{event.time}</span>
//                       <span className="text-black font-bold max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono">{event.label}</span>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Schedule;
