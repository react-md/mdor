import React from 'react';
import classnames from 'classnames';

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
            isLowest: true,
            value: parseInt(this.props.value, 10) || 0,
            min: parseInt(this.props.min, 10) || 0,
            max: parseInt(this.props.max, 10) || 100,
            lowerStyle: {},
            upperStyle: {},
        };

        this.props = {};
        this.boundInputHandler = this.onInput_.bind(this);
        this.boundChangeHandler = this.onChange_.bind(this);
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
        this.getCurrentValue = this.getCurrentValue.bind(this);
        this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this)
        this.updateValueStyles_.bind(this);
    }

    onInput_() {
        this.boundChangeHandler();
    }

    onChange_() {
        let sliderValue = this.getCurrentValue();
        this.updateValueStyles_(sliderValue);
        this.props.onChange && this.props.onChange(sliderValue);
    }

    onMouseUp_(event) {
        event.target.blur();
        this.props.onMouseUp && this.props.onMouseUp(this.getCurrentValue());
    }

    getCurrentValue() {
        let mainElement = this.refs.mainElement.getDOMNode();
        return mainElement.value;
    }

    onContainerMouseDown_(event) {
        // If this click is not on the parent element (but rather some child)
        // ignore. It may still bubble up.
        if (event.target !== this.mainElement.parentElement) {
            return;
        }

        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            target: event.target,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.mainElement.getBoundingClientRect().y
        });
        this.mainElement.dispatchEvent(newEvent);
    }

    updateValueStyles_() {
        let value = this.mainElement.value;
        let fraction = (value - this.state.min) /
            (this.state.max - this.state.min);

        let isLowest;

        if (fraction === 0) {
            isLowest = true;
        } else {
            isLowest = false;
        }

        if (!this.isIE_) {
            this.setState({
                value: value,
                isLowest: isLowest,
                lowerStyle: {
                    flex: fraction,
                    WebkitFlex: fraction
                },
                upperStyle: {
                    flex: 1 - fraction,
                    WebkitFlex: 1 - fraction,
                }
            });
        } else {
            this.setState({
                value: value,
                isLowest: isLowest,
            });
        }

    }

    render() {
        let containerStyle = {
            width: this.props.width,
            maxWidth: this.props.maxWidth,
        };

        let mainElementClass = classnames(
            'mdl-slider',
            'mdl-js-slider',
            IS_UPGRADED, {
            'is-lowest-value': this.state.isLowest,
        });

        let mainElement = (<input
                            ref="mainElement"
                            onMouseUp={this.boundMouseUpHandler}
                            onMouseDone={this.boundContainerMouseDownHandler}
                            onChange={this.boundChangeHandler}
                            onInput={this.boundInputHandler}
                            className={mainElementClass}
                            type="range"
                            min={this.state.min}
                            max={this.state.max}
                            value={this.state.value}
                            tabIndex="0" />);

        if (this.state.isIE_) {
            return (
                <div style={containerStyle} className={IE_CONTAINER}>
                    {mainElement}
                </div>
            );
        } else {
            return (
                <div style={containerStyle} className={SLIDER_CONTAINER}>
                    {mainElement}
                    <div className={BACKGROUND_FLEX}>
                        <div className={BACKGROUND_LOWER} style={this.state.lowerStyle}></div>
                        <div className={BACKGROUND_UPPER} style={this.state.upperStyle}></div>
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this.mainElement = this.refs.mainElement.getDOMNode();
        this.updateValueStyles_();
    }
};

Slider.propTypes = {
    width: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    maxWidth: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    max: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    min: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]),
    onChange: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
};
Slider.defaultProps = {
    width: null,
    maxWidth: null,
};


export default Slider;
