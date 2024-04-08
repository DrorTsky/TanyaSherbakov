/** @format */

import styled from "styled-components";
import {
  ProjectDescription,
  TextsImageRow,
  ParagraphHeader,
  Container,
  NextProjectSegment,
} from "./ProjectParts";
import {
  MaynoothOverviewStyledImage,
  MaynoothUserStyledImage,
  MaynoothWireframeStyledImage,
  MaynoothDigitalWireframeStyledImage,
  MaynoothLowFidelityStyledImage,
  MaynoothMoodboardStyledImage,
  MaynoothStyleGuideStyledImage,
  MaynoothMockupStyledImage,
  MaynoothHighFidelityStyledImage,
  MaynoothTakeawaysStyledImage,
} from "./SvgStyles";
import MaynoothOverviewWEBP from "../images/maynooth-overview.webp";
import MaynoothUserWEBP from "../images/maynooth-user.webp";
import MaynoothWireframeWEBP from "../images/maynooth-starting-design.webp";
import MaynoothDigitalWireframeWEBP from "../images/maynooth-digital-wireframes.webp";
import MaynoothLowFidelityWEBP from "../images/maynooth-low-fidelity.webp";
import MaynoothMoodboardWEBP from "../images/maynooth-moodboard.webp";
import MaynoothStyleGuideWEBP from "../images/maynooth-style-guide.webp";
import MaynoothMockupOneWEBP from "../images/maynooth-mockup-1.webp";
import MaynoothMockupTwoWEBP from "../images/maynooth-mockup-2.webp";
import MaynoothHighFidelityWEBP from "../images/maynooth-highfidelity.webp";
import MaynoothTakeawaysWEBP from "../images/maynooth-takeaways.webp";

const PaddinglessContainer = styled(Container)`
  padding-inline: 0;
  @media (max-width: 768px) {
    padding-inline: 0;
  }
`;

const SpreadContainer = styled(Container)`
  width: -webkit-fill-available;
`;

const StyledParagraphHeader = styled(ParagraphHeader)`
  align-self: baseline;
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const DoubleImageContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Maynooth = () => {
  return (
    <div>
      <PaddinglessContainer>
        <ProjectDescription
          sectionHeaderText={"Maynooth"}
          projectType={"UI Design"}
          dateRange={"April - May 2021"}
          description={
            "This project was done as a part of ‘User Experience Design Essentials – Adobe XD UI UX Design’ – Udemy. The objective of this project to build an e-commerce website for people to browse and purchase furniture for home delivery. <br>Tools used: Adobe XD, Photoshop, Illustrator, pen and paper"
          }
        />
        <TextsImageRow
          sectionHeaderText={"PROJECT OVERVIEW"}
          headers={["The product", "The goal", "My responsibility"]}
          texts={[
            "Maynooth Furniture is a new business selling affordable high-end design furniture made in Ireland.",
            "To build an ecommerce website for people to browse & purchase furniture for home delivery.",
            "Paper and digital wireframing, low and high-fidelity prototyping,accounting for accessibility, and iterating on designs",
          ]}
          image={
            <MaynoothOverviewStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothOverviewWEBP}
            />
          }
        />
        <TextsImageRow
          sectionHeaderText={"TARGET AUDIENCE - PERSONA"}
          image={
            <MaynoothUserStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothUserWEBP}
            />
          }
        />
        <TextsImageRow
          isTextCenter={true}
          isDivider={false}
          sectionHeaderText={"STARTING THE DESIGN"}
          headers={["Paper wireframes"]}
          texts={[
            "I start the design process with paper wireframes. This way I am able to brainstorm through many design ideas quickly. The persona influenced my sketches in keeping the design and the navigation simple. After I chose the most suitable layout for the persona I moved on to creating digital wireframes in Adobe XD.",
          ]}
          image={
            <MaynoothWireframeStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothWireframeWEBP}
            />
          }
        />
        <TextsImageRow
          isTextCenter={true}
          isDivider={false}
          headers={["Digital wireframes"]}
          texts={[
            "After creating multiple paper wireframes and choosing the one that serves the user needs the best, I move on to create it in Adobe XD.",
          ]}
          image={
            <MaynoothDigitalWireframeStyledImage
              src={MaynoothDigitalWireframeWEBP}
            />
          }
        />
        <TextsImageRow
          isTextCenter={true}
          headers={["Low - fidelity prototype"]}
          texts={[
            "Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was the furniture order process.",
          ]}
          image={
            <MaynoothLowFidelityStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothLowFidelityWEBP}
            />
          }
        />
        <TextsImageRow
          isTextCenter={true}
          isDivider={false}
          sectionHeaderText={"REFINING THE DESIGN"}
          headers={["Mood board"]}
          texts={[
            "First I created a mood board, keeping in mind the persona and trying to match her preferences (colors, shapes, typeface, etc.)This way I can refine the design keeping in mind the mood and emotions I want to invoke in users.",
          ]}
          image={
            <MaynoothMoodboardStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothMoodboardWEBP}
            />
          }
        />
        <SubheaderImage
          subheader={"Style guide"}
          image={
            <MaynoothStyleGuideStyledImage
              onContextMenu={(e) => e.preventDefault()}
              key={"Style guide"}
              src={MaynoothStyleGuideWEBP}
            />
          }
        />
        <SubheaderImage
          subheader={"Mockups"}
          image={
            <DoubleImageContainer>
              <MaynoothMockupStyledImage
                onContextMenu={(e) => e.preventDefault()}
                key={"Mockups 1"}
                src={MaynoothMockupOneWEBP}
              />
              <MaynoothMockupStyledImage
                onContextMenu={(e) => e.preventDefault()}
                key={"Mockups 2"}
                src={MaynoothMockupTwoWEBP}
              />
            </DoubleImageContainer>
          }
        />
        <TextsImageRow
          isTextCenter={true}
          headers={["High - fidelity prototype"]}
          texts={[
            "The final high-fidelity prototype presented the full user flow from order to checkout.",
          ]}
          links={[
            {
              text: "High - fidelity prototype",
              link: "https://xd.adobe.com/view/ef1b279f-088f-4248-8eed-a0fd4b85ac98-ba48/",
            },
          ]}
          image={
            <MaynoothHighFidelityStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothHighFidelityWEBP}
            />
          }
        />
        <TextsImageRow
          isTextCenter={true}
          isDivider={false}
          sectionHeaderText={"TAKEAWAYS"}
          headers={["What I learned"]}
          texts={[
            "Since the Maynooth furniture website was my first project, I learned a lot about organising the process and documenting the progress, and got a taste of the design tool. In retrospect, I would like to follow a more solid design approach.To sum it up, completing this project was a proud milestone for me as it killed off my doubts as to whether the UI/UX design field suits me.",
          ]}
          image={
            <MaynoothTakeawaysStyledImage
              onContextMenu={(e) => e.preventDefault()}
              src={MaynoothTakeawaysWEBP}
            />
          }
        />
      </PaddinglessContainer>
      <NextProjectSegment text={"Home"} link={"/"} />
    </div>
  );
};

const SubheaderImage = ({ subheader, image }) => {
  return (
    <>
      <SpreadContainer>
        <StyledParagraphHeader>{subheader}</StyledParagraphHeader>
        {image}
      </SpreadContainer>
    </>
  );
};

export default Maynooth;
