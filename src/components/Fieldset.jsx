import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Base from "./Base";

const Fieldset = props => {
    const { legend, hideLegend } = props;

    const Fieldset = styled(Base.withComponent('fieldset'))``;

    return (
        <Fieldset {...props}>
            <legend hidden={hideLegend}>
                {legend}
            </legend>
            {props.children}
        </Fieldset>
    );
};

Fieldset.propTypes = {
    legend: PropTypes.string.isRequired,
    hideLegend: PropTypes.bool
};

Fieldset.defaultProps = {
    hideLegend: false
};

export default Fieldset;
