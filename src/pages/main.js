import React from "react";
import styled from "styled-components";
import CaroselSlide from "../components/CaroselSlide";

function main() {
  return (
    <MainWrapper>
      <CaroselSlide></CaroselSlide>
      <DescriptionWrapper>
        <MainDescription>
          <DescriptionMain>대한민국 No.1 Cold-Chain Platform</DescriptionMain>
          <DescriptionSub>
            팀 프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
            제공합니다. 입출고 - 주문처리 - 새벽배송 전 과정에 신선도 유지를
            위한 설비/역량을 보유하고 있습니다.
          </DescriptionSub>
        </MainDescription>
      </DescriptionWrapper>
      <TimfWrapper>
        <TimfTitle>TIMF BUSINESS</TimfTitle>
        <TitleLine />
      </TimfWrapper>
    </MainWrapper>
  );
}

export default main;

const MainWrapper = styled.div`
  margin-top: 60px;
`;

const DescriptionWrapper = styled.div`
  background-color: rgb(23, 45, 76);
  height: 328px;
  padding: 2rem;
`;
const MainDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 70px 50px;
`;
const DescriptionMain = styled.p`
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;
const DescriptionSub = styled.p`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 1.2rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  line-height: 1.5;
`;

const TimfWrapper = styled.div`
  justify-content: center;
  margin-top: 30px;
`;

const TitleLine = styled.hr`
  border-top: 2px solid #b4b4b4;
  width: 75%;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;

const TimfTitle = styled.div`
  padding: 1rem;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: center;
`;
