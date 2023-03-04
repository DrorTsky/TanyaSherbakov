/** @format */

import React from "react";
import styled from "styled-components";

const NameText = styled.div`
  //   font-family: "Futura PT";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

const NavbarItem = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
`;

const Header = () => {
  return (
    <>
      <NameText>header</NameText>
      <div>
        <div>hello</div>
        <NavbarItem />
        <NavbarItem />
      </div>
    </>
  );
};

export default Header;
