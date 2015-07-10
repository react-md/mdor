import React from 'react';

// add whatever you want to play with
import mdor from '../index';

let {Button, Slider, Tooltip} = mdor;

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Tooltip content="hi all" />
                </div>
                <div className="row">
                    <Slider width="50vw" maxWidth="300" value="10" />
                </div>
            </div>
        );
    }
};

React.render(<Playground />, document.body);