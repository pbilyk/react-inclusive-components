import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Base from "./Base";
import Label from "./Label";

const StyledInput = styled(Base.withComponent("input"))`
  ::-webkit-input-placeholder {
    color: #444;
    font-style: italic;
  }
  ::-moz-placeholder {
    color: #444;
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: #444;
    font-style: italic;
  }
  :-moz-placeholder {
    color: #444;
    font-style: italic;
  }
`;

class InputView extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    return (
      <StyledInput
        {...this.props}
        type={this.props.type}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

class Input extends Component {
  render() {
    const {
      label,
      id,
      placeholder,
      type = "text",
      labelPosition="before",
      labelHidden,
    } = this.props;

    return (
      <Fragment>
        {labelPosition === 'before' && (
          <Label htmlFor={id} hidden={labelHidden}>
            {label}
          </Label>
        )}
        <InputView type={type} id={id} placeholder={placeholder} {...this.props} />
        {labelPosition === 'after' && (
          <Label htmlFor={id} hidden={labelHidden}>
            {label}
          </Label>
        )}
      </Fragment>
    );
  }
}

Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    labelPosition: PropTypes.string,
    labelHidden: PropTypes.bool,
};

export default Input;
