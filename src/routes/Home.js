/** @format */

import React from "react";
import { ProjectPreview } from "../components/ProjectPreviewParts";
import { Container, ColumnContainer } from "../components/ProjectPreviewParts";
import styled from "styled-components";
import {
  DoubleBlobStyledImage,
  IsraelStyledImage,
  IchiPreviewStyledImage,
  KillbillsPreviewStyledImage,
  MaynoothPreviewStyledImage,
  MarketlogPreviewStyledImage,
} from "../components/SvgStyles";
import MarketLogWEBPStyle from "../images/marketlog.webp";
import IchiWEBPStyle from "../images/ichi.webp";
import KillbillsWEBPStyle from "../images/killbills.webp";
import MaynoothWEBPStyle from "../images/maynooth.webp";
import DoubleBlobWEBP from "../images/doubleBlob.webp";
import IsraelWEBP from "../images/israel.webp";

const IntroductionTextStyle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 62px;
  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
  }
`;

const HelloHeaderStyle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 82px;

  color: #444cf7;
  // @media (max-width: 768px) {
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 24px;
  //   line-height: 31px;
  // }
`;

const IntroductionTextContainerStyle = styled(ColumnContainer)`
  @media (max-width: 768px) {
  }
`;

const IntroductionContainer = styled(Container)`
  gap: 76px;
  margin-bottom: 5%;
  align-items: center;
  padding-inline: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 3%;
    gap: 55px;
  }
`;

export const Home = () => {
  return (
    <div>
      <IntroductionContainer>
        <DoubleBlobStyledImage src={DoubleBlobWEBP} alt={"Double Blob"} />
        <IntroductionTextContainerStyle>
          <HelloHeaderStyle>Hello!</HelloHeaderStyle>
          <Container>
            <IntroductionTextStyle>
              I'm Tanya, a product designer based in Israel.&nbsp;
              <IsraelStyledImage src={IsraelWEBP} alt={"Israel"} />
            </IntroductionTextStyle>
          </Container>
          <IntroductionTextStyle>
            I believe that every great experience starts with asking the right
            questions 🧠
          </IntroductionTextStyle>
        </IntroductionTextContainerStyle>
      </IntroductionContainer>
      <ProjectPreview
        text={
          "Marketlog offers an online community & provides the user with tools to track, compare and analyze their trading activity."
        }
        link={"/MarketLog"}
        name={"Marketlog"}
        year={2022}
        blob={"blue"}
      >
        <MarketlogPreviewStyledImage
          src={MarketLogWEBPStyle}
          alt={"Market Log"}
        />
      </ProjectPreview>
      <ProjectPreview
        text={
          "The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers."
        }
        link={"/KillBills"}
        name={"KillBills"}
        year={2022}
        blob={"pink"}
      >
        <KillbillsPreviewStyledImage
          src={KillbillsWEBPStyle}
          alt={"KillBills"}
        />
      </ProjectPreview>
      <ProjectPreview
        text={
          "Marketlog offers an online community & provides the user with tools to track, compare and analyze their trading activity."
        }
        link={"/Ichi"}
        name={"Ichi Sushi"}
        year={2021}
        blob={"blue"}
      >
        <IchiPreviewStyledImage src={IchiWEBPStyle} alt={"Ichi"} />
      </ProjectPreview>
      <ProjectPreview
        text={
          "The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers."
        }
        link={"/Maynooth"}
        name={"Maynooth"}
        year={2021}
        blob={"pink"}
      >
        <MaynoothPreviewStyledImage src={MaynoothWEBPStyle} alt={"Maynooth"} />
      </ProjectPreview>
    </div>
  );
};
