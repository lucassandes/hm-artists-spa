import React, { Component } from 'react';

import Artist from './components/Artist.jsx';
import './css/App.css';
import SearchBar from './components/SearchBar.jsx';
import ArtistEventList from './components/ArtistEventList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: null,
      events: null,
      isArtistLoading: false,
      isEventsLoading: false,
    };
    this.updateState = this.updateState.bind(this);
  }


  updateState(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { artist, events, isArtistLoading, isEventsLoading } = this.state;
    return (

      <div className="App">
        <SearchBar updateState={this.updateState} />

        <div className="container">
          <div className="row">
            <div className="four columns">
              <Artist artist={artist} isArtistLoading={isArtistLoading} />
            </div>

            {/* In case artist is not found, don't show eventlist */}
            {artist !== "" &&
              <div className="eight columns">
                <ArtistEventList events={events} isEventsLoading={isEventsLoading} />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
