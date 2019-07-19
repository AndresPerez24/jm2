import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 96px 72px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
`;

export const Title = styled.div`
  color: #5f5f5f;
  font-size: 28px;
  margin-bottom: 40px;
  text-align: center;
`;

export const SubTitle = styled.div`
  color: ${({ color }) => color};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Flex = styled.div`
  align-items: center;
  display: flex;
`;

export const Description = styled.div`
  color: #5f5f5f;
  font-size: 22px;
  max-width: 255px;
`;

export const Card = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 0 21px -6px rgba(0, 0, 0, 0.5);
  padding: 48px;
  width: 49%;
`;

export const Specs = styled.div`
  border-left: 1px solid #979797;
  height: 207px;
  padding-left: 36px;
`;

export const SpecsTitle = styled.div`
  color: #838383;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

export const SpecsList = styled.ul`
  display: block;
  font-size: 19px;
  font-weight: 100;
  margin-bottom: 15px;
  padding-left: 14px;
`;

export const SpecsItem = styled.li`
  color: #838383;
  display: block;
  font-size: 19px;
  font-weight: 100;
  margin-bottom: 15px;
  position: relative;

  &:before {
    background-color: #838383;
    content: "";
    height: 1px;
    left: -13px;
    position: absolute;
    top: 10px;
    width: 5px;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  width: 50%;
`;

export const ImageItemContainer = styled.div`
  text-align: center;
  width: 300px;
`;

export const ImageItem = styled.img`
  width: 100px;
`;

export const Info = styled.div`
  max-width: 100%;
  width: 50%;
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
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
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
