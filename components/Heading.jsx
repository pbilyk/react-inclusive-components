import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Base from "./Base";

const Heading = props => {
    const { level = "h1" } = props;

    const Heading = styled(Base.withComponent(level))``;

    return <Heading {...props}/>
};


Heading.propTypes = {
    level: PropTypes.string
}

export default Heading;
