import React from "react";
import styled from "styled-components";

function FooterContent() {
  return (
    <FooterContentWrapper>
      <FooterContentLine />
      <p>Timf</p>
      <hr />
      <p>상호명: (주)팀프레시</p>
      <p>사업자등록번호: 561-88-01138</p>
      <p>대표자: 이성일</p>
    </FooterContentWrapper>
  );
}

export default FooterContent;

const FooterContentWrapper = styled.div`
  padding: 1rem;
`;

const FooterContentLine = styled.hr`
  width: 85%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(213, 213, 213);
`;
