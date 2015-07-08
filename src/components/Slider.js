import React from 'react';

const  IE_CONTAINER = 'mdl-slider__ie-container';
const  SLIDER_CONTAINER = 'mdl-slider__container';
const  BACKGROUND_FLEX = 'mdl-slider__background-flex';
const  BACKGROUND_LOWER = 'mdl-slider__background-lower';
const  BACKGROUND_UPPER = 'mdl-slider__background-upper';
const  IS_LOWEST_VALUE = 'is-lowest-value';
const  IS_UPGRADED = 'is-upgraded';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isIE_: window && window.navigator && window.navigator.msPointerEnabled,
        };

        this.props = {};
    }

    render() {
        var style = {
            width: this.props.width,
            maxWidth: this.props.maxWidth,
        };
        if (this.state.isIE_) {
            return (
                <div className={IE_CONTAINER}>
                    <input className="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="0" tabindex="0" />
                </div>
            );
        } else {
            return (
                <div className={SLIDER_CONTAINER}>
                    <input style={style} className={'mdl-slider mdl-js-slider ' + IS_UPGRADED} type="range" min="0" max="100" value="0" tabindex="0" />
                    <div className={BACKGROUND_FLEX}>
                        <div className={BACKGROUND_LOWER}></div>
                        <div className={BACKGROUND_UPPER}></div>
                    </div>
                </div>
            );
        }
    }
};

export default Slider;