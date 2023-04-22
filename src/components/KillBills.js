/** @format */
import { ProjectDescription, TextsImageRow } from "./ProjectParts";
import { KillBillsOverviewStyledImage } from "./SvgStyles";
import KillBillsOverviewWEBP from "../images/killbills-overview.webp";

export const KillBills = () => {
  return (
    <div>
      <ProjectDescription
        sectionHeaderText={"KILLBILLS"}
        dateRange={"November 2021 - January 2022"}
        description={
          "designed this app for a client, as part of a user experience course on behalf of Apple Seeds Academy. As part of the project I was responsible for understanding the needs of the users, developing and designing a platform that meets these needs while maintaining customer requirements and existing constraints. Tools used: Photoshop, Adobe XD, pen and paper"
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
        image={<KillBillsOverviewStyledImage src={KillBillsOverviewWEBP} />}
      />
    </div>
  );
};
