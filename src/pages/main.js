import React from "react";
import styled from "styled-components";
import Announce from "../components/Announce";
import Card from "../components/Card";
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
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <DividedLine />
      <Container>
        <Announce />
        <Announce />
      </Container>
    </MainWrapper>
  );
}

export default main;

const MainWrapper = styled.div`
  width: 100%;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const DividedLine = styled.hr`
  width: 97%;
  margin-top: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
