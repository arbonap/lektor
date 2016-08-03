
// import React for testing
import React from 'react';

// import shallow rendering from enzyme
import { shallow } from 'enzyme';

// import App (aka Lektor admin page)
import App from '../static/js/views/app';

// import container component that holds component
// we want to test
//how is EditPage being passed to App.jsx???
import DialogSlot '../static/js/components/dialogslot'

// importing component we want to test
import EditPage from '../static/js/views/editpage';


describe('App', function() {
    // is this an Enyzme function that
    // creates the rendering so we can test?
    beforeEach( function() {
        const test_wrapper = shallow(<App />);
    });

    // test to check if the string 'Title is rendered'
    // expect() is looking for 1 instance of 'Title' on the 
    // page?
        it('render the title', function() {
        expect(test_wrapper.find('Title')).to.have.length(1);
    })
});



