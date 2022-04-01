import React from "react";
import styled from "styled-components";
import FooterContent from "./FooterContent";

function footer() {
  return (
    <FooterContainer>
      <FooterContent></FooterContent>
      <FooterContent></FooterContent>
      <FooterContent></FooterContent>
    </FooterContainer>
  );
}

export default footer;

const FooterContainer = styled.div`
  display: flex;
  background-color: rgb(49, 53, 62);
  color: rgb(213, 213, 213);
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
  bottom: 0px;
`;
