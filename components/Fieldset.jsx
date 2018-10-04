import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Base from "./Base";

const Fieldset = props => {
    const { label, noLegend } = props;

    const Fieldset = styled(Base.withComponent('fieldset'))``;

    return (
        <Fieldset {...props}>
            <legend hidden={noLegend}>
                {label}
            </legend>
            {props.children}
        </Fieldset>
    );
};

Fieldset.propTypes = {
    legend: PropTypes.string.isRequired,
    noLegend: PropTypes.bool
};

Fieldset.defaultProps = {
    noLegend: false
};

export default Fieldset;
