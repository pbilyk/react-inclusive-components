import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Base from "./Base";
import Label from "./Label";

const InputView = styled(Base.withComponent("input"))`
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

const Input = props => {
  const {
    label,
    id,
    labelHidden,
    custom,
    customClassName,
    labelClassName,
    labelPosition
  } = props;

  return (
    <Fragment>
      {!custom &&
        labelPosition === "before" && (
          <Label
            className={`${labelClassName ? labelClassName : ""}`}
            htmlFor={id}
            hidden={labelHidden}
          >
            {label}
          </Label>
        )}
      {!custom && <InputView {...props} />}
      {!custom &&
        labelPosition === "after" && (
          <Label
            className={`${labelClassName ? labelClassName : ""}`}
            htmlFor={id}
            hidden={labelHidden}
          >
            {label}
          </Label>
        )}
      {custom &&
        labelPosition === "after" && (
          <Label
            className={`${labelClassName ? labelClassName : ""}`}
            htmlFor={id}
            hidden={labelHidden}
          >
            <InputView hidden {...props} />
            <span
              className={`input-custom-element ${
                customClassName ? customClassName : ""
              }`}
            />
            {label}
          </Label>
        )}
      {custom &&
        labelPosition === "before" && (
          <Label
            className={`${labelClassName ? labelClassName : ""}`}
            htmlFor={id}
            hidden={labelHidden}
          >
            <InputView hidden {...props} />
            {label}
            <span
              className={`input-custom-element ${
                customClassName ? customClassName : ""
              }`}
            />
          </Label>
        )}
    </Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  labelPosition: PropTypes.string,
  custom: PropTypes.bool,
  customClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  labelHidden: PropTypes.bool
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  labelPosition: "before",
  custom: false
};

export default Input;
