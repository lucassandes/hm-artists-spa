

import React from "react";
import { mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Artist from '../components/Artist.jsx';
configure({ adapter: new Adapter() });

describe("Artist", () => {
    let props;
    let mountedArtist;
    const artist = () => {
        if (!mountedArtist) {
            mountedArtist = mount(
                <Artist {...props} />
            );
        }
        return mountedArtist;
    }

    beforeEach(() => {
        props = {
            artist: undefined,
            isArtistLoading: undefined,

        };
        mountedArtist = undefined;
    });

    // All tests will go here
    it("always renders a div", () => {
        const divs = artist().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("when `artist` prop is defined", () => {
        beforeEach(() => {
            props.artist = {
                facebook_page_url: "http://someurl.com",
                id: "123",
                thumb_url: "http://domain.com/someimage.jpg",
                name: "Some Name",
                upcoming_event_count: 10,
            };
        });


        it("applies that wallpaper as a background-image on the wrapping div", () => {
            const image = artist().find("img").first();
            expect(image.props().src).toBe(props.artist.thumb_url);
        });

        it("applies `artist name` correctly", () => {
            const title = artist().find("h1").first();
            expect(title.text()).toBe(props.artist.name);
        });

        it("shows `on tour` badge when artist has concerts", () => {
            const ontour = artist().find(".on-tour-badge").first();
            console.log(ontour);
            expect(ontour.length).toBe(1);
        });

        it("shows `facebook link`", () => {
            const fbLink = artist().find("a").first();
            expect(fbLink.length).toBe(1);
        });

        it("shows applies `facebook link` to element", () => {
            const fbLink = artist().find("a").first();
            expect(fbLink.props().href).toBe(props.artist.facebook_page_url);
        });

       
    });

    describe("when `artist` prop is defined AND artist is not on tour", () => {
        beforeEach(() => {
            props.artist = {
                upcoming_event_count: 0,
            };
        });
     
        it("DOES NOT show `on tour` badge when artist has concerts", () => {
            const ontour = artist().find(".on-tour-badge").first();
            console.log(ontour);
            expect(ontour.length).toBe(0);
        });
    });



});


