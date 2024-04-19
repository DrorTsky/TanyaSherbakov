/** @format */

import React, { useEffect, useState } from "react";
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
import WildHeartSVG from "../images/WildHeart.svg";
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
  font-weight: 700;
  font-size: 64px;
  line-height: 82px;

  color: #444cf7;
`;

const IntroductionTextContainerStyle = styled(ColumnContainer)`
  @media (max-width: 768px) {
  }
`;

const IntroductionContainer = styled(Container)`
  gap: 76px;
  margin-top: 120px;
  margin-bottom: 5%;
  align-items: center;
  padding-inline: 10%;

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
    padding-inline: 3%;
    gap: 55px;
  }
`;

const MobileSegment = () => {
  return (
    <>
      <Container>
        <IntroductionTextStyle>
          I'm Tanya, a product designer
          <br /> based in Israel.&nbsp;
          <IsraelStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={IsraelWEBP}
            alt={"Israel"}
          />
        </IntroductionTextStyle>
      </Container>
      <IntroductionTextStyle>
        I believe that every great <br />
        experience starts with asking the
        <br />
        right questions 🧠
      </IntroductionTextStyle>
    </>
  );
};

export const Home = ({ scrollTo }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const element = document.getElementById("marketlog");
    if (scrollTo === "product-design") {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: Smooth scrolling animation
      });
    }
  }, [scrollTo]);

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
    <div>
      <IntroductionContainer>
        <DoubleBlobStyledImage
          onContextMenu={(e) => e.preventDefault()}
          src={WildHeartSVG}
          alt={"Double Blob"}
        />
        <IntroductionTextContainerStyle>
          <HelloHeaderStyle>Hello!</HelloHeaderStyle>
          {width <= 768 ? (
            <MobileSegment />
          ) : (
            <>
              <Container>
                <IntroductionTextStyle>
                  I'm Tanya, a product designer based in Israel.&nbsp;
                  <IsraelStyledImage
                    onContextMenu={(e) => e.preventDefault()}
                    src={IsraelWEBP}
                    alt={"Israel"}
                  />
                </IntroductionTextStyle>
              </Container>
              <IntroductionTextStyle>
                I believe that every great experience starts with asking the
                right questions 🧠
              </IntroductionTextStyle>
            </>
          )}
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
        id={"marketlog"}
      >
        <a href="#/MarketLog">
          <MarketlogPreviewStyledImage
            src={MarketLogWEBPStyle}
            alt={"Market Log"}
          />
        </a>
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
        <a href="#/KillBills">
          <KillbillsPreviewStyledImage
            src={KillbillsWEBPStyle}
            alt={"KillBills"}
          />
        </a>
      </ProjectPreview>
      <ProjectPreview
        text={
          "Ichi is a regional sushi restaurant that strives to deliver healthy, specialty sushi and side dishes. Ichi targets customers like commuters and workers who lack the time or ability to prepare a family dinner."
        }
        link={"/Ichi"}
        name={"Ichi Sushi"}
        year={2021}
        blob={"blue"}
      >
        <a href={"#/Ichi"}>
          <IchiPreviewStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={IchiWEBPStyle}
            alt={"Ichi"}
          />
        </a>
      </ProjectPreview>
      <ProjectPreview
        text={
          "Maynooth Furniture is a new business selling affordable high-end design furniture made in Ireland."
        }
        link={"/Maynooth"}
        name={"Maynooth"}
        year={2021}
        blob={"pink"}
      >
        <a href={"#/Maynooth"}>
          <MaynoothPreviewStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={MaynoothWEBPStyle}
            alt={"Maynooth"}
          />
        </a>
      </ProjectPreview>
    </div>
  );
};
