/** @format */

import styled, { css } from "styled-components";

import { ReactComponent as BlueBlobSVG } from "../images/blueBlob.svg";
import BlueBlob from "../images/blueBlob.svg";
import YellowCircle from "../images/YellowCircle.svg";
import { ReactComponent as PinkBlobSVG } from "../images/pinkBlob.svg";
import { ReactComponent as YellowBlobSVG } from "../images/yellowBlob.svg";
import { ReactComponent as ArrowSVG } from "../images/arrow.svg";

const ImageStyle = styled.img`
  user-select: none;
`;

export const IconStyles = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    svg {
      height: 19px;
      width: 19px;
    }
  }
`;

export const OverviewStyledImage = styled(ImageStyle)`
  width: 50%;
  @media (max-width: 768px) {
    width: 330px;
    height: 610px;
    align-self: center;
  }
`;

export const UnderstandingStyledImage = styled(ImageStyle)`
  height: 641px;
  width: 493px;

  @media (max-width: 768px) {
    width: 330px;
    heightr: 430px;
  }
`;

export const BlueBlobSVGStyle = styled(BlueBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
  }
`;

export const HeaderBlueBlobSVGStyle = styled.div`
  height: 32px;
  width: 31px;
  margin-top: 5px;
  align-self: center;
  background-image: url(${BlueBlob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url(${YellowCircle});
  }
  @media (max-width: 768px) {
    height: 24px;
    width: 23px;
    &:hover {
      background-image: url(${BlueBlob});
    }
  }
`;

export const YellowBlobMobileSVGStyle = styled.div`
  height: 32px;
  width: 31px;
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 24px;
    width: 23px;
  }
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${YellowCircle});
`;

export const PinkBlobSVGStyle = styled(PinkBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
  }
