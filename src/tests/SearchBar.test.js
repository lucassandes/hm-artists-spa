import React from "react";
import { mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/SearchBar.jsx';
configure({ adapter: new Adapter() });

describe("SearchBar", () => {
    let props;
    let mountedSearchBar;
    const searchBar = () => {
        if (!mountedSearchBar) {
            mountedSearchBar = mount(
                <SearchBar {...props} />
            );
        }
        return mountedSearchBar;
    }

    beforeEach(() => {
        props = {
            updateState: undefined,

        };
        mountedSearchBar = undefined;
    });

    // All tests will go here
    it("always renders a div", () => {
        const divs = searchBar().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});


