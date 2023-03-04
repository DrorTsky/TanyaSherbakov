/** @format */
import { Link } from "react-router-dom";
import { PinkBlobSVGStyle, BlueBlobSVGStyle, ArrowSVGStyle } from "./SvgStyles";
import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Icon = styled.div``;
const ProjectNameText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 67px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 46px;
  }
`;
export const Container = styled.div`
  display: flex;
`;
export const ColumnContainer = styled(Container)`
  flex-direction: column;
  // width: 100%;
`;

const ProjectNameSubheaderStyle = styled.div`
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  font-size: 32px;
  line-height: 41px;
  color: #7b828a;
  padding-left: 59px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    padding-left: 42px;
  }
`;

const DescriptionText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const ProjectLinkText = styled.div`
  align-self: center;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
const DividerLine = styled.div`
  opacity: 0.25;

  width: 99%;
  align-self: center;
  margin-bottom: 97px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  border: 1px solid #031121;
  transform: rotate(-180deg);
`;

const ProjectName = (props) => {
  return (
    <Container>
      <Icon type={props.type} />
      <ProjectNameText>{props.name}</ProjectNameText>
    </Container>
  );
};

const ProjectNameSubheader = (props) => {
  return (
    <Container>
      <ProjectNameSubheaderStyle>{`Product Design | ${props.year}`}</ProjectNameSubheaderStyle>
    </Container>
  );
};

const NameContainer = styled(Container)`
  gap: 23px;
  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const ProjectNameContainer = (props) => {
  const { name, type, year, blob } = props;
  return (
    <ColumnContainer>
      <NameContainer>
        {blob === "blue" ? <BlueBlobSVGStyle /> : <PinkBlobSVGStyle />}
        <ProjectName type={type} name={name} />
      </NameContainer>
      <ProjectNameSubheader year={year} />
    </ColumnContainer>
  );
};

const Description = (props) => {
  const { text } = props;
  return <DescriptionText>{text}</DescriptionText>;
};

const StyledArrowIcon = styled(Button)`
  .anticon-arrow-right {
    color: red;
  }
`;

const ProjectLink = (props) => {
  const { link, color } = props;
  return (
    <Container>
      <ProjectLinkText>View Project</ProjectLinkText>
      <Link to={link}>
        <StyledArrowIcon type={"link"}>
          <ArrowSVGStyle color={color} />
        </StyledArrowIcon>
      </Link>
    </Container>
  );
};

const DescriptionContainerStyle = styled(ColumnContainer)`
  gap: 23px;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const DescriptionContainer = (props) => {
  return (
    <DescriptionContainerStyle>
      <Description text={props.text} />
      <ProjectLink
        link={props.link}
        color={props.blob === "blue" ? "#444CF7" : "#FF8BB2"}
      />
    </DescriptionContainerStyle>
  );
};

export const Divider = () => {
  return <DividerLine></DividerLine>;
};

const ResponsiveContainer = styled(Container)`
  gap: 248px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 22px;
  }
`;

const ProjectPreviewContainer = styled(ColumnContainer)`
  padding: 143px 107px 0px 107px;
  @media (max-width: 768px) {
    padding: 50px 15px 0px 15px;
  }
`;

const ImageContainer = styled(Container)`
  justify-content: space-around;
  margin-top: 95px;
  @media (max-width: 768px) {
    margin-top: 57px;
  }
`;

export const ProjectPreview = (props) => {
  return (
    <ProjectPreviewContainer>
      <Divider />
      <ResponsiveContainer>
        <ProjectNameContainer {...props} />
        <DescriptionContainer {...props} />
      </ResponsiveContainer>
      <ImageContainer>{props.children}</ImageContainer>
    </ProjectPreviewContainer>
  );
};
