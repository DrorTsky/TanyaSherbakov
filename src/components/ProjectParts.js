/** @format */

import styled from "styled-components";
import { Divider } from "./ProjectPreviewParts";

export const SectionBody = styled.div`
  display: flex;
  gap: 148px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DesriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  height: inherit;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  height: inherit;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const ParagraphHeader = styled.div`
  font-weight: 450;
  font-size: 32px;
  line-height: 41px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
export const ParagraphText = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 450;
    line-height: 20.51px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 91px;
  padding-inline: 107px;
  @media (max-width: 768px) {
    padding-inline: 15px;
  }
`;

export const SectionHeader = styled.div`
  // font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;

  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    ${({ isHeaderInMobile = true }) =>
      !isHeaderInMobile &&
      `
    display: none;
  `}
  }
`;

const ProjectDescriptionText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  padding-inline: 344px;

  color: #818890;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
    padding-inline: 15px;
  }
`;

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 91px;
  @media (max-width: 768px) {
    padding-bottom: 65px;
    padding-top: 30px;
  }
`;

const ProjectDescriptionTextContainer = styled.div`
  width: 100%;
  align-self: center;
`;

export const ProjectDescription = ({
  sectionHeaderText,
  dateRange,
  description,
}) => {
  return (
    <ProjectDescriptionContainer>
      <SectionHeader>{sectionHeaderText} </SectionHeader>
      <ProjectDescriptionTextContainer>
        <ProjectDescriptionText>
          Product Design | {dateRange}
        </ProjectDescriptionText>
        <ProjectDescriptionText>{description}</ProjectDescriptionText>
      </ProjectDescriptionTextContainer>
    </ProjectDescriptionContainer>
  );
};

export const TextsImageRow = ({
  sectionHeaderText,
  headers,
  texts,
  image,
  isDivider = true,
  isHeaderInMobile = true,
}) => {
  const description = texts.map((text, index) => {
    return (
      <ParagraphContainer key={index}>
        {headers?.[index] && (
          <ParagraphHeader>{headers?.[index]}</ParagraphHeader>
        )}
        <ParagraphText
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </ParagraphContainer>
    );
  });
  return (
    <MainContainer>
      <SectionHeader isHeaderInMobile={isHeaderInMobile}>
        {sectionHeaderText}
      </SectionHeader>
      <SectionBody>
        <DesriptionContainer>{description}</DesriptionContainer>
        <ImageContainer>{image}</ImageContainer>
      </SectionBody>
      {isDivider && <Divider />}
    </MainContainer>
  );
};
