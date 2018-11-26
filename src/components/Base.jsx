import styled from "styled-components";

const Base = styled("div")`
  &[tabindex="-1"] {
    outline: none;
  }

  &[role="tooltip"] {
    display: none;
  }

  ${props =>
    props.hidden &&
    `
      position: absolute !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden !important;
  `};
`;

export default Base;
