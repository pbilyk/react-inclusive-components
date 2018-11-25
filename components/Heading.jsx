import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Base from "./Base";

const Heading = props => {
    const { element } = props;

    const Heading = styled(Base.withComponent(element))``;

    return <Heading {...props}/>
};


Heading.propTypes = {
    level: PropTypes.string
}

Heading.defaultProps = {
    element: "h1"
}

export default Heading;
