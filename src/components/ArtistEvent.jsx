import React from 'react';

const Event = ({ event }) => {
  if (!event) {
    return (
      <div>Search an artist...</div>
    );
  }
//   Event Venue
//   ■ Event City
//   ■ Event Country
//   ■ Event Date
  return (
    <div>
      <h2>{event.datetime}</h2>
      <h3>{event.venue.name}</h3>
      <h4>{event.venue.city}</h4>
      <h4>{event.venue.country}</h4>

      
    </div>
  );
};



export default Event;