/** @format */
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  ProjectDescription,
  TextsImageRow,
  SectionHeader,
  SideHeaderTextAndImage,
  UserSubHeader,
  Container,
  HeadersAndLists,
  NextProjectSegment,
} from "./ProjectParts";

import {
  IchiOverviewStyledImage,
  KillBillsPainPointsStyledImage,
  IchiUserStyledImage,
  IchiMapStyledImage,
  IchiWireframeStyledImage,
  IchiDigitalStyledImage,
  IchiLowFidelityStyledImage,
  IchiBeforeAfterStyledImage,
  IchiMockupStyledImage,
  IchiHighfidelityStyledImage,
} from "./SvgStyles";
import IchiOverviewWEBP from "../images/ichi-overview.webp";
import IchiPainPointsWEBP from "../images/Ichi-pain.webp";
import IchiUserWEBP from "../images/Ichi-user.webp";
import IchiMapWEBP from "../images/Ichi-journy-map.webp";
import IchiWireframeWEBP from "../images/Ichi-digital-wireframe-1.webp";
import IchiWireframeTwoWEBP from "../images/Ichi-digital-wireframe-2.webp";
import IchiStartingWEBP from "../images/Ichi-starting-design.webp";
import IchiLowFidelityWEBP from "../images/Ichi-digital-wireframe-3.webp";
import IchiBeforeAfterOneWEBP from "../images/Ichi-mockups-1.webp";
import IchiBeforeAfterTwoWEBP from "../images/Ichi-mockups-2.webp";
import IchiMockupWEBP from "../images/Ichi-mockups-3.webp";
import IchiHighfidelityWEBP from "../images/Ichi-highfidelity.webp";
import IchiaccessibilityWEBP from "../images/Ichi-accesability.webp";
import { Divider } from "./ProjectPreviewParts";

