import React from "react";
import styled from "styled-components";

function nav() {
  return (
    <NavContainer>
      <div>Logo</div>
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
  display: flex;
  justify-content: space-between;
  width: 1400px;
  border: 1px solid black;
`;

const NavLinkList = styled.ul``;
const NavLinkButton = styled.li``;
