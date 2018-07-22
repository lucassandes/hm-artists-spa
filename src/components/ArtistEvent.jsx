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
  const eventDate = new Date(event.datetime);

  return (
    <div className="artist-event__event d-flex-center">
      <div className="artist-event__date">
        <div className="artist-event__month">
          {eventDate.toLocaleDateString('en-US', { month: 'short' })}
        </div>
        <div className="artist-event__day">
          {eventDate.getDay()}
        </div>
      </div>

      <div className="artist-event__venue-info">
        <div className="artist-event__venue-name">{event.venue.name}</div>
        <div className="artist-event__venue-city">{event.venue.city}</div>
        <div className="artist-event__venue-country">{event.venue.country}</div>
      </div>

      {/* <a class="button" href={event.offers[0].url} target="_blank" > {event.offers[0].type} </a> */}


    </div>
  );
};



export default Event;