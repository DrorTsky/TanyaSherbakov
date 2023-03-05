/** @format */

import styled, { css } from "styled-components";
import { ReactComponent as MarketLogSVG } from "../images/marketlog.svg";
import { ReactComponent as IchiSVG } from "../images/ichi.svg";
import { ReactComponent as KillbillsSVG } from "../images/killbills.svg";
import { ReactComponent as MaynoothSVG } from "../images/maynooth.svg";
import { ReactComponent as BlueBlobSVG } from "../images/blueBlob.svg";
import { ReactComponent as PinkBlobSVG } from "../images/pinkBlob.svg";
import { ReactComponent as DoubleBlobSVG } from "../images/doubleBlob.svg";
import { ReactComponent as IsraelSVG } from "../images/israel.svg";
import { ReactComponent as ArrowSVG } from "../images/arrow.svg";
import { ReactComponent as AboutSVG } from "../images/about_wildheart.svg";
import { ReactComponent as PatzankiOneSVG } from "../images/Patzanki 1.svg";
import { ReactComponent as PatzankiTwoSVG } from "../images/Patzanki 2.svg";
import { ReactComponent as PatzankiThreeSVG } from "../images/Patzanki 3.svg";
import { ReactComponent as PatzankiFourSVG } from "../images/Patzanki 4.svg";
import { ReactComponent as PatzankiFiveSVG } from "../images/Patzanki 5.svg";
import { ReactComponent as PatzankiSixSVG } from "../images/Patzanki 6.svg";
import { ReactComponent as PatzankiSevenSVG } from "../images/Patzanki 7.svg";
import { ReactComponent as PatzankiEightSVG } from "../images/Patzanki 8.svg";
import { ReactComponent as MalluableOneSVG } from "../images/Malluable 1.svg";
import { ReactComponent as MalluableTwoSVG } from "../images/Malluable 2.svg";
import { ReactComponent as MalluableThreeSVG } from "../images/Malluable 3.svg";
import { ReactComponent as MagazinesOneSVG } from "../images/Magazines.svg";
import { ReactComponent as MagazinesTwoSVG } from "../images/Magazines 2.svg";
import { ReactComponent as AfterdarkSVG } from "../images/Afterdark.svg";

export const BlueBlobSVGStyle = styled(BlueBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
  }
`;

export const HeaderBlueBlobSVGStyle = styled(BlueBlobSVG)`
  height: 32px;
  width: 31px;
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 24px;
    width: 23px;
  }
`;

export const PinkBlobSVGStyle = styled(PinkBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
  }
`;

export const MarketLogSVGStyle = styled(MarketLogSVG)`
  pointer-events: none;
  @media (max-width: 768px) {
    height: 40%;
  }
`;

export const IchiSVGStyle = styled(IchiSVG)`
  pointer-events: none;
  @media (max-width: 768px) {
    height: 40%;
  }
`;

export const KillbillsSVGStyle = styled(KillbillsSVG)`
  pointer-events: none;
  @media (max-width: 768px) {
    height: 40%;
  }
`;

export const MaynoothSVGStyle = styled(MaynoothSVG)`
  pointer-events: none;
  @media (max-width: 768px) {
    height: 40%;
  }
`;

export const DoubleBlobSVGStyle = styled(DoubleBlobSVG)`
  width: 369px;
  height: 355px;
  @media (max-width: 768px) {
    width: 223px;
    height: 215px;
    align-self: center;
  }
`;

export const IsraelSVGStyle = styled(IsraelSVG)`
  width: 18px;
  height: 59px;
  @media (max-width: 768px) {
    width: 9px;
    height: 31px;
  }
`;

export const ArrowSVGStyle = styled(ArrowSVG)`
  width: 36px;
  height: 46px;
  path {
    ${(props) => `fill: ${props.color}`}
  }
  @media (max-width: 768px) {
  }
`;

export const AboutSVGStyle = styled(AboutSVG)`
  width: 608px;
  height: 606px;
  @media (max-width: 768px) {
    width: 330px;
    height: 328px;
  }
`;

const BigPatzanki = css`
  width: 525.27px;
  height: 743px;
  @media (max-width: 768px) {
    width: 330px;
    height: 466.79px;
  }
`;

const SmallPatzanki = css`
  width: 525.04px;
  height: 317px;
  @media (max-width: 768px) {
    width: 330px;
    height: 199.21px;
  }
`;

export const PatzankiOneSVGStyle = styled(PatzankiOneSVG)`
  ${BigPatzanki}
`;

export const PatzankiTwoSVGStyle = styled(PatzankiTwoSVG)`
  ${BigPatzanki}
`;

export const PatzankiSevenSVGStyle = styled(PatzankiSevenSVG)`
  ${BigPatzanki}
`;

export const PatzankiEightSVGStyle = styled(PatzankiEightSVG)`
  ${BigPatzanki}
`;

export const PatzankiThreeSVGStyle = styled(PatzankiThreeSVG)`
  ${SmallPatzanki}
`;

export const PatzankiFourSVGStyle = styled(PatzankiFourSVG)`
  ${SmallPatzanki}
`;

export const PatzankiFiveSVGStyle = styled(PatzankiFiveSVG)`
  ${SmallPatzanki}
`;

export const PatzankiSixSVGStyle = styled(PatzankiSixSVG)`
  ${SmallPatzanki}
`;

export const MalluableOneSVGStyle = styled(MalluableOneSVG)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MalluableTwoSVGStyle = styled(MalluableTwoSVG)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MalluableThreeSVGStyle = styled(MalluableThreeSVG)`
  width: 1447px;
  height: 1085.25px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MagazinesOneSVGStyle = styled(MagazinesOneSVG)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MagazinesTwoSVGStyle = styled(MagazinesTwoSVG)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const AfterdarkSVGStyle = styled(AfterdarkSVG)`
  height: 1087px;
  width: 1449px;

  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;
