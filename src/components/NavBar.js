/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${(props) => (props.selected ? "#444CF7" : "#031121")} !important;
`;
const Conatiner = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Navbar = () => {
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

const StyledAntDropdown = styled(Dropdown)`
  .ant-dropdown-menu-item:not(ant-dropdown-menu-item-selected) {
    color: red;
  }
`;

export const MobileNavBar = () => {
  const [selected, setSelected] = useState("home");
  function onClick(event) {
    console.log(event.target.id);
    setSelected(event.target.id);
  }

  const items = [
    {
      key: 1,
      label: (
        <StyledLink
          to="/"
          id={"home"}
          onClick={onClick}
          selected={selected === "home"}
        >
          Product Design
        </StyledLink>
      ),
    },
    {
      key: 2,
      label: (
        <StyledLink
          to="/graphic-design"
          id={"graphic-design"}
          onClick={onClick}
          selected={selected === "graphic-design"}
        >
          Graphic Design
        </StyledLink>
      ),
    },
    {
      key: 3,
      label: (
        <StyledLink
          to="/about"
          id={"about"}
          onClick={onClick}
          selected={selected === "about"}
        >
          About
        </StyledLink>
      ),
    },
  ];

  return (
    <StyledAntDropdown
      menu={{ items }}
      placement={"bottomLeft"}
      trigger={"click"}
    >
      <Button type={"text"}>
        <MenuOutlined />
      </Button>
    </StyledAntDropdown>
  );
};
