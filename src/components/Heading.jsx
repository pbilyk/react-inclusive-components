import React from "react";
import PropTypes from "prop-types";

import "../styles/styles.css";

const Heading = props => {
  const { element, className = "", hidden, ...rest } = props;

  const Element = element;

  return (
    <Element
      className={hidden ? `ric-hidden ${className}` : className}
      {...rest}
    />
  );
};

Heading.propTypes = {
  hidden: PropTypes.bool,
  element: PropTypes.string
};

Heading.defaultProps = {
  element: "h1"
};

export default Heading;
