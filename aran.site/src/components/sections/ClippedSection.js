import React from "react";
import styled from "styled-components";

const ClippedSection = styled.section`
  clip-path: polygon(
    50% 3em,
    100% 0,
    100% calc(100% - 3em),
    50% 100%,
    0 calc(100% - 3em),
    0 0
  );

  padding: 5em 2em;
  background-color: #364760;
`;

export default props => (
  <ClippedSection {...props}>{props.children}</ClippedSection>
);
