import React from "react";
import styled from "styled-components";

function nav() {
  return (
    <NavContainer>
      <LogoWrapper>
        <NavLogo
          src="https://www.teamfresh.co.kr/resources/assets/img/logo.png"
          alt=""
        />
      </LogoWrapper>
      <NavLinkList>
        <NavLinkButton>회사소개</NavLinkButton>
        <NavLinkButton>사업소개</NavLinkButton>
        <NavLinkButton>공지사항</NavLinkButton>
        <NavLinkButton>보도자료</NavLinkButton>
      </NavLinkList>
    </NavContainer>
  );
}

export default nav;

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  padding: 0.8rem;
  background-color: white;
`;

const NavLogo = styled.img`
  width: 110px;
  margin-top: -10px;
  padding-left: 10px;
  padding-top: 9px;
`;

const LogoWrapper = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;
const NavLinkList = styled.ul`
  display: flex;
  padding-right: 20px;
`;
const NavLinkButton = styled.li`
  padding: 0.5rem 1rem;
  color: rgb(96, 96, 96);
  font-weight: 500;
  font-size: 0.9rem;
`;
