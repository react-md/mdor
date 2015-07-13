import React from 'react';
import classnames from 'classnames';

const IS_ACTIVE = 'is-active';

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            mainElementStyle: {},
        };

        this.boundMouseEnterHandler = this.handleMouseEnter.bind(this);
        this.boundMouseLeaveHandler = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(event) {
        event.stopPropagation();

        let mainElementStyle = {};
        let props = this.container.getBoundingClientRect();
        let left = props.left + (props.width / 2);
        let marginLeft = -1 * (this.mainElement.offsetWidth / 2);

        if (left + marginLeft < 0) {
            mainElementStyle.left = 0;
            mainElementStyle.marginLeft = 0;
        } else {
            mainElementStyle.left = left;
            mainElementStyle.marginLeft = marginLeft;
        }

        mainElementStyle.top = props.top + props.height + 10;
        window.addEventListener('scroll', this.boundMouseLeaveHandler, false);
        window.addEventListener('touchmove', this.boundMouseLeaveHandler, false);
        this.setState({
            mainElementStyle: mainElementStyle,
            isActive: true,
        });
    }

    handleMouseLeave(event) {
        event.stopPropagation();

        this.setState({
            isActive: false,
        });
        window.removeEventListener('scroll', this.boundMouseLeaveHandler);
        window.removeEventListener('touchmove', this.boundMouseLeaveHandler, false);

    }

    render() {
        let classString = classnames('mdl-tooltip', {
            'is-active': this.state.isActive,
        });
        return (
            <div ref="container" style={{display: 'inline-block'}}>
                <div className="icon material-icons" onMouseEnter={this.boundMouseEnterHandler} onMouseLeave={this.boundMouseLeaveHandler} onClick={this.boundMouseEnterHandler} >{this.props.iconName}</div>
                <div className={classString} style={this.state.mainElementStyle} ref="mainElement" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </div>
        );
    }

    componentDidMount() {
        this.mainElement = this.refs.mainElement.getDOMNode();
        this.container = this.refs.container.getDOMNode();
    }
};

Tooltip.propTypes = {
    iconName: React.PropTypes.string,
    content: React.PropTypes.string,
};

Tooltip.defaultProps = {
    iconName: 'add',
    content: 'Follow',
};

export default Tooltip;
