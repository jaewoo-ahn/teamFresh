import React from "react";
import styled from "styled-components";

function Announce() {
  return (
    <>
      <AnnounceBox>
        <AnnounceTitle>공지사항</AnnounceTitle>
        <AnnounceList>
          <AnnounceSubtitle>Notice</AnnounceSubtitle>
          <DividedLine />
          <ProductList>
            <AnnounceText>[공고] 신주발행 공고(제3자 배정방식)</AnnounceText>
            <AnnounceDate>2021-02-22</AnnounceDate>
          </ProductList>
          <ProductList>
            <AnnounceText>[공고] 신주발행 공고(제3자 배정방식)</AnnounceText>
            <AnnounceDate>2021-02-22</AnnounceDate>
          </ProductList>
          <ProductList>
            <AnnounceText>[공고] 신주발행 공고(제3자 배정방식)</AnnounceText>
            <AnnounceDate>2021-02-22</AnnounceDate>
          </ProductList>
        </AnnounceList>
      </AnnounceBox>
    </>
  );
}

export default Announce;

const AnnounceBox = styled.div`
  margin-top: 60px;
  padding: 1rem;
`;

const AnnounceTitle = styled.div`
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;
const AnnounceSubtitle = styled.div`
  font-size: 20px;
`;

const AnnounceList = styled.div`
  background-color: rgb(250, 250, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  padding: 2rem;
  padding-bottom: 0.5rem;
  margin-top: 20px;
`;

const ProductList = styled.div`
  width: 590px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
const AnnounceText = styled.p`
  white-space: normal;
  line-height: 1.2;
  height: 1.2em;
  overflow: hidden;
  color: rgb(52, 54, 56);
  font-size: 1rem;
  font-weight: 500;
`;

const AnnounceDate = styled.p``;

const DividedLine = styled.hr`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
