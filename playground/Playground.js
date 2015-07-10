import React from 'react';

// add whatever you want to play with
import mdor from '../index';

const {Slider, Tooltip} = mdor;

class Playground extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {};
  }
}

React.render(<Playground />, document.body);
