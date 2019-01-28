import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Label from "./Label";

import "../styles/styles.css";

const TextArea = props => {
  const {
    label,
    id,
    hidden,
    labelHidden,
    className = "",
    labelClassName = "",
    labelPosition,
    ...rest
  } = props;

  const textAreaClassname = `${
    hidden ? "ric-hidden" : ""
  } ${className} ric-textarea`;

  return (
    <Fragment>
      {labelPosition === "before" && (
        <Label
          className={`${labelClassName} ${labelHidden ? "ric-hidden" : ""}`}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <textarea id={id} {...rest} className={textAreaClassname} />
      {labelPosition === "after" && (
        <Label
          className={`${labelClassName} ${labelHidden ? "ric-hidden" : ""}`}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
    </Fragment>
  );
};

TextArea.propTypes = {
  hidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  labelPosition: PropTypes.string,
  labelClassName: PropTypes.string,
  labelHidden: PropTypes.bool
};

TextArea.defaultProps = {
  placeholder: "",
  labelPosition: "before"
};

export default TextArea;
