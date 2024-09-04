import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{event.title}</h2>
        <p className="text-gray-500">{event.date}</p>
        <p className="text-gray-700">{event.venue}</p>
        <p className="text-gray-500">{event.category}</p>
      </div>
    </div>
  );
};

export default EventCard;
