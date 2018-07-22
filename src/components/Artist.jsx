import React from 'react';
import ArtistEvent from './ArtistEvent.jsx';

const Artist = ({ artist, events }) => {
  if (!artist) {
    return (
      <div>Search an artist...</div>
    );
  }

  let teste = { "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/8305698.jpeg", "mbid": "728ea90d-279b-4201-a8c4-597830883150", "facebook_page_url": "https://www.facebook.com/paramore", "image_url": "https://s3.amazonaws.com/bit-photos/large/8305698.jpeg", "name": "Paramore", "id": "203", "tracker_count": 3292522, "upcoming_event_count": 55, "url": "https://www.bandsintown.com/a/203?came_from=267&app_id=strignsad" }
  return (
    <div className="card">
      <img src={artist.thumb_url} className="artist-picture" />
      
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