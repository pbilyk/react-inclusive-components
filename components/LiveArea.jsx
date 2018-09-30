import React from 'react';
import styled from "styled-components";
import Base from "./Base";

const LiveArea = props => {
  const Area = styled(Base)``;

  return (
    <Area aria-live="polite" role="status" {...props}/>
  );
};

export default LiveArea;
