import React from 'react';
import classnames from 'classnames';
import {List} from 'immutable';

const SPINNER_LAYER_COUNT = 4
const MDL_SPINNER_LAYER = 'mdl-spinner__layer';
const MDL_SPINNER_CIRCLE_CLIPPER = 'mdl-spinner__circle-clipper';
const MDL_SPINNER_CIRCLE = 'mdl-spinner__circle';
const MDL_SPINNER_GAP_PATCH = 'mdl-spinner__gap-patch';
const MDL_SPINNER_LEFT = 'mdl-spinner__left';
const MDL_SPINNER_RIGHT = 'mdl-spinner__right';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.List = List();
        this.init_();
    }

    init_() {
        for (let i = 0; i < SPINNER_LAYER_COUNT; i++) {
            this.createLayer_(i);
        }
    }

    createLayer_(index) {
        this.List = this.List.push(
            <div key={index}>
                <div className={MDL_SPINNER_LAYER + ' ' + MDL_SPINNER_LAYER + '-' + (index+1)}>
                    <div className={MDL_SPINNER_CIRCLE_CLIPPER + ' ' + MDL_SPINNER_LEFT}>
                        <div className={MDL_SPINNER_CIRCLE} />
                    </div>
                    <div className={MDL_SPINNER_GAP_PATCH}>
                        <div className={MDL_SPINNER_CIRCLE} />
                    </div>
                    <div className={MDL_SPINNER_CIRCLE_CLIPPER + ' ' + MDL_SPINNER_RIGHT}>
                        <div className={MDL_SPINNER_CIRCLE} />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let classString;
        let classObject = {
            'is-active': !!this.props['active'],
            'mdl-spinner--single-color': !!this.props['single-color']
        };

        classString = classnames('mdl-spinner mdl-js-spinner is-upgraded', classObject);
        return (
            <div className={classString + ' ' + this.props.className} style={this.props.style}>
                {this.List.toArray()}
            </div>
        );
    }
}

Spinner.propTypes = {
    active: React.PropTypes.bool,
    'single-color': React.PropTypes.bool,
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
Spinner.defaultProps = {
    active: true,
    'single-color': false,
    className: '',
    style: {},
};

export default Spinner;
