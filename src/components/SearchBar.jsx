import React, {
    Component
} from 'react';
import axios from 'axios';

const API_URL = 'https://rest.bandsintown.com';
const API_KEY = 'somekey';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            artistName: ""
        };
        this.searchArtist = this.searchArtist.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ artistName: event.target.value });
    }

    searchArtist() {

        axios.get(`${API_URL}/artists/${this.state.artistName}?app_id=${API_KEY}`)
            .then((response) => {
                // handle success
                this.props.updateState("artist", response.data);
                this.searchEvents();
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
            <div className="App" >
                <input type="text" placeholder="Search any band" value={artistName} onChange={this.handleChange} />
                <button onClick={this.searchArtist}>Teste </button>
            </div>
        );
    }
}



export default SearchBar;