const DigitalWireframesContainer = styled.div`
  display: flex;
  gap: 55px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const understandingTheUserTextImagesData = [
  {
    header: "User research: summary",
    text: "I conducted interviews and created empathy maps to understand the users I'm designing for and their needs. A primary user group identified through researchwas working adults who don’t have time to cook meals.<br> This user group confirmed initial assumptions about Ichi customers, but research also revealed thattime was not the only factor limiting users from cooking at home. Other user problems includedobligations, interests, or challenges that make it difficult to get groceries for cooking or go to restaurants in-person.",
    imageHeader: "Pain points",
    images: [
      <KillBillsPainPointsStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiPainPointsWEBP}
      />,
    ],
  },
  {
    header: "Meet the user",
    key: "user",
    text: "Adam is about to complete his B.Sc in Program Engineering, and hopes that the internship will launch their career. Adam finds himself very busy during the day and has no time for food prep. After a long day he is looking to order a delivery from his favorite sushi restaurant and relax.",
    images: [
      <IchiUserStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiUserWEBP}
      />,
    ],
  },
  {
    header: "Problem statement",
    text: "Adam is a busy student and an intern who needs to know when his order will arrive because he wants to organize his time better.",
  },
  {
    header: "User journey map",
    text: "Mapping Adam’s user journey revealed how helpful it would be for users to have access to a dedicated Ichi app",
    images: [
      <IchiMapStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiMapWEBP}
      />,
    ],
  },
];

const headerAndListsItems = [
  { header: "Usability study: findings" },
  {
    header: "Round 1 findings",
    listItems: [
      "Users want to order sushi quickly",
      "Users want to know the exact time of the delivery",
      "Users want their location to set automatically",
    ],
  },
  {
    header: "Round 2 findings",
    listItems: [
      "The cart icon is not visible enough",
      "The profile section is not in a intuitive place for the users",
    ],
  },
];

const refiningTheDesignTextImagesData = [
  {
    header: "Mockups",
    text: "In the early designs there were two navigation bars. The usability studies showed that it was confusing for the users, thus I <strong>reduced</strong> it to contain only <strong>one navigation bar.</strong>",
    images: [
      <IchiBeforeAfterStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiBeforeAfterOneWEBP}
      />,
    ],
  },
  {
    text: "The <strong>cart icon</strong> was moved to the <strong>top - right corner</strong> of the navigation bar, because the usability studies showed that in the initial designs users had trouble finding it.",
    images: [
      <IchiBeforeAfterStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiBeforeAfterTwoWEBP}
      />,
    ],
  },
  {
    images: [
      <IchiMockupStyledImage
        onContextMenu={(e) => e.preventDefault()}
        key={uuidv4()}
        src={IchiMockupWEBP}
      />,
    ],
  },
  {
    isTextsImageRow: true,
    isTextCenter: true,
    isDivider: false,
    headers: ["High-fidelity prototype"],
    texts: [
      "The final high-fidelity prototype presented cleaner user flows for sushi order and checkout. It also met user needs for tracking a delivery option as well as more customization.",
    ],
    links: [
      { text: "High fidelity prototype", link: "https://bit.ly/3cZFcVG" },
    ],
    image: (
      <IchiHighfidelityStyledImage
        key={uuidv4()}
        onContextMenu={(e) => e.preventDefault()}
        src={IchiHighfidelityWEBP}
      />
    ),
  },
];

const Ichi = () => {
  const understandingTheUserTextImages = understandingTheUserTextImagesData.map(
    (TextImage) => <SideHeaderTextAndImage {...TextImage} key={uuidv4()} />
  );
  const refiningTheDesignTextImages = refiningTheDesignTextImagesData.map(
    (TextImage) => <SideHeaderTextAndImage {...TextImage} key={uuidv4()} />
  );

  return (
    <div>
      <ProjectDescription
        sectionHeaderText={"ICHI"}
        dateRange={"May - June 2021"}
        description={
          "This project was for my UX Design certificate at Google. The objective of the course was to learn how to design an app, from conception to delivery, to provide a better user experience. I completed this project over the course of 6 weeks, and learned an incredible amount about design process. <br>Tools used: Illustrator, Photoshop, Figma, pen and paper."
        }
      />
      <TextsImageRow
        sectionHeaderText={"PROJECT OVERVIEW"}
        headers={["The product", "The problems", "The goal", "The solution"]}
        texts={[
          "Ichi is a regional sushi restaurant that strives to deliver healthy, specialty sushi and side dishes. They offer a wide spectrum of competitive pricing. Ichi targets customers like commuters and workers who lack the time or ability to prepare a family dinner.",
          "Long and inaccurate delivery time often causes frustration in users, especially the busy and the hungry ones 😉",
          "Provide transparency about the delivery time so the users can organise their time better",
          "Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.",
        ]}
        image={
          <IchiOverviewStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={IchiOverviewWEBP}
          />
        }
      />
      <Container>
        <SectionHeader>UNDERSTANDING THE USER</SectionHeader>
        {understandingTheUserTextImages}
        <Divider />
      </Container>
      <TextsImageRow
        sectionHeaderText={"STARTING THE DESIGN"}
        isTextCenter={true}
        headers={["Paper wireframes"]}
        texts={[
          "Taking the time to draft iterations of each screen of the app on paper, ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritise visible empathy buttons for the new order to help users start the process easily.",
        ]}
        image={
          <IchiWireframeStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={IchiStartingWEBP}
          />
        }
      />
      <Container>
        <SideHeaderTextAndImage
          header={"Digital wireframes"}
          text={
            "As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research. Delivery timing transparency was a key user need to address in the designs."
          }
          images={[
            <DigitalWireframesContainer>
              <IchiDigitalStyledImage
                onContextMenu={(e) => e.preventDefault()}
                key={uuidv4()}
                src={IchiWireframeWEBP}
              />
              <IchiDigitalStyledImage
                onContextMenu={(e) => e.preventDefault()}
                key={uuidv4()}
                src={IchiWireframeTwoWEBP}
              />
            </DigitalWireframesContainer>,
          ]}
        />
      </Container>
      <TextsImageRow
        isTextCenter={true}
        headers={["Low-fidelity prototype"]}
        texts={[
          "Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was the sushi ordering process, so the prototype could be used in a usability study.",
        ]}
        links={[
          { text: "Low fidelity prototype", link: "https://bit.ly/3xJrJJK" },
        ]}
        image={
          <IchiLowFidelityStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={IchiLowFidelityWEBP}
          />
        }
      />
      <Container>
        <HeadersAndLists items={headerAndListsItems} />
        <Divider />
      </Container>
      <Container>
        <SectionHeader>REFINING THE DESIGN</SectionHeader>
        {refiningTheDesignTextImages}
        <UserSubHeader>Accessibility considerations</UserSubHeader>
        <KillBillsPainPointsStyledImage
          onContextMenu={(e) => e.preventDefault()}
          src={IchiaccessibilityWEBP}
        />
        <Divider />
      </Container>
      <TextsImageRow
        sectionHeaderText={"TAKEAWAYS"}
        isDivider={false}
        isTextCenter={true}
        headers={["Impact", "What I learned", "Next steps"]}
        texts={[
          "The app makes users feel like Ichi Sushi really thinks about how to meet their needs. One quote from peer feedback: “It’s easy to use and has a really nice design making it straightforward on how to order food. The “track order” feature is really helpful.”",
          "While designing the Ichi app, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app’s designs.",
          "• Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed. <br>• Conduct more user research to determine any new areas of need.",
        ]}
      />
      <NextProjectSegment text={"Next Project"} link={"/Maynooth"} />
    </div>
  );
};

export default Ichi;
