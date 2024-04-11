/** @format */

import styled, { css } from "styled-components";
import { BlueBlobSVGStyle } from "./SvgStyles";
import { Divider } from "./ProjectPreviewParts";
import { message } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 107px 143px 107px;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  gap: 23px;
  @media (max-width: 768px) {
    gap: 14px;
  }
`;
const TextStyle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 67px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 46px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 56px;
  padding-top: 10px;
  @media (max-width: 768px) {
    padding-left: 45px;
    flex-direction: column;
    gap: 24px;
  }
`;
const LinkTextStyleCss = css`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #031121;
`;
const LinkTextStyle = styled.a`
  ${LinkTextStyleCss}
`;
const CopyTextStyle = styled.div`
  ${LinkTextStyleCss}
  :hover {
    cursor: pointer;
  }
`;
export const Footer = ({ width }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    if (width > 768)
      messageApi.open({
        type: "success",
        content: "Copied to Clipboard",
        duration: 2,
      });
  };
  return (
    <Container>
      <Divider />
      {contextHolder}
      <HeaderContainer>
        <BlueBlobSVGStyle />
        <TextStyle>Contact</TextStyle>
      </HeaderContainer>
      <LinksContainer>
        <LinkTextStyle
          href={"https://www.linkedin.com/in/tanya-sherbakov"}
          target="_blank"
        >
          Linkedin
        </LinkTextStyle>
        <LinkTextStyle
          href={
            "https://www.instagram.com/tanjasherart/?igsh=MWh0Y3JjaTd5M2NwaA%3D%3D"
          }
          target="_blank"
        >
          Instagram
        </LinkTextStyle>
        <CopyTextStyle
          onClick={() => {
            navigator.clipboard.writeText("Copy");
            info();
          }}
        >
          Email
        </CopyTextStyle>
        <CopyTextStyle
          onClick={(e) => {
            window.open(
              "https://drive.google.com/u/1/uc?id=1OGIFE0gkZiVxxgiK_yjtOmPrHzkj26z7&export=download",
              "_blank"
            );
          }}
        >
          Resume
        </CopyTextStyle>
      </LinksContainer>
    </Container>
  );
};
