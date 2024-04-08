/** @format */
import React from "react";
import styled from "styled-components";
import {
  UnderstandingStyledImage,
  OverviewStyledImage,
  MarketlogResultBigStyledImage,
  MarketlogResultSmallStyledImage,
} from "./SvgStyles";
import {
  TextsImageRow,
  MainContainer,
  SectionHeader,
  ProjectDescription,
  NextProjectSegment,
} from "./ProjectParts";
import MarketLogOverviewWEBP from "../images/marketlog-overview.webp";
import MarketLogUnderstaindingWEBP from "../images/marketlog-understanding.webp";
import MarketLogResultBigOneWEBP from "../images/Marketlog_result_big_1.webp";
import MarketLogResultBigTwoWEBP from "../images/Marketlog_result_big_2.webp";
import MarketLogResultSmallOneWEBP from "../images/Marketlog_result_small_1.webp";
import MarketLogResultSmallTwoWEBP from "../images/Marketlog_result_small_2.webp";

const ResultImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, auto);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;
const ResultImageContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    &:nth-child(1) {
      grid-row: 2;
      grid-column: 1;
    }
    &:nth-child(2) {
      grid-row: 1;
      grid-column: 1 / span 2;
    }
    &:nth-child(3) {
      grid-row: 2;
      grid-column: 2;
    }
    &:nth-child(4) {
      grid-row: 3;
      grid-column: 1 / span 2;
    }
  }
`;

export const MarketLog = () => {
  return (
    <div>
      <ProjectDescription
        sectionHeaderText={"MARKETLOG"}
        dateRange={"January 2022 - Today"}
        description={
          "Marketlog is an adaptive website, offering an online community & providing the user with tools to track, compare and analyze their trading activity. My role in this project is to adapt the experience from the desktop to the mobile. In this case study I will focus on the mobile adaptation for the Calendars feature."
        }
      />
      <TextsImageRow
        sectionHeaderText={"PROJECT OVERVIEW"}
        isHeaderInMobile={false}
        headers={["The product", "The problems", "The solution"]}
        texts={[
          "MarketLog is a free platform that helps traders with tracking, analyzing, and sharing their portfolios, with high - end tools. MarketLog highlights data about the stock market, crypto - currencies and forex trading. By connecting an existing portfolio to the platform the users can track their performance, and spot weaknesses in their trading systems. The Calendars feature is one of the most essential tools for traders. This tool allows the users to keep awareness on the latest events that about to come. This helps them to come to decision whether it is a good time to buy/sell/hold their share of stocks.",
          "Each calendar contains a lot of data and usually appears, on desktop, in big charts with multiple columns. The issue of adapting these charts to the mobile device, was to find a way in which there will be no need in horizontal scrolling through the chart, so the users' eyes and brains could relax and observe the data without extra effort.",
          "After reading multiple studies about texts and how we read them, with observing our competitors I came to the solution of showing the data in scrolls. Providing the possibility for the user to observe all the data of a particular event in a horizontal layout. Lets see the result :)",
        ]}
        image={
          <OverviewStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={MarketLogOverviewWEBP}
          />
        }
      />
      <TextsImageRow
        sectionHeaderText={"UNDERSTANDING THE USER & THE MARKET"}
        texts={[
          'As known humans are naturally visually scanning subjects vertically, thus, our horizontal reading patterns are something we learned as the written language become a thing. With that in mind, we can understand why it is difficult to us to keep concentration while reading horizontally wide texts. This fact can be supported by several known patterns and articles. The first example that comes to mind is the newspaper text columns, that usually divided to several columns per page to make the reading experience easier. In addition there is the known "F & Z" patterns of the eye movement, which we, designers, use to make the content more accessible for users. Click here for more about the human eye pattern.',
          "But before the execution, to look on the competitors performance and understand their choices was important as well.",
          "The majority of our competitors are using tables with horizontal scrolling in their calendars. It's like this due to the fact that most of them were built years ago, when the mobile website adaptation was not that common. In addition most of our competitors are addressing more mature audience, that is used to accessing the platform through the desktop.",
          "We hope to expand our target audience, and for that we need to address the needs of the younger traders and investors, who are more adapted the the smartphone. Thus the decision to make the calendars layout vertical in the mobile device, avoiding unnecessary horizontal scrolling was crucial for the user experience.",
        ]}
        image={
          <UnderstandingStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={MarketLogUnderstaindingWEBP}
          />
        }
      />
      <MainContainer>
        <SectionHeader>The Result</SectionHeader>
        <ResultImageGridContainer>
          <ResultImageContainer>
            <MarketlogResultSmallStyledImage
              src={MarketLogResultSmallOneWEBP}
            />
          </ResultImageContainer>
          <ResultImageContainer>
            <MarketlogResultBigStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MarketLogResultBigOneWEBP}
            />
          </ResultImageContainer>
          <ResultImageContainer>
            <MarketlogResultSmallStyledImage
              src={MarketLogResultSmallTwoWEBP}
            />
          </ResultImageContainer>
          <ResultImageContainer>
            <MarketlogResultBigStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MarketLogResultBigTwoWEBP}
            />
          </ResultImageContainer>
        </ResultImageGridContainer>
      </MainContainer>
      <NextProjectSegment text={"Next Project"} link={"/KillBills"} />
    </div>
  );
};
