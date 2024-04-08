/** @format */

import React from "react";
import styled from "styled-components";
import { Divider } from "./ProjectPreviewParts";
import { AboutStyledImage, BlueBlobSVGStyle, IconStyles } from "./SvgStyles";
import AboutWEBP from "../images/about_wildheart.webp";
import { ReactComponent as PenIconSVG } from "../images/penIcon.svg";
import { ReactComponent as MicIconSVG } from "../images/microphoneIcon.svg";
import { ReactComponent as CatIconSVG } from "../images/catIcon.svg";
import { ReactComponent as ProIconSVG } from "../images/procreateIcon.svg";
import { ReactComponent as CopyIconSVG } from "../images/copyIcon.svg";
import { ReactComponent as AlienIconSVG } from "../images/alienIcon.svg";
import { ReactComponent as FigmaIconSVG } from "../images/figmaIcon.svg";
import { ReactComponent as BlueIconSVG } from "../images/blueBlob.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 143px;
  padding-bottom: 91px;
  @media (max-width: 768px) {
    padding-inline: 15px;
    padding-bottom: 0;
  }
`;
const SummaryContainer = styled.div`
  display: flex;
  gap: 76px;
  padding-bottom: 50px;
  padding-top: 93px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 36px;
    gap: 36px;
  }
`;
const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
  gap: 26px;
  padding-top: 5%;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
  }
`;
const InterestsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const LearningConainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const BoldedText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  color: #031121;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
const BoldedLearningText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
const RegularText = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
    gap: 4px;
    align-items: center;
  }
`;

const About = () => {
  return (
    <Container>
      <SummaryContainer>
        <SummaryTextContainer>
          <BoldedText>
            I’m Tanya, a thinker and a challenge seeker that values
            intelligence, honesty, kindness and integrity.
          </BoldedText>
          <RegularText>
            As an innovative designer, with a reasonable approach, I seek simple
            solutions to complex problems. Also I am a passionate D&D player. As
            a Dungeon Master, my goal is to build a world that contains stories
            of my players' characters to bring the most enjoyable and meaningful
            experience to the table. The same applies to the design field to me;
            being able to create something that the user will enjoy makes me
            happy.
          </RegularText>
        </SummaryTextContainer>
        <AboutStyledImage src={AboutWEBP} alt={"About"} />
      </SummaryContainer>
      <Divider />
      <InterestsContainer>
        <LearningConainer>
          <BoldedLearningText>What I like</BoldedLearningText>
          <RegularText>
            <IconStyles>
              <PenIconSVG />
            </IconStyles>
            Illustration
          </RegularText>
          <RegularText>
            <IconStyles>
              <FigmaIconSVG />
            </IconStyles>
            Figma
          </RegularText>
          <RegularText>
            <IconStyles>
              <CatIconSVG />
            </IconStyles>
            Cats (I am allergic though..)
          </RegularText>
          <RegularText>
            <IconStyles>
              <AlienIconSVG />
            </IconStyles>
            Video games
          </RegularText>
        </LearningConainer>
        <LearningConainer>
          <BoldedLearningText>What I'm learning</BoldedLearningText>
          <RegularText>
            <IconStyles>
              <ProIconSVG />
            </IconStyles>
            Procreate
          </RegularText>
          <RegularText>
            <IconStyles>
              <CopyIconSVG />
            </IconStyles>
            Copyright & Storytelling
          </RegularText>
          <RegularText>
            <IconStyles>
              <BlueIconSVG />
            </IconStyles>
            Branding
          </RegularText>
          <RegularText>
            <IconStyles>
              <MicIconSVG />
            </IconStyles>
            Singing
          </RegularText>
        </LearningConainer>
      </InterestsContainer>
    </Container>
  );
};

export default About;
