import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default props => <Header {...props}>{props.children}</Header>;
