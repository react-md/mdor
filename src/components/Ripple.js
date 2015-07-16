import React from 'react';
import classnames from 'classnames';
import Constants from '../lib/Constants';

// ignore: false, hierarchical: false => button
// ignore: true, hierarchical: false => checkbox, icon-toggle, radio, switch, menu
// ignore: true, hierarchical: true => menu (menu_item), layout (tab)

class Ripple extends React.Component {
    constructor(props) {
        super(props);

        let classNames = {};

        classNames[Constants.Ripple.RIPPLE] = true;
        classNames[Constants.Ripple.IS_VISIBLE] = false;

        this.state = {
            frameCount: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            ignoringMouseDown: false,
            classNames: classNames
        };

        this.props = {};
        this.boundSetRippleSize = this.setRippleSize_.bind(this);
        this.boundTransformRipple = this.transformRipple_.bind(this);
        this.boundAnimFrameHandler = this.animFrameHandler_.bind(this);
        this.boundDownHandler = this.downHandler_.bind(this);
        this.boundUpHandler = this.upHandler_.bind(this);
    }

    setRippleSize_(size) {
        this.mainElement.style.width = size + 'px';
        this.mainElement.style.height = size + 'px';
    }

    addRippleClass_(className) {
        let classNames = this.state.classNames;

        classNames[className] = true;
        this.setState({
            classNames: classNames
        });
    }

    removeRippleClass_(className) {
        let classNames = this.state.classNames;

        classNames[className] = false;
        this.setState({
            classNames: classNames
        });
    }

    transformRipple_(start) {
        let transformString;
        let scale;
        let offset = 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)';

        if (start) {
            scale = Constants.Ripple.INITIAL_SCALE;
        } else {
            scale = Constants.Ripple.FINAL_SCALE;
            if (this.props.recenter) {
                offset = 'translate(' + this.state.width / 2 + 'px, ' + this.state.height / 2 + 'px)';
            }
        }

        transformString = 'translate(-50%, -50%) ' + offset + ' ' + scale;

        this.mainElement.style.webkitTransform = transformString;
        this.mainElement.style.msTransform = transformString;
        this.mainElement.style.transform = transformString;

        if (start) {
            this.removeRippleClass_(Constants.Ripple.IS_ANIMATING);
        } else {
            this.addRippleClass_(Constants.Ripple.IS_ANIMATING);
        }
    }

    animFrameHandler_() {
        let frameCount = this.state.frameCount;
        
        if (frameCount-- > 0) {
            this.setState({
                frameCount: frameCount
            }, () => {
                window.requestAnimationFrame(this.boundAnimFrameHandler);
            }.bind(this));
        } else {
            this.boundTransformRipple(false);
        }
    }

    downHandler_(event) {
        let frameCount = this.state.frameCount;
        let rect;
        let clientX
        let clientY;
        let x;
        let y;
        let width;
        let height;
        let rippleSize;

        this.addRippleClass_(Constants.Ripple.IS_VISIBLE);

        if (frameCount > 0) {
            return;
        }

        frameCount = 1;
        this.setState({
            frameCount: frameCount
        });

        rect = event.currentTarget.getBoundingClientRect();

        if (event.clientX === 0 && event.clientY === 0) {
            x = Math.round(rect.width / 2);
            y = Math.round(rect.height / 2);
        } else {
            clientX = event.clientX ? event.clientX : event.touches[0].clientX;
            clientY = event.clientY ? event.clientY : event.touches[0].clientY;
            x = Math.round(clientX - rect.left);
            y = Math.round(clientY - rect.top);
        }
        this.setState({
            x: x,
            y: y
        }, () => {
            this.boundTransformRipple(true);
            window.requestAnimationFrame(this.boundAnimFrameHandler);
        }.bind(this));
    }

    upHandler_() {
        this.removeRippleClass_(Constants.Ripple.IS_VISIBLE);
    }

    render() {
        return (
            <span className={this.props.className} ref="containerElement"
                onMouseDown={this.boundDownHandler}
                onTouchStart={this.boundDownHandler}
                onMouseUp={this.boundUpHandler}
                onMouseLeave={this.boundUpHandler}
                onTouchEnd={this.boundUpHandler}
                onBlur={this.boundUpHandler}>
                <span className={classnames(this.state.classNames)} ref="mainElement">
                </span>
            </span>
        );
    }

    componentDidMount() {
        let rect;
        let width;
        let height;
        let rippleSize;

        this.mainElement = this.refs.mainElement.getDOMNode();
        this.containerElement = this.refs.containerElement.getDOMNode();

        rect = this.containerElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;

        rippleSize = Math.sqrt(width * width + height * height) * 2 + 2;
        this.boundSetRippleSize(rippleSize);

        this.setState({
            width: width,
            height: height,
        });
    }
};

Ripple.propTypes = {
    className: React.PropTypes.string,
    recenter: React.PropTypes.bool,
    ignoreEvents: React.PropTypes.bool,
};
Ripple.defaultProps = {
    className: '',
    recenter: false,
    ignoreEvents: false,
};


export default Ripple;
