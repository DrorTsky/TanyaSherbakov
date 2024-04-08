/** @format */

import styled from "styled-components";
import { BlueBlobSVGStyle } from "./SvgStyles";
import { Divider } from "./ProjectPreviewParts";

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
const LinkTextStyle = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #031121;
`;
export const Footer = () => {
  return (
    <Container>
      <Divider />
      <HeaderContainer>
        <BlueBlobSVGStyle />
        <TextStyle>Contact</TextStyle>
      </HeaderContainer>
      <LinksContainer>
        <LinkTextStyle href={""}>Linkedin</LinkTextStyle>
        <LinkTextStyle href={""}>Instagram</LinkTextStyle>
        <LinkTextStyle href={""}>Email</LinkTextStyle>
        <LinkTextStyle href={""}>Resume</LinkTextStyle>
      </LinksContainer>
    </Container>
  );
};
