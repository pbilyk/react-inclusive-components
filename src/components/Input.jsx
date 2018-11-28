import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Base from "./Base";
import Label from "./Label";

const InputView = styled(Base.withComponent("input"))`
  ::-webkit-input-placeholder {
    color: #444;
    font-style: italic;
  }
  ::-moz-placeholder {
    color: #444;
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: #444;
    font-style: italic;
  }
  :-moz-placeholder {
    color: #444;
    font-style: italic;
  }
`;

const Input = (props) => {
    const {
        label,
        id,
        labelHidden,
        custom,
        customClassName
        labelPosition
    } = props;

    return (
        <Fragment>
            {labelPosition === 'before' && (
                <Label htmlFor={id} hidden={labelHidden}>
                    {label}
                </Label>
            )}
            {!custom && <InputView {...props} />}
            {custom && <Fragment><InputView hidden {...props} /><span className={`input-custom-element ${customClassName ? customClassName : ''}`} /></Fragment>}
            {labelPosition === 'after' && (
                <Label htmlFor={id} hidden={labelHidden}>
                    {label}
                </Label>
            )}
        </Fragment>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    labelPosition: PropTypes.string,
    custom: PropTypes.bool,
    customClassName: PropTypes.string,
    labelHidden: PropTypes.bool,
};

Input.defaultProps = {
    placeholder: "",
    type: "text",
    labelPosition: "before",
    custom: false,
}

export default Input;
