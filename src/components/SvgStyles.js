/** @format */

import styled from "styled-components";
import { ReactComponent as MarketLogSVG } from "../images/marketlog.svg";
import { ReactComponent as IchiSVG } from "../images/ichi.svg";
import { ReactComponent as KillbillsSVG } from "../images/killbills.svg";
import { ReactComponent as MaynoothSVG } from "../images/maynooth.svg";
import { ReactComponent as BlueBlobSVG } from "../images/blueBlob.svg";
import { ReactComponent as PinkBlobSVG } from "../images/pinkBlob.svg";

export const BlueBlobSVGStyle = styled(BlueBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
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
