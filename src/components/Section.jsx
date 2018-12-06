import React from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";

const Section = props => {
  const {
    level,
    label,
    labelId,
    noHeading,
    className= "",
    hidden,
    ...rest
  } = props;

  return (
    <section aria-labelledby={labelId} className={hidden ? "ric-hidden" : className} {...rest}>
      <Heading id={labelId} element={`h${level}`} className={noHeading ? "ric-hidden" : ""}>
        {label}
      </Heading>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  hidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  level: PropTypes.string,
  noHeading: PropTypes.bool
};

Section.defaultProps = {
  level: "1",
  noHeading: false
};

export default Section;
