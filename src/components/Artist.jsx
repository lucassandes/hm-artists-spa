import React from 'react';
import UiLoaderArtist from './UiLoaderArtist.jsx';

const Artist = ({ artist, isArtistLoading }) => {
  if (artist === null || isArtistLoading) {
    return (
      <UiLoaderArtist />
    );
  } else if (!artist) {
    return (
      <div className="artist-404">Artist not found :( <br /> Please, try searching another one.</div>
    )
  }

  return (

    <div className="card">

      <img src={artist.thumb_url} alt={artist.name +  " Picture"} className="artist-picture" />

      <div className="artist-info">
        <h1 className="artist-name">{artist.name}</h1>
        {artist.upcoming_event_count > 0 &&
          <span className="on-tour-badge">On Tour</span>
        }
      </div>

      <div><a href={artist.facebook_page_url} target="_blank">Facebook</a></div>
    </div>
  );
};



export default Artist;