import React, { Component } from 'react';
import logo from './logo.svg';

import Artist from './components/Artist.jsx';
import Home from './components/Home.jsx';
import './css/App.css';
import SearchBar from './components/SearchBar.jsx';
import ArtistEventList from './components/ArtistEventList.jsx';
class App extends Component {
  constructor(){
    super();
    this.state = {
      artist: null,
      events: null
    };
    this.updateState = this.updateState.bind(this);
  }


  updateState(key, value) {
    this.setState({ [key]: value});
  }
  
  render() {
    const {artist, events} = this.state;
    return (
     
        <div className="App">
          <SearchBar updateState={this.updateState} />
          <Artist artist={artist} events={events}/>
        
          <ArtistEventList events={events} />
        </div>
       
      
    );
  }
}

export default App;
