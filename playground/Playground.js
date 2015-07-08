import React from 'react';

// add whatever you want to play with
import mdor from '../index';

let {Button, Slider} = mdor;

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Slider />;
    }
};

React.render(<Playground />, document.body);