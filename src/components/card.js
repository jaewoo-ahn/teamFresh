import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardWrapper>
      <CardImage src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card1.png"></CardImage>
      <CardTextWrapper>
        <CardTitle>새벽배송</CardTitle>
        <CardDescription>
          팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다.
          배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을
          완료합니다.
        </CardDescription>
        <CardButton>더 알아보기</CardButton>
      </CardTextWrapper>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  width: 312px;
  padding: 1rem;
`;
const CardImage = styled.img`
  height: 215px;
`;
const CardTextWrapper = styled.div`
  padding: 20px;
`;
const CardTitle = styled.div`
  font-size: 19.2px;
  font-weight: 700;
  line-height: 23.04px;
  margin: 0 0 12px 0;
`;
const CardDescription = styled.p`
  font-size: 13.6px;
  line-height: 20.4px;
  margin-bottom: 12px;
`;
const CardButton = styled.button`
  background-color: white;
  padding: 6px 12px;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 13.6px;
  font-weight: 700;
  line-height: 20.4px;
  color: #6c757d;
`;
