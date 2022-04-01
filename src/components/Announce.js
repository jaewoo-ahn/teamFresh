import React from "react";
import styled from "styled-components";

function Announce() {
  return (
    <>
      <AnnounceBox>
        <AnnounceTitle>공지사항</AnnounceTitle>
        <AnnounceList></AnnounceList>
      </AnnounceBox>
      <PressContainer></PressContainer>
    </>
  );
}

export default Announce;

const AnnounceBox = styled.div`
  padding: 1rem;
`;

const AnnounceTitle = styled.div`
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

const AnnounceList = styled.div`
  background-color: rgb(250, 250, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  padding: 2rem;
  padding-bottom: 0.5rem;
`;
const PressContainer = styled.div``;
