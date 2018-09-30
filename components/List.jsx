import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import Base from "./Base";

const List = props => {
  const { type = "ul" } = props;

  const List = styled(Base.withComponent(type))`
    &:empty {
      display: none !important;
    }
  `;

  return <List {...props} />
};

List.propTypes = {
    type: PropTypes.string,
};

export default List;
