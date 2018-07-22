import React from 'react';
import ArtistEvent from './ArtistEvent.jsx';

const ArtistEventList = ({ events }) => {
   
    if (!events) {
        return (
            <div>Loading...</div>
        );
    } else if(events.length === 0) {
        return(
            <div>No Events found</div>
        );
    }

    const eventItems = events.map((event) => {
        return (
            <ArtistEvent
                key={event.id}
                event={event} />
        );
    });


    return (
        <div className="card artist-events">
            <h3 className="artist-events__title">Upcoming Events</h3>
            {eventItems}
        </div>
    );
};



export default ArtistEventList;