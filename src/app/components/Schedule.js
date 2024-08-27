import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 6 }, (_, i) => 10 + i * 2); // Hours from 12 to 23
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  const events = [
    { day: 'Vendredi', startHour: 18, endHour: 20, label: 'Event 1', color: 'bg-blue-500' },
    { day: 'Vendredi', startHour: 10, endHour: 12, label: 'Event 2', color: 'bg-green-500' },
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
                .filter((event) => event.day === day && event.startHour <= hour && hour < event.endHour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute ${event.color} opacity-70`}
                    style={{
                      top: `${(hour - event.startHour) * 100 / (event.endHour - event.startHour)}%`,
                      height: `${100 / (event.endHour - event.startHour)}%`,
                      width: '100%',
                      left: 0,
                    }}
                  >
                    <span className="text-white text-xs p-1">{event.label}</span>
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
