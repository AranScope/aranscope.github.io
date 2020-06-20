import React from "react";
import CenteredHeader from "../base/CenteredHeader";
import styled from "styled-components";
import AranLogo from "../AranLogo";
import { A, H1 } from "../styled/typography";

const FullHeightCenteredHeader = styled(CenteredHeader)`
  height: 90%;
`;

const HeaderAranLogo = styled(AranLogo)`
  width: 11.5em;
  height: auto;
`;

const HeaderH1 = styled(H1)`
margin-top: 22px;
margin-bottom: 22px;
  font-weight: 400;
  color: #364760;
  font-size: 2em;
`;

export default () => (
  <FullHeightCenteredHeader>
    <HeaderAranLogo />
    <HeaderH1>ARAN LONG</HeaderH1>
    <nav>
      <A href="https://linkedin.com/in/aranlong">LINKEDIN</A>
      <A> | </A>
      <A href="/cv.pdf">CV</A>
      <A> | </A>
      <A href="mailto:me@aran.site">CONTACT</A>
    </nav>
  </FullHeightCenteredHeader>
);
