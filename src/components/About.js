/** @format */

import React from "react";
import styled from "styled-components";
import { Divider } from "./ProjectPreviewParts";
import { AboutSVGStyle } from "./SvgStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 143px;
  @media (max-width: 768px) {
    padding-inline: 15px;
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
  font-weight: 500;
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
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`;
const RegularText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
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
        <AboutSVGStyle />
      </SummaryContainer>
      <Divider />
      <InterestsContainer>
        <LearningConainer>
          <BoldedLearningText>What I like</BoldedLearningText>
          <RegularText>Illustration</RegularText>
          <RegularText>Figma</RegularText>
          <RegularText>Cats (I am allergic though..)</RegularText>
          <RegularText>Video games</RegularText>
        </LearningConainer>
        <LearningConainer>
          <BoldedLearningText>What I'm learning</BoldedLearningText>
          <RegularText>Procreate</RegularText>
          <RegularText>Copyright & Storytelling</RegularText>
          <RegularText>Branding</RegularText>
        </LearningConainer>
      </InterestsContainer>
    </Container>
  );
};

export default About;
