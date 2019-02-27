import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../styles/styles.css";

const Button = props => {
  const {
    type,
    hidden,
    pressed,
    checked,
    onText,
    offText,
    classNameToggleActive,
    classNameToggleInActive,
    className = "",
    labelId,
    ...rest
  } = props;

  if (type === "toggle") {
    return (
      <button
        {...rest}
        type="button"
        className={hidden ? `ric-hidden ${className}` : className}
        aria-pressed={pressed}
      />
    );
  }

  if (type === "toggle-dynamic") {
    return (
      <button
        {...rest}
        type="button"
        className={hidden ? `ric-hidden ${className}` : className}
        aria-labelledby={labelId ? labelId : null}
        aria-checked={checked}
      />
    );
  }

  if (type === "switch") {
    return (
      <button
        {...rest}
        type="button"
        className={hidden ? `ric-hidden ${className}` : className}
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId ? labelId : null}
      >
        <span className={classNameToggleActive}>{onText}</span>
        <span className={classNameToggleInActive}>{offText}</span>
      </button>
    );
  }

  return (
    <button
      {...rest}
      type={type}
      className={hidden ? `ric-hidden ${className}` : className}
    />
  );
};

Button.propTypes = {
  hidden: PropTypes.bool,
  type: PropTypes.string,
  pressed: PropTypes.bool,
  checked: PropTypes.bool,
  onText: PropTypes.string,
  offText: PropTypes.string,
  classNameToggleActive: PropTypes.string,
  classNameToggleInActive: PropTypes.string,
  labelId: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  pressed: false,
  checked: false
};

export default Button;