`;

export const YellowBlobVSGStyle = styled(YellowBlobSVG)`
  margin-top: 5px;
  align-self: center;
  @media (max-width: 768px) {
    height: 26px;
    width: 25px;
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

export const MagazinesStyledImage = styled(ImageStyle)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const AfterdarkStyledImage = styled(ImageStyle)`
  height: 1087px;
  width: 1449px;

  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MarketlogPreviewStyledImage = styled(ImageStyle)`
  pointer-events: none;
  width: 1136px;
  height: 618px;
  @media (max-width: 768px) {
    width: 327.71px;
    height: 178.28px;
  }
`;

export const KillbillsPreviewStyledImage = styled(ImageStyle)`
  pointer-events: none;
  width: 1359.19px;
  height: 618px;
  @media (max-width: 768px) {
    width: 330px;
    height: 149px;
  }
`;

export const MaynoothPreviewStyledImage = styled(ImageStyle)`
  pointer-events: none;
  width: 1275px;
  height: 809px;
  @media (max-width: 768px) {
    width: 323px;
    height: 205px;
  }
`;

export const IchiPreviewStyledImage = styled(ImageStyle)`
  pointer-events: none;
  width: 930px;
  height: 839px;
  @media (max-width: 768px) {
    width: 330px;
    height: 298px;
  }
`;

export const DoubleBlobStyledImage = styled(ImageStyle)`
  width: 369px;
  height: 355px;
  @media (max-width: 768px) {
    width: 312px;
    height: 312px;
    align-self: center;
  }
`;

export const IsraelStyledImage = styled(ImageStyle)`
  width: 18px;
  height: 59px;
  @media (max-width: 768px) {
    width: 9px;
    height: 31px;
  }
`;

export const AboutStyledImage = styled(ImageStyle)`
  width: 608px;
  height: 606px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const BigPatzankiStyledImage = styled(ImageStyle)`
  width: 525.27px;
  height: 743px;
  @media (max-width: 768px) {
    width: 330px;
    height: 466.79px;
  }
`;

export const SmallPatzankiStyledImage = styled(ImageStyle)`
  width: 525.04px;
  height: 317px;
  @media (max-width: 768px) {
    width: 330px;
    height: 199.21px;
  }
`;

export const MalluableSmallStyledImage = styled(ImageStyle)`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MalluableBigStyledImage = styled(ImageStyle)`
  width: 1447px;
  height: 1085.25px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MarketlogResultBigStyledImage = styled(ImageStyle)`
  width: 862px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 200px;
  }
`;

export const MarketlogResultSmallStyledImage = styled(ImageStyle)`
  width: 282px;
  height: 522px;
  @media (max-width: 768px) {
    width: 108px;
    height: 200px;
  }
`;

export const KillBillsOverviewStyledImage = styled(ImageStyle)`
  width: 488.83px;
  height: 905px;
  @media (max-width: 768px) {
    width: 330px;
    height: 610px;
  }
`;

export const KillBillsUnderstandingStyledImage = styled(ImageStyle)`
  width: 100%;
  height: 1155.57px;
  @media (max-width: 768px) {
    height: 233.36px;
  }
`;

export const KillBillsPainPointsStyledImage = styled(ImageStyle)`
  width: 1157.5px;
  height: 518.43px;
  @media (max-width: 768px) {
    width: 330px;
    height: 151.49px;
  }
`;

export const KillBillsWireframeStyledImage = styled(ImageStyle)`
  width: 532px;
  height: 474.4px;

  @media (max-width: 768px) {
    width: 100%;
    height: 294.27px;
  }
`;

export const KillBillsUiGuideStyledImage = styled(ImageStyle)`
  width: 1200px;
  height: 675px;

  @media (max-width: 768px) {
    width: 100%;
    height: 185.62px;
  }
`;

export const KillBillsMockupStyledImage = styled(ImageStyle)`
  width: 100%;
  height: 522px;

  @media (max-width: 768px) {
    height: 279px;
  }
`;

export const KillBillsSketchStyledImage = styled(ImageStyle)`
  width: 767px;
  height: 575px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.39px;
  }
`;

export const IchiOverviewStyledImage = styled(ImageStyle)`
  width: 666px;
  height: 803px;
  @media (max-width: 768px) {
    width: 330px;
    height: 397.88px;
  }
`;

export const IchiUserStyledImage = styled(ImageStyle)`
  width: 100%;
  height: 963.97px;
  @media (max-width: 768px) {
    height: 194.56px;
  }
`;

export const IchiMapStyledImage = styled(ImageStyle)`
  width: 100%;
  height: 837.09px;
  @media (max-width: 768px) {
    height: 168.95px;
  }
`;

export const IchiWireframeStyledImage = styled(ImageStyle)`
  width: 650px;
  height: 428.77px;
  @media (max-width: 768px) {
    width: 100%;
    height: 217.68px;
  }
`;

export const IchiDigitalStyledImage = styled(ImageStyle)`
  width: 748px;
  height: 689px;
  @media (max-width: 768px) {
    width: 330px;
    height: 303.97px;
  }
`;

export const IchiLowFidelityStyledImage = styled(ImageStyle)`
  width: 879px;
  height: 414px;

  @media (max-width: 768px) {
    width: 330px;
    height: 155.43px;
  }
`;

export const IchiBeforeAfterStyledImage = styled(ImageStyle)`
  width: 695px;
  height: 640px;

  @media (max-width: 768px) {
    width: 330px;
    height: 303.88px;
  }
`;

export const IchiMockupStyledImage = styled(ImageStyle)`
  width: 1635px;
  height: 1226.25px;

  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const IchiHighfidelityStyledImage = styled(ImageStyle)`
  width: 879px;
  height: 414px;

  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MaynoothOverviewStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 493.4px;

  @media (max-width: 768px) {
    width: 330px;
    height: 209.55px;
  }
`;

export const MaynoothUserStyledImage = styled(ImageStyle)`
  width: 1066px;
  height: 662px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const MaynoothWireframeStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 510.23px;

  @media (max-width: 768px) {
    width: 330px;
    height: 216.7px;
  }
`;

export const MaynoothDigitalWireframeStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 942.11px;

  @media (max-width: 768px) {
    width: 330px;
    height: 400.12px;
  }
`;

export const MaynoothLowFidelityStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 374.41px;

  @media (max-width: 768px) {
    width: 330px;
    height: 159.01px;
  }
`;

export const MaynoothMoodboardStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 437.06px;

  @media (max-width: 768px) {
    width: 330px;
    height: 185.62px;
  }
`;

export const MaynoothStyleGuideStyledImage = styled(ImageStyle)`
  width: 1164px;
  height: 395px;

  @media (max-width: 768px) {
    width: 330px;
    height: 111.98px;
  }
`;

export const MaynoothMockupStyledImage = styled(ImageStyle)`
  width: 777.5px;
  height: 967.21px;

  @media (max-width: 768px) {
    width: 330px;
    height: 311.34px;
  }
`;

export const MaynoothHighFidelityStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 312.14px;

  @media (max-width: 768px) {
    width: 330px;
    height: 132.57px;
  }
`;

export const MaynoothTakeawaysStyledImage = styled(ImageStyle)`
  width: 777px;
  height: 518px;

  @media (max-width: 768px) {
    width: 330px;
    height: 220px;
  }
`;
