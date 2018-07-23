import ArtistEventList from "../components/ArtistEventList.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
it('renders Artist without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < ArtistEventList / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

