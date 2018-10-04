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

  if (props.type === "switch") {
    return (
      <Fragment>
        <span id={props.labelId}>{props.label}</span>
        <Button aria-labelledby={props.labelId} aria-checked={props.checked} {...props} />
      </Fragment>
    );
  }

  return <Button {...props} />;
};

Button.propTypes = {
  type: PropTypes.string,
  pressed: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelId: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  pressed: false,
  checked: false
};

export default Button;
