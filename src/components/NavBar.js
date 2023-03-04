/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => (props.selected ? "#444CF7" : "#031121")};
`;
const Conatiner = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  function onClick(event) {
    setSelected(event.target.id);
  }
  return (
    <Conatiner>
      <StyledLink
        to="/"
        id={"home"}
        onClick={onClick}
        selected={selected === "home"}
      >
        Product Design
      </StyledLink>
      <StyledLink
        to="/graphic-design"
        id={"graphic-design"}
        onClick={onClick}
        selected={selected === "graphic-design"}
      >
        Graphic Design
      </StyledLink>
      <StyledLink
        to="/about"
        id={"about"}
        onClick={onClick}
        selected={selected === "about"}
      >
        About
      </StyledLink>
    </Conatiner>
  );
};
export default Navbar;
