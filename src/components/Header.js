/** @format */

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { HeaderBlueBlobSVGStyle } from "../components/SvgStyles";
import { Navbar, MobileNavBar } from "./NavBar";

const NameText = styled.div`
  //   font-family: "Futura PT";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

const MainConatiner = styled.div`
  display: flex;
  padding-block: 31px;
  padding-inline: 61px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); /* Initial box-shadow */
  transition: box-shadow 0.5s ease-in-out; /* Transition effect for the box-shadow */

  ${(props) =>
    props.hasScrolled &&
    `
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Box-shadow when scrolled */
  `}
  background-color: white;
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

const Header = ({ setIsScrollToId }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if the user has scrolled
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <MainConatiner hasScrolled={hasScrolled}>
      <Conatiner>
        <HeaderBlueBlobSVGStyle />
        <NameText>Tanya Sherbakov</NameText>
      </Conatiner>
      {width <= 768 ? (
        <>
          <MobileNavBar setIsScrollToId={setIsScrollToId} />
        </>
      ) : (
        <>
          <Navbar setIsScrollToId={setIsScrollToId} />
        </>
      )}
    </MainConatiner>
  );
};

export default Header;
