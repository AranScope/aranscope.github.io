import React from "react";
import styled from "styled-components";

const SiteFooter = styled.footer`
  font-family: "Lato";
  padding: 1em;
  text-align: center;
`;

const Link = styled.a`
  color: #364760;

  text-decoration: none;
  &:visited {
    color: #364760;
  }
`;

export default () => (
  <SiteFooter>
    <Link>© Aran Long</Link>
    <Link href="https://github.com/aranscope/aran.site">
      {" "}
      - Click for Github Source
    </Link>
  </SiteFooter>
);
