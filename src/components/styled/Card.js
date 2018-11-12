import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  font-family: Arial;
  width: ${props => (props.fullwidth ? "100%" : "250px")};
`;

const CardImage = styled.img`
  border-radius: 0.4rem 0.4rem 0 0;
  height: 10rem;
  width: 100%;
  object-fit: cover;
  vertical-align: top;
`;

const CardBody = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0 0 0.4rem 0.4rem;
`;

const CardTitle = styled.h1`
  margin-top: 0;
  font-size: 1rem;
`;

const CardDescription = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  line-height: 1.6;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTag = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #ccc;
  margin: 0;
`;

const CardButton = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0;
  text-decoration: none;
  color: #333;
  padding: 0.4em 1em;
  border-radius: 3px;
  border: 1px #ccc solid;
  transition: all 0.2s;

  &:hover {
    background-color: #fed977;
    color: white;
    border-color: #fed977;
  }
`;

export default props => (
  <CardContainer className="card" fullwidth>
    <CardImage src={props.image} />
    <CardBody className="card__body">
      <CardTitle className="card__title">{props.title}</CardTitle>
      <CardDescription className="card__desc">{props.desc}</CardDescription>
      <CardFooter className="card__footer">
        <CardTag className="card__tag">{props.tag}</CardTag>
        <CardButton href={props.href} className="card__button">
          {props.link_text}
        </CardButton>
      </CardFooter>
    </CardBody>
  </CardContainer>
);
