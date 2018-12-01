import React from "react";
import CenteredHeader from "../base/CenteredHeader";
import styled from "styled-components";
import AranLogo from "../AranLogo";
import { A, H1 } from "../styled/typography";

const FullHeightCenteredHeader = styled(CenteredHeader)`
  height: 90%;
  background-color: white;
`;

const HeaderAranLogo = styled(AranLogo)`
  width: 11.5em;
  height: auto;
`;

const HeaderH1 = styled(H1)`
  font-weight: 400;
  color: #364760;
`;

export default () => (
  <FullHeightCenteredHeader>
    <HeaderAranLogo />
    <HeaderH1>ARAN LONG</HeaderH1>
    <nav>
      <A href="https://aran.site/resume">RESUME</A>
      <A> | </A>
      <A href="https://blog.aran.site">BLOG</A>
      <A> | </A>
      <A href="mailto:me@aran.site">CONTACT</A>
    </nav>
  </FullHeightCenteredHeader>
);
