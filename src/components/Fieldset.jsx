import React from "react";
import PropTypes from "prop-types";

import "../styles/styles.css";

const Fieldset = props => {
  const {
    legend,
    hideLegend,
    children,
    hidden,
    className= "",
    ...rest
  } = props;

  return (
    <fieldset
      {...rest}
      className={hidden ? `ric-hidden ${className}` : className}
    >
      <legend hidden={hideLegend}>{legend}</legend>
      {children}
    </fieldset>
  );
};

Fieldset.propTypes = {
  hidden: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  hideLegend: PropTypes.bool
};

Fieldset.defaultProps = {
  hideLegend: false
};

export default Fieldset;
