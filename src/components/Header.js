/** @format */

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { HeaderBlueBlobSVGStyle } from "../components/SvgStyles";
import Navbar from "./NavBar";

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

const MainConatiner = styled.div`
  display: flex;
  padding: 61px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Conatiner = styled.div`
  display: flex;
  gap: 18px;
  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <MainConatiner>
      <Conatiner>
        <HeaderBlueBlobSVGStyle />
        <NameText>Tanya Sherbakov</NameText>
      </Conatiner>
      {width <= 768 ? (
        <>mobile</>
      ) : (
        <>
          <Navbar />
        </>
      )}
    </MainConatiner>
  );
};

export default Header;
