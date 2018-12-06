import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Label from "./Label";

import "../styles/styles.css";

const Input = props => {
  const {
    label,
    id,
    hidden,
    labelHidden,
    custom,
    className= "",
    customClassName= "",
    labelClassName= "",
    labelPosition,
    ...rest
  } = props;

  const inputClassname = `${hidden ? "ric-hidden" : ""} ${className} ric-input`;

  return (
    <Fragment>
      {!custom &&
        labelPosition === "before" && (
          <Label
            className={`${labelClassName} ${labelHidden ? "ric-hidden" : ""}`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
      {!custom && <input id={id} {...rest} className={inputClassname} />}
      {!custom &&
        labelPosition === "after" && (
          <Label
            className={`${labelClassName} ${labelHidden ? "ric-hidden" : ""}`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
      {custom &&
        labelPosition === "after" && (
          <Label
            className={`${labelClassName ? labelClassName : ""} ${labelHidden &&
              "ric-hidden"}`}
            htmlFor={id}
          >
            <input id={id} {...rest} className={`${inputClassname} ric-hidden`} />
            <span className={`input-custom-element ${customClassName}`} />
            {label}
          </Label>
        )}
      {custom &&
        labelPosition === "before" && (
          <Label
            className={`${labelClassName}  ${labelHidden ? "ric-hidden" : ""}`}
            htmlFor={id}
          >
            <input id={id} {...rest} className={`${inputClassname} ric-hidden`} />
            {label}
            <span className={`input-custom-element ${customClassName}`} />
          </Label>
        )}
    </Fragment>
  );
};

Input.propTypes = {
  hidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  labelPosition: PropTypes.string,
  custom: PropTypes.bool,
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
