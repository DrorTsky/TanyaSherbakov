/** @format */

import React from "react";
import styled from "styled-components";
import MalluableOneWEBP from "../images/Malluable 1.webp";
import MalluableTwoWEBP from "../images/Malluable 2.webp";
import MalluableThreeWEBP from "../images/Malluable 3.webp";
import PartizankiOneWEBP from "../images/Patzanki 1.webp";
import PartizankiTwoWEBP from "../images/Patzanki 2.webp";
import PartizankiThreeWEBP from "../images/Patzanki 3.webp";
import PartizankiFourWEBP from "../images/Patzanki 4.webp";
import PartizankiFiveWEBP from "../images/Patzanki 5.webp";
import PartizankiSixWEBP from "../images/Patzanki 6.webp";
import PartizankiSevenWEBP from "../images/Patzanki 7.webp";
import PartizankiEightWEBP from "../images/Patzanki 8.webp";
import AfterdarkWEBP from "../images/Afterdark.webp";
import MagazinesOneWEBP from "../images/Magazines.webp";
import MagazinesTwoWEBP from "../images/Magazines 2.webp";
import { Divider } from "./ProjectPreviewParts";
import {
  BigPatzankiStyledImage,
  SmallPatzankiStyledImage,
  MalluableSmallStyledImage,
  MalluableBigStyledImage,
  AfterdarkStyledImage,
  MagazinesStyledImage,
} from "./SvgStyles";

const SingleImage = styled.div`
  display: flex;
`;

const DoubleImage = styled.div`
  display: flex;
  gap: 55px;

  @media (max-width: 768px) {
    padding-inline: 15px;
    flex-direction: column;
    gap: 60px;
  }
`;
const Headline = styled.div`
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
const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 143px;
  padding-top: 60px;
  padding-bottom: 90px;
  gap: 55px;
  @media (max-width: 768px) {
    padding-inline: 15px;
    gap: 60px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 143px;
  @media (max-width: 768px) {
    padding-inline: 15px;
  }
`;
const Project = ({ headline, description, children }) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
    </Container>
  );
};

const GraphicDesign = () => {
  return (
    <>
      <ProjectContainer>
        <Project
          headline={"PATZANKI"}
          description={
            "Conceptual rebranding of a Russian reality show using 2021 graphic design trends. ABOUT THE SHOW It is believed that the female representative should be educated, tidy, tender and cultural, but whether it goes beyond normal if the girls do not meet the declared criteria? Usually, such women quickly become outcasts in society, they are shown with a finger, and no one wants to figure out what led girls to such a lifetime. But now they no longer want to live in the same life and go towards fundamental changes. - Coppershop Tools: Photoshop | October 2021"
          }
        />
        <Images>
          <DoubleImage>
            <BigPatzankiStyledImage src={PartizankiOneWEBP} />
            <BigPatzankiStyledImage src={PartizankiTwoWEBP} />
          </DoubleImage>
          <DoubleImage>
            <SmallPatzankiStyledImage src={PartizankiThreeWEBP} />
            <SmallPatzankiStyledImage src={PartizankiFourWEBP} />
          </DoubleImage>
          <DoubleImage>
            <SmallPatzankiStyledImage src={PartizankiFiveWEBP} />
            <SmallPatzankiStyledImage src={PartizankiSixWEBP} />
          </DoubleImage>
          <DoubleImage>
            <BigPatzankiStyledImage src={PartizankiSevenWEBP} />
            <BigPatzankiStyledImage src={PartizankiEightWEBP} />
          </DoubleImage>
        </Images>
        <Divider />
      </ProjectContainer>
      <ProjectContainer>
        <Project
          headline={"MALLUABLE"}
          description={
            "Logo & business card design for a made-up client. A life coaching company called Malluable. The name comes from the word malleable, which is how easy it is to bend and change the shape of a metal or object. Specifically spelt with a 'U' as an ode to the personal tailored coaching they offer. In this design I wanted to put an emphasis on the \"U\", to communicate the importance of each and every client. And express the malleability trough the dynamic and flexible shape of the logo. I decided to pair the gold with the deep blue color to highlight the sense of luxury. Tools: InDesign, Photoshop | October 2021"
          }
        />
        <Images>
          <DoubleImage>
            <MalluableSmallStyledImage src={MalluableOneWEBP} />
            <MalluableSmallStyledImage src={MalluableTwoWEBP} />
          </DoubleImage>
          <SingleImage>
            <MalluableBigStyledImage src={MalluableThreeWEBP} />
          </SingleImage>
        </Images>
        <Divider />
      </ProjectContainer>
      <ProjectContainer>
        <Project
          headline={"After dark - Book cover design"}
          description={
            "About the book: A gripping novel of encounters set in Tokyo during the spooky hours between midnight and dawn, by an internationally renowned literary phenomenon. Murakami’s trademark humor, psychological insight, and grasp of spirit and morality are here distilled with an extraordinary, harmonious mastery. Combining the pyrotechnical genius that made Kafka on the Shore and The Wind-up Bird Chronicle international bestsellers, with a surprising infusion of heart, Murakami has produced one of his most enchanting fictions yet. In this design I tried to communicate the essence of the mystery surrounded by the late night conversations by using the blurred character and the dark edges. The casette tape on the spine gives the viewer a hint about the importance of sound in this novella. And by combining these elements together the viewer gets the feeling there will be some kind of confession. Tools: Photoshop | March 2021"
          }
        />
        <Images>
          <SingleImage>
            <AfterdarkStyledImage src={AfterdarkWEBP} />
          </SingleImage>
        </Images>
        <Divider />
      </ProjectContainer>
      <ProjectContainer>
        <Project
          headline={"Magazine spreads - Concept design"}
          description={
            "PLAN[E]T - is a mini - project I did for an InDesign course as part of Graphic Design certificate at Udemy. The objective of the course was to learn the software, to work with image and text and experiment with different layouts. Tools used: InDesign, Photoshop | December 2020"
          }
        />
        <Images>
          <DoubleImage>
            <MagazinesStyledImage src={MagazinesOneWEBP} />
            <MagazinesStyledImage src={MagazinesTwoWEBP} />
          </DoubleImage>
        </Images>
      </ProjectContainer>
    </>
  );
};

export default GraphicDesign;
