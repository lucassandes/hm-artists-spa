import React from 'react';
import ArtistEvent from './ArtistEvent.jsx';
import UiLoaderEvents from './UiLoaderEvents.jsx';
const ArtistEventList = ({ events, isEventsLoading }) => {

    if (!events || isEventsLoading) {
        return (
            <UiLoaderEvents/>
        );
    } else if (events.length === 0) {
        return (
            <div className="card artist-events">
                <div className="artist-event__404">No events found :(</div>
            </div>
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