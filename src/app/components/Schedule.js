import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 6 }, (_, i) => 10 + i * 2); // Hours from 12 to 23
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  const events = [
    { day: 'LUNDI', startHour: 16, endHour: 18, time: '16:30-17:30', label:'JUDO', color: 'bg-yellow-500' },
    { day: 'MERCREDI', startHour: 16, endHour: 18, time: '16:30-17:30', label:'JUDO', color: 'bg-yellow-500' },
    { day: 'VENDREDI', startHour: 16, endHour: 18, time: '16:30-17:30', label:'JUDO', color: 'bg-yellow-500' },
    { day: 'LUNDI', startHour: 18, endHour: 20, time: '18-19:30', label:'K1 KICKBOXING', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 18, endHour: 20, time: '18-19:30', label:'K1 KICKBOXING', color: 'bg-blue-400' },
    // Add more events here
  ];

  return (
    <div className="grid grid-cols-8 gap-0 py-10">
      {/* Header row with days */}
      <div className="col-span-1 py-6"></div> {/* Empty cell for alignment */}
      {days.map((day, index) => (
        <div key={day} className={`lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace flex justify-center items-center font-bold ${index === 0 ? 'bg-gray-200' : 'bg-gray-200'} border border-gray-300`}>
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Time label on the left side */}
          <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace  italic flex items-center justify-center border border-gray-300 p-10 bg-gray-100">
            {`${hour}:00`}
          </div>
          {/* Time slots for each day */}
          {days.map((day) => (
            <div key={`${hour}-${day}`} className="relative border border-gray-300">
              {/* Display events */}
              {events
                .filter((event) => event.day === day && event.startHour < hour + 2 && event.endHour > hour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute ${event.color} opacity-70`}
                    style={{
                      height: `100%`,
                      width: '100%',
                      display: 'flex',           // Equivalent to `flex`
                      alignItems: 'center',      // Equivalent to `items-center`
                      justifyContent: 'center',  // Equivalent to `justify-center`
                    }}
                  >
                    <div className="flex flex-col">
                    <span className="text-black lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">{event.time}</span>
                    <span className="text-black font-bold lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">{event.label}</span>
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
