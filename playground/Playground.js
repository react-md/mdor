import React from 'react';

// add whatever you want to play with
import mdor from '../index';

let {Button} = mdor;

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Button />;
    }
};

React.render(<Playground />, document.body);