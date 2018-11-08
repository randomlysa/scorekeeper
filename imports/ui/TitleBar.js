import React from 'react'
import PropTypes from 'prop-types'; // ES6

export default class TitleBar extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  } // render()
} // class TitleBar

TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};
