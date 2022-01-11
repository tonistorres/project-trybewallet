import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, disabled } = this.props;
    return (
      <button type="button" onClick={ onClick } disabled={ disabled }>
        { label }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequerid;
