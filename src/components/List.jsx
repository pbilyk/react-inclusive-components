import React from "react";
import PropTypes from "prop-types";

const List = props => {
  const { type, hidden, className = "", ...rest } = props;

  const Element = type;

  const listClassname = props.hidden
    ? `ric-hidden ric-list ${className}`
    : className;

  return <Element className={listClassname} {...rest} />;
};

List.propTypes = {
  hidden: PropTypes.bool,
  type: PropTypes.string
};

List.defaultProps = {
  type: "ul"
};

export default List;
