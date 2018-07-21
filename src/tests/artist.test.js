import Artist from "../components/artist";
import React from 'react';
import ReactDOM from 'react-dom';

it('renders Artist without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < Artist / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

