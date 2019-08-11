import styled from "styled-components";
import { device } from "../../BreakPoints";

export const MainContainer = styled.div`
  padding: 40px 24px 0;

  @media ${device.laptop} {
    padding: 40px 72px 0;
  }
`;

export const Container = styled.div`
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const Title = styled.div`
  color: #5f5f5f;
  font-size: 28px;
  margin-bottom: 40px;
  text-align: center;
`;

export const SubTitle = styled.div`
  color: ${({ color }) => color};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
`;

export const Description = styled.div`
  border-bottom: 1px solid #979797;
  color: #5f5f5f;
  font-size: 16px;
  height: 93px;
  margin-bottom: 24px;
  padding-bottom: 24px;

  @media ${device.laptop} {
    font-size: 19px;
    height: 93px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 21px -6px rgba(0, 0, 0, 0.5);
  height: ${({ isSelected, height }) => (isSelected ? height : "374px")};
  margin-bottom: 24px;
  overflow: hidden;
  padding: 36px 36px 46px;
  position: relative;
  transition: 0.5s;

  @media ${device.laptop} {
    width: 32%;
    margin: 0;
  }
`;

export const TextAlignCenter = styled.div`
  text-align: center;
`;

export const Specs = styled.div`
  margin-bottom: 30px;
`;

export const SpecsTitle = styled.div`
  color: #838383;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

export const SpecsItem = styled.span`
  color: #838383;
  display: block;
  font-size: 15px;
  font-weight: 100;
  margin: 0 auto 15px;
  max-width: 240px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 135px;

  @media ${device.laptop} {
    height: 180px;
  }
`;

export const ImageItem = styled.img`
  width: 100px;
`;

export const Arrow = styled.img`
  bottom: 15px;
  cursor: pointer;
  position: absolute;
  right: 50%;
  transform: ${({ isSelected }) => (isSelected ? "translateX(50%) rotate(180deg)" : "translateX(50%) rotate(0)")};
  transition: 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  padding: 12px;
  width: 25%;
`;

export const Bold = styled.div`
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const MoreInfo = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Link = styled.a`
  align-items: center;
  background-color: rgba(251, 125, 11, 0.7);
  bottom: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s;
  z-index: 9;

  &:hover {
    opacity: 1;
  }
`;
