import React, { Fragment } from "react";
import styled from "styled-components";
import Base from "./Base";
import PropTypes from "prop-types";

const Button = props => {
  const Button = styled(Base.withComponent("button"))`
    &[aria-pressed]:focus {
      outline: none;
    }

    &[aria-pressed="true"]:focus {
      outline: 2px solid transparent;
    }
  `;

  if (props.type === "toggle") {
    return <Button aria-pressed={props.pressed} {...props} />;
  }

  if (props.type === "toggle-dynamic") {
    return (
      <Fragment>
        <Button
          aria-labelledby={props.labelId ? props.labelId : null}
          aria-checked={props.checked}
          {...props}
        />
      </Fragment>
    );
  }

  if (props.type === "switch") {
    return (
      <Button role="switch" aria-checked={props.checked} aria-labelledby={props.labelId ? props.labelId : null}>
        <span className="button-switch-on">{props.onText}</span>
        <span className="button-switch-off">{props.offText}</span>
      </Button>
    );
  }

  return <Button {...props} />;
};

Button.propTypes = {
  type: PropTypes.string,
  pressed: PropTypes.bool,
  checked: PropTypes.bool,
  onText: PropTypes.string,
  offText: PropTypes.string,
  labelId: PropTypes.string
};

Button.defaultProps = {
  type: "button",
  pressed: false,
  checked: false
};

export default Button;
