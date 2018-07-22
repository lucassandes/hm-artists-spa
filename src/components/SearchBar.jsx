import React, {
    Component
} from 'react';
import axios from 'axios';

import Logo from '../img/logo.svg';
import IconSearch from '../img/icon_search.svg';

const API_URL = 'https://rest.bandsintown.com';
const API_KEY = 'somekey';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            artistName: "paramore"
        };
        this.searchArtist = this.searchArtist.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ artistName: event.target.value });
    }

    componentDidMount(){
       this.searchArtist();
    }
    searchArtist() {

        axios.get(`${API_URL}/artists/${this.state.artistName}?app_id=${API_KEY}`)
            .then((response) => {
                // handle success
                this.props.updateState("artist", response.data);
                console.log("Boolean", Boolean(response.data));
                if(response.data) {
                    this.searchEvents();
                } else {
                    this.props.updateState("events", null);
                }
                
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    searchEvents() {

        axios.get(`${API_URL}/artists/${this.state.artistName}/events?app_id=${API_KEY}`)
            .then((response) => {
                // handle success
                this.props.updateState("events", response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    render() {
        const { artistName } = this.state;
        const handleChange = this.handleChange;
        return (
            <div className="header" >
                <div className="container">
                    <div className="row d-flex-center">
                        <div className="six columns">
                            <img src={Logo} className="u-pull-left" alt="logo" />
                        </div>
                        
                        <div className="six columns p-relative">
                            <input type="text" className="u-full-width search-bar__input" placeholder="Search any band" value={artistName} onChange={this.handleChange} />
                            <button className="search-bar__button d-flex-center" onClick={this.searchArtist}>
                                <img src={IconSearch} className="search-bar__icon" alt="Icon Search" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default SearchBar;