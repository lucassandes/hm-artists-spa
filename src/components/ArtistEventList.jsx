import React from 'react';
import ArtistEvent from './ArtistEvent.jsx';

const ArtistEventList = ({ events }) => {
    if (!events) {
        return (
            <div>No events!</div>
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
        <div className="col-md-4 list-group">
            <h3>Upcoming Events </h3>
            {eventItems}
        </div>
    );
};



export default ArtistEventList;