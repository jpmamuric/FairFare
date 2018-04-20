import React, { Component } from 'react';

import Icon from './Icon';

class Rating extends Component {
  state = {
    value: this.props.stars,
    dynamicValue: this.props.stars
  };

  handleClick(newValue) {
    this.setState({
      value: newValue,
      dynamicValue: newValue
    });
  }

  handleMouseEnter (newValue) {
    this.setState({ dynamicValue: newValue });
  }

  handleMouseLeave(newValue) {
    this.setState({ dynamicValue: this.state.value });
  }


  render(){
    let starsIcons = [];
    for (let i = 0; i <= 5; i++) {
      if (i <= this.state.dynamicValue) {
        starsIcons.push(
          <Icon
            name='star'
            key={i}
            mouseEnter={this.handleMouseEnter.bind(this, i)}
            mouseLeave={this.handleMouseLeave.bind(this, i)}
            onClick={this.handleClick.bind(this, i)}
            />
        );
      }
    }

    return <div>{starsIcons}</div>;

  }
}

export default Rating;
