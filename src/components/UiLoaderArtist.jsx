import React from 'react';

const UiLoaderArtist = () => {
    return (
        <div className="card">
            <div className="ui-loader__circle bg-gray-200"/>
            <div className="artist-info">
                <div className="ui-loader__big-block ui-loader__big-block--tall bg-gray-200"></div>
            </div>
        </div>
    );
};

export default UiLoaderArtist;