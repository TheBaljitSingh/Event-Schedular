import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Import the default styling
import "./Calendar.css"

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="react-calendar"
      />
    </div>
  );
};

export default CalendarComponent;
