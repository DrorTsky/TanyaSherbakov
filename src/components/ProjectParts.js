/** @format */

import styled from "styled-components";
import { Divider } from "./ProjectPreviewParts";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding-inline: 107px;
  @media (max-width: 768px) {
    padding-inline: 15px;
    gap: 50px;
  }
`;

export const UserSubHeader = styled.div`
  font-style: normal;
  font-weight: 450;
  font-size: 32px;
  line-height: 41px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

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
  width: ${({ isImage }) => (isImage ? "50%" : "100%")};
  height: inherit;

  ${({ isTextCenter }) =>
    isTextCenter &&
    `
      justify-content: center;
  `}
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
    // font-weight: 450;
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

const StyledLink = styled.a`
  color: #000000;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 450;
    line-height: 20.51px;
  }
  &:visited {
    color: #000000;
  }

  &:hover {
    color: #000000;
  }

  &:active {
    color: #000000;
  }
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
  links,
  image,
  isTextCenter = false,
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

  const displayLinks = links?.map(({ text, link }, index) => {
    return (
      <StyledLink
        href={link}
        key={index}
        target="_blank"
        rel="noreferrer noopener"
      >
        {text}
      </StyledLink>
    );
  });

  return (
    <MainContainer>
      <SectionHeader isHeaderInMobile={isHeaderInMobile}>
        {sectionHeaderText}
      </SectionHeader>
      <SectionBody>
        <DesriptionContainer isTextCenter={isTextCenter} isImage={image}>
          {description}
          {links && displayLinks}
        </DesriptionContainer>
        {image && <ImageContainer>{image}</ImageContainer>}
      </SectionBody>
      {isDivider && <Divider />}
    </MainContainer>
  );
};

const InlineLessContainer = styled(Container)`
  padding-inline: 0;
  width: 100%;
  @media (max-width: 768px) {
    padding-inline: 0;
  }
`;

const StyledParagraphText = styled(ParagraphText)`
  width: 100%;
`;

const ListContainer = styled.div`
  @media (max-width: 768px) {
    align-self: baseline;
  }
`;

export const SubHeaderImage = ({ subheader, images }) => {
  return (
    <>
      {subheader && <UserSubHeader>{subheader}</UserSubHeader>}
      {images && images}
    </>
  );
};

export const HeadersAndLists = ({ items }) => {
  const allItems = items.map(({ header, listItems }) => {
    const list = listItems?.map((listItem, index) => (
      <StyledParagraphText>{`${index}) ${listItem}`}</StyledParagraphText>
    ));
    return (
      <InlineLessContainer>
        <ParagraphHeader>{header}</ParagraphHeader>
        {list && <ListContainer> {list}</ListContainer>}
      </InlineLessContainer>
    );
  });
  return <InlineLessContainer>{allItems}</InlineLessContainer>;
};
