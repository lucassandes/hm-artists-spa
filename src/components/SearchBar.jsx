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
        this.state = {
            artistName: "",
        };
        this.searchArtist = this.searchArtist.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ artistName: event.target.value });
    }



    onFormSubmit(event) {
        event.preventDefault();

        this.searchArtist();

    }

    searchArtist() {
        if (this.state.artistName) {
            this.props.updateState("isArtistLoading", true);
            this.props.updateState("isEventsLoading", true);
            axios.get(`${API_URL}/artists/${this.state.artistName}?app_id=${API_KEY}`)
                .then((response) => {
                    // handle success
                    this.props.updateState("artist", response.data);
                    if (response.data) {
                        this.searchEvents();

                    } else {
                        this.props.updateState("events", null);
                    }
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(() => {
                    this.setState({ artistName: "" });
                    this.props.updateState("isArtistLoading", false);
                });

        }
    }

    searchEvents() {
        this.props.updateState("isEventsLoading", true);

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
            .then(() => {
                this.props.updateState("isEventsLoading", false);
                // always executed
            });

    }
    render() {
        const { artistName } = this.state;
        return (
            <div className="header" >
                <div className="container">
                    <div className="row d-flex-center">
                        <div className="six columns">
                            <img src={Logo} className="u-pull-left" alt="logo" />
                        </div>

                        <div className="six columns p-relative">
                            <form onSubmit={this.onFormSubmit}>
                                <input type="text" className="u-full-width search-bar__input" placeholder="Search any band" value={artistName} onChange={this.handleChange} />
                                <button type="submit" className="search-bar__button d-flex-center" >
                                    <img src={IconSearch} className="search-bar__icon" alt="Icon Search" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default SearchBar;