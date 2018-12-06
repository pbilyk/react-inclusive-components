import React from "react";
import PropTypes from "prop-types";

const Label = props => {
  const { hidden, className= "", ...rest } = props;

  return (
    <label
      {...rest}
      className={hidden ? `ric-hidden ${className}` : className}
    />
  );
};

Label.propTypes = {
  hidden: PropTypes.bool
};

export default Label;
