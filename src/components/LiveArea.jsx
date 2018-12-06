import React from "react";
import PropTypes from "prop-types";

const LiveArea = props => {
  const { hidden, className= "", ...rest } = props;

  return (
    <div
      aria-live="polite"
      role="status"
      className={hidden ? `ric-hidden ${className}` : className}
      {...rest}
    />
  );
};

LiveArea.propTypes = {
  hidden: PropTypes.bool
};

export default LiveArea;
