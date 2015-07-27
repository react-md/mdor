import React from 'react';

// add whatever you want to play with
import mdor from './index';

const {Badge, Button, Slider, Tooltip, Checkbox, Radio, RadioGroup, Spinner} = mdor;

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
        <div className="row">
          <Checkbox ripple="true" checked onChange={(checked)=>{console.log(checked);}}/>
        </div>
        <div className="row">
          <RadioGroup defaultValue="op1">
            <Radio label="option1" style={{marginLeft: 10}} value="op1" ripple checked/>
            <Radio label="option2" style={{marginLeft: 10}} value="op2" />
            <Radio label="option2" style={{marginLeft: 10}} value="op3" disabled/>
          </RadioGroup>
        </div>
        <div className="row">
          <Button ripple="true" type="mini-fab" colored ><i className="material-icons">mood</i></Button>
        </div>
        <div className="row">
          <Badge className="asdf" style={{color: 'rgba(0, 0, 0, 0.24)'}} iconify icon="12">account_box</Badge>
        </div>
        <div className="row">
          <Spinner className="passClassname" active={true} />
          <Spinner className="passClassname" active={true} single-color={true} style={{marginLeft: 30}} />
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
