import React from 'react';

const UiLoaderEvents = () => {
    const array = [1, 2, 3, 4, 5, 6];
    const eventItems = array.map((element) => {
        return (
            <div key={element} className="artist-event__event d-flex-center ui-loader">
                <div className="ui-loader__date">
                    <div className="ui-loader__month bg-gray-200"></div>
                    <div className="ui-loader__day bg-gray-200"></div>
                </div>

                <div className="artist-event__venue-info">
                    <div className="ui-loader__big-block bg-gray-200"></div>
                    <div className="ui-loader__small-block bg-gray-200"></div>
                    <div className="ui-loader__medium-block bg-gray-200"></div>
                </div>
            </div>
        );
    });

    return (
        <div className="card artist-events">
            <div className="ui-loader__big-block ui-loader__big-block--tall bg-gray-200"></div>
            {eventItems}
        </div>
    );
};

export default UiLoaderEvents;