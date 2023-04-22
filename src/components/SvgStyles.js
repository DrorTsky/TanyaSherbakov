/** @format */

import styled from "styled-components";

import { ReactComponent as BlueBlobSVG } from "../images/blueBlob.svg";
import { ReactComponent as PinkBlobSVG } from "../images/pinkBlob.svg";
import { ReactComponent as ArrowSVG } from "../images/arrow.svg";

export const OverviewStyledImage = styled.img`
  // height: 905px;
  // width: 490px;
  width: 50%;

  @media (max-width: 768px) {
    width: 330px;
    height: 610px;
    align-self: center;
  }
`;

export const UnderstandingStyledImage = styled.img`
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

// export const MarketLogWEBPStyle = styled(MarketLogWEBP)`
//   pointer-events: none;
//   @media (max-width: 768px) {
//     height: 40%;
//   }
// `;

// export const IchiWEBPStyle = styled(IchiWEBP)`
//   pointer-events: none;
//   @media (max-width: 768px) {
//     height: 40%;
//   }
// `;

// export const KillbillsWEBPStyle = styled(KillbillsWEBP)`
//   pointer-events: none;
//   @media (max-width: 768px) {
//     height: 40%;
//   }
// `;

// export const MaynoothWEBPStyle = styled(MaynoothWEBP)`
//   pointer-events: none;
//   @media (max-width: 768px) {
//     height: 40%;
//   }
// `;

// export const DoubleBlobWEBPStyle = styled(DoubleBlobWEBP)`
//   width: 369px;
//   height: 355px;
//   @media (max-width: 768px) {
//     width: 223px;
//     height: 215px;
//     align-self: center;
//   }
// `;

// export const IsraelWEBPStyle = styled(IsraelWEBP)`
//   width: 18px;
//   height: 59px;
//   @media (max-width: 768px) {
//     width: 9px;
//     height: 31px;
//   }
// `;

export const ArrowSVGStyle = styled(ArrowSVG)`
  width: 36px;
  height: 46px;
  path {
    ${(props) => `fill: ${props.color}`}
  }
  @media (max-width: 768px) {
  }
`;

// export const AboutWEBPStyle = styled(AboutWEBP)`
//   width: 608px;
//   height: 606px;
//   @media (max-width: 768px) {
//     width: 100%;
//     height: 100%;
//   }
// `;

export const MagazinesStyledImage = styled.img`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const AfterdarkStyledImage = styled.img`
  height: 1087px;
  width: 1449px;

  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MarketlogPreviewStyledImage = styled.img`
  pointer-events: none;
  width: 1136px;
  height: 618px;
  @media (max-width: 768px) {
    width: 327.71px;
    height: 178.28px;
  }
`;

export const KillbillsPreviewStyledImage = styled.img`
  pointer-events: none;
  width: 1359.19px;
  height: 618px;
  @media (max-width: 768px) {
    width: 330px;
    height: 149px;
  }
`;

export const MaynoothPreviewStyledImage = styled.img`
  pointer-events: none;
  width: 1275px;
  height: 809px;
  @media (max-width: 768px) {
    width: 323px;
    height: 205px;
  }
`;

export const IchiPreviewStyledImage = styled.img`
  pointer-events: none;
  width: 930px;
  height: 839px;
  @media (max-width: 768px) {
    width: 330px;
    height: 298px;
  }
`;

export const DoubleBlobStyledImage = styled.img`
  width: 369px;
  height: 355px;
  @media (max-width: 768px) {
    width: 223px;
    height: 215px;
    align-self: center;
  }
`;

export const IsraelStyledImage = styled.img`
  width: 18px;
  height: 59px;
  @media (max-width: 768px) {
    width: 9px;
    height: 31px;
  }
`;

export const AboutStyledImage = styled.img`
  width: 608px;
  height: 606px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const BigPatzankiStyledImage = styled.img`
  width: 525.27px;
  height: 743px;
  @media (max-width: 768px) {
    width: 330px;
    height: 466.79px;
  }
`;

export const SmallPatzankiStyledImage = styled.img`
  width: 525.04px;
  height: 317px;
  @media (max-width: 768px) {
    width: 330px;
    height: 199.21px;
  }
`;

export const MalluableSmallStyledImage = styled.img`
  width: 696px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MalluableBigStyledImage = styled.img`
  width: 1447px;
  height: 1085.25px;
  @media (max-width: 768px) {
    width: 330px;
    height: 247.5px;
  }
`;

export const MarketlogResultBigStyledImage = styled.img`
  width: 862px;
  height: 522px;
  @media (max-width: 768px) {
    width: 330px;
    height: 200px;
  }
`;

export const MarketlogResultSmallStyledImage = styled.img`
  width: 282px;
  height: 522px;
  @media (max-width: 768px) {
    width: 108px;
    height: 200px;
  }
`;
