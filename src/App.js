import React, { Component } from 'react';
import logo from './logo.svg';

import Artist from './components/artist.js';
import Home from './components/home';
import './css/App.css';
import SearchBar from './components/searchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      artistName: "teste"

    };
  }
  render() {
    return (
     
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
         
          <SearchBar/>
          <Artist artist={this.state}/>
        </div>
       
      
    );
  }
}

export default App;
