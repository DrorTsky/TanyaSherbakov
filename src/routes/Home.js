/** @format */

import React from "react";
import { ProjectPreview } from "../components/ProjectPreviewParts";
import {
  MarketLogSVGStyle,
  IchiSVGStyle,
  KillbillsSVGStyle,
  MaynoothSVGStyle,
} from "../components/SvgStyles";

export const Home = () => {
  return (
    <div>
      <ProjectPreview
        text={
          "Marketlog offers an online community & provides the user with tools to track, compare and analyze their trading activity."
        }
        link={"/about"}
        name={"Marketlog"}
        year={2022}
        blob={"blue"}
      >
        <MarketLogSVGStyle />
      </ProjectPreview>
      <ProjectPreview
        text={
          "The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers."
        }
        link={"/about"}
        name={"KillBills"}
        year={2022}
        blob={"pink"}
      >
        <KillbillsSVGStyle />
      </ProjectPreview>
      <ProjectPreview
        text={
          "Marketlog offers an online community & provides the user with tools to track, compare and analyze their trading activity."
        }
        link={"/about"}
        name={"Ichi Sushi"}
        year={2021}
        blob={"blue"}
      >
        <IchiSVGStyle />
      </ProjectPreview>
      <ProjectPreview
        text={
          "The platform provides an easy to use, fast and Eco – friendly way for people to pay their bills by gathering them all in one app disregarding payment vouchers."
        }
        link={"/about"}
        name={"Maynooth"}
        year={2021}
        blob={"pink"}
      >
        <MaynoothSVGStyle />
      </ProjectPreview>
    </div>
  );
};
