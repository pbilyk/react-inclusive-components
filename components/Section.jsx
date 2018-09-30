import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import Base from  "./Base";
import Heading from "./Heading";

const Section = props => {
    const { label, labelId, level = 1, noHeading } = props;

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
    label: PropTypes.string,
    labelId: PropTypes.string,
    level: PropTypes.number,
    noHeading: PropTypes.bool
};

export default Section;
