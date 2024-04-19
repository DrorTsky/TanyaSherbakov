/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import WildHeartSVG from "../images/WildHeart.svg";
import {
  DoubleBlobStyledImage,
  YellowBlobMobileSVGStyle,
} from "../components/SvgStyles";
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.selected ? "#444CF7" : "#031121")} !important;
`;
const Conatiner = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Navbar = ({ setSelected }) => {
  const { selected } = useSelector((state) => state.selected);
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
        Home
      </StyledLink>
      <StyledLink
        to="/"
        id={"product-design"}
        onClick={onClick}
        selected={selected === "product-design"}
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

const FullScreenModalContent = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Define a styled component for the modal itself
const FullScreenModalStyled = styled(Modal)`
  && .ant-modal-content {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 0; /* Remove padding */
    // margin: 0; /* Remove margin */
  }
  .ant-modal-content {
    border-radius: 0;
  }
  && .ant-modal-body {
    padding: 0;
  }

  && .ant-modal {
    max-width: unset;
    margin: unset;
  }
`;

const StyledModal = styled(Modal)`
  height: 100vh;
  max-width: 100vw !important;
  top: 0;
  padding: 0;
  margin: 0 !important;
  .ant-modal-content {
    height: 100%;
    border-radius: 0;
  }
  .ant-modal-close {
    top: 23px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonContainer = styled.div`
  margin-right: 15px;
  .hover {
    background-color: unset;
  }
  .ant-btn {
    padding: unset;
  }
`;

const ModalTitle = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <YellowBlobMobileSVGStyle />
      <div>Tanya Sherbakov</div>
    </div>
  );
};

const ModalIcon = (props) => {
  return (
    <ButtonContainer>
      <div type={"text"} {...props}>
        <CloseOutlined style={{ fontSize: "16px", color: "black" }} />
      </div>
    </ButtonContainer>
  );
};

export const MobileNavBar = ({ setSelected }) => {
  const [open, setOpen] = useState(false);
  const { selected } = useSelector((state) => state.selected);

  function onClick(event) {
    setSelected(event.target.id);
    setOpen(false);
  }

  return (
    <>
      <div type={"text"} onClick={() => setOpen(true)}>
        <MenuOutlined />
      </div>
      <StyledModal
        destroyOnClose
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        title={<ModalTitle />}
        closeIcon={<ModalIcon />}
      >
        <FullScreenModalContent>
          <DoubleBlobStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={WildHeartSVG}
            alt={"Double Blob"}
          />
          <LinksContainer>
            <StyledLink
              to="/"
              id={"home"}
              onClick={onClick}
              selected={selected === "home"}
            >
              Home
            </StyledLink>
            <StyledLink
              to="/"
              id={"product-design"}
              onClick={onClick}
              selected={selected === "product-design"}
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
          </LinksContainer>
        </FullScreenModalContent>
      </StyledModal>
    </>
  );
};
