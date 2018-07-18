import React, {
    Component
} from 'react';
import axios from 'axios';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            artistName: "teste"

        };
        this.searchArtist = this.searchArtist.bind(this);
    }

    searchArtist() {
        axios.get('https://rest.bandsintown.com/artists/queens%20of%20the%20stone%20age?app_id=strignsad')
            .then(function (response) {
                // handle success
                this.props.updateArtist(response.data);
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
        return (
            <div className="App" >
                <input type="text" placeholder="Search any band" />
                <button onClick={this.searchArtist}>Teste </button>
            </div>
        );
    }
}



export default SearchBar;