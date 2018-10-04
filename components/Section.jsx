import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import Base from  "./Base";
import Heading from "./Heading";

const Section = props => {
    const { level, label, labelId, noHeading } = props;

    const Section = styled(Base.withComponent('section'))``;

    return (
        <Section aria-labelledby={labelId} {...props}>
            <Heading id={labelId} level={`h${level}`} hidden={noHeading}>
                {label}
            </Heading>
            {props.children}
        </Section>
    );
};

Section.propTypes = {
    label: PropTypes.string.isRequired,
    labelId: PropTypes.string.isRequired,
    level: PropTypes.number,
    noHeading: PropTypes.bool
};

Section.defaultProps = {
    level: 1,
    noHeading: false,
}

export default Section;
