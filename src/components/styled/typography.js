import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Lato";
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 2em;
  color: ${props => (props.light ? "white" : "#364760")};
`;

export const H2 = styled(H1);

export const H3 = styled(H1);

export const H4 = styled(H1);

export const H5 = styled(H1);

export const H6 = styled(H1);

export const P = styled.p`
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 0.2em;
`;

export const Li = styled.li`
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 0.2em;
`;

export const A = styled.a`
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 0.2em;
  text-decoration: none;
  color: #5678a9;
  font-size: 16px;
`;

export const Hr = styled.hr`
  height: 1px;
  border: none;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
`;
