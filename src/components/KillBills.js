/** @format */
import styled from "styled-components";
import {
  ProjectDescription,
  TextsImageRow,
  SectionHeader,
  ParagraphText,
  SectionBody,
  DesriptionContainer,
  Container,
  UserSubHeader,
  SubHeaderImage,
} from "./ProjectParts";
import { Divider } from "./ProjectPreviewParts";
import { NextProjectSegment } from "./ProjectParts";
import KillBillsUserWEBP from "../images/killbills - user.webp";
import {
  KillBillsOverviewStyledImage,
  KillBillsUnderstandingStyledImage,
  KillBillsPainPointsStyledImage,
  KillBillsWireframeStyledImage,
  KillBillsUiGuideStyledImage,
  KillBillsMockupStyledImage,
  KillBillsSketchStyledImage,
} from "./SvgStyles";
import KillBillsPainPointsWEBP from "../images/killbills-pain-points.webp";
import KillBillsOverviewWEBP from "../images/killbills-overview.webp";
import KillBillswireframeWEBP from "../images/killbills-starting-design.webp";
import KillBillsUiGuideWEBP from "../images/killbills-ui-guide.webp";
import KillBillsMockupOneWEBP from "../images/killbills-ui-guide-2.webp";
import KillBillsMockupTwoWEBP from "../images/killbills-ui-guide-3.webp";
import KillBillsSketchWEBP from "../images/killbills - sketch.webp";

const StyledParagraphText = styled(ParagraphText)`
  padding-inline: 202px;
  text-align: center;
  @media (max-width: 768px) {
    padding-inline: unset;
  }
`;

const StyledUserSubHeader = styled(UserSubHeader)`
  @media (max-width: 768px) {
    font-weight: 450;
    font-size: 32px;
    line-height: 41px;
  }
`;

const StyledSectionBody = styled(SectionBody)`
  align-items: center;
  gap: 60px;
  @media (max-width: 768px) {
    gap: 50px;
  }
`;

const StyledDesriptionContainer = styled(DesriptionContainer)`
  width: 57%;
  gap: unset;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledIframe = styled.iframe`
  width: 393px;
  margin: 0;
  padding: 0;
  height: 100%;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IframeContainer = styled.div`
  height: 100vh;
`;

export const KillBills = () => {
  return (
    <div>
      <ProjectDescription
        sectionHeaderText={"KILLBILLS"}
        dateRange={"November 2021 - January 2022"}
        description={
          "designed this app for a client, as part of a user experience course on behalf of Apple Seeds Academy. As part of the project I was responsible for understanding the needs of the users, developing and designing a platform that meets these needs while maintaining customer requirements and existing constraints. <br>Tools used: Photoshop, Adobe XD, pen and paper"
        }
      />
      <TextsImageRow
        sectionHeaderText={"PROJECT OVERVIEW"}
        isHeaderInMobile={false}
        headers={["The product", "The problems", "The solution"]}
        texts={[
          "KillBills was founded during a casual conversation between two childhood friends regarding a bill that went missing when one of them was moving house.The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers. The app mostly addresses the younger people who share lease but does not forget the older and family-oriented audience. My job was to design the user experience for KillBills from top to bottom.",
          "The first problem is that the way Israelis receive and pay their bills is old fashioned, slow and costly. Bills that are lost or forgotten generate preventable debt. Citizens have no way to monitor their bills by any way other than collecting receipts which creates disorder and confusion. The second problem is that state provided bills cannot be broken into separate smaller bills for many to pay (i.e., roommates paying for the electricity need to choose one person to pay the entire bill himself, creating debt)",
          "KillBills provides its users a platform in which they can receive, monitor and pay their bills either separately or by splitting it between other users.",
        ]}
        image={
          <KillBillsOverviewStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={KillBillsOverviewWEBP}
          />
        }
      />
      <Container>
        <SectionHeader>UNDERSTANDING THE USER</SectionHeader>
        <UserSubHeader>User persona</UserSubHeader>
        <KillBillsUnderstandingStyledImage
          onContextMenu={(e) => e.preventDefault()}
          src={KillBillsUserWEBP}
        />
        <StyledParagraphText>
          Chen lives in an apartment with his brother and he needs to split the
          electricity bill with him because he wants their payments to be equal.
        </StyledParagraphText>
        <StyledUserSubHeader>Pain points</StyledUserSubHeader>
        <KillBillsPainPointsStyledImage
          onContextMenu={(e) => e.preventDefault()}
          src={KillBillsPainPointsWEBP}
        />
        <Divider />
      </Container>
      <Container>
        <SectionHeader>STARTING THE DESIGN</SectionHeader>
        <UserSubHeader>Wireframes</UserSubHeader>
        <StyledSectionBody>
          <StyledDesriptionContainer>
            <span>
              As the initial design phase continued, I made sure to base screen
              designs on <strong>feedback</strong> and findings from{" "}
              <strong>AB testing</strong>
              while keeping in mind business needs and limitations.During the
              testing I have found that
              <strong>
                users want to be able to pay a single bill with multiple payment
                methods.
              </strong>
            </span>
          </StyledDesriptionContainer>
          <KillBillsWireframeStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={KillBillswireframeWEBP}
          />
        </StyledSectionBody>
        <SubHeaderImage
          subheader={"UI Guide"}
          images={[
            <KillBillsUiGuideStyledImage
              onContextMenu={(e) => e.preventDefault()}
              key={"UI Guide"}
              src={KillBillsUiGuideWEBP}
            />,
          ]}
        />
        <SubHeaderImage
          subheader={"Mockups"}
          images={[
            <KillBillsMockupStyledImage
              onContextMenu={(e) => e.preventDefault()}
              key={"Mockups 1"}
              src={KillBillsMockupOneWEBP}
            />,
            <KillBillsMockupStyledImage
              onContextMenu={(e) => e.preventDefault()}
              key={"Mockups 2"}
              src={KillBillsMockupTwoWEBP}
            />,
          ]}
        />
        <UserSubHeader>High - fidelity prototype</UserSubHeader>
        <IframeContainer>
          <StyledIframe
            title="fidelity"
            src="https://xd.adobe.com/embed/9892f7d9-5117-4481-b058-936df813788f-cdc1/?fullscreen"
            frameborder="0"
            allowfullscreen
          />
        </IframeContainer>
        <Divider />
      </Container>
      <TextsImageRow
        sectionHeaderText={"TAKEAWAYS"}
        isDivider={false}
        headers={["Impact", "What I learned:", "Next steps"]}
        texts={[
          "The app provides an easy and accessible way to pay bills. One quote from peer feedback: “I can't wait to use the app! We so need it”",
          "I learned how to work with an external business and to communicate and solve users' needs under business limitations.",
          "• Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed. <br>• Conduct more user research to determine any new areas of need.",
        ]}
        image={
          <KillBillsSketchStyledImage
            onContextMenu={(e) => e.preventDefault()}
            src={KillBillsSketchWEBP}
          />
        }
      />
      <NextProjectSegment text={"Next Project"} link={"/Ichi"} />
    </div>
  );
};
