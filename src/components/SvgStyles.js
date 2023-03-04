/** @format */

import styled from "styled-components";
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
