import styled from "styled-components";

export const MainContainer = styled.div`
  background: #e3e1e1;
  padding: 96px 72px 72px;
`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 28px;
  color: #5F5F5F;
  margin-bottom: 40px;
`;

export const SubTitle = styled.div`
  font-size: 45px;
  color: #838383;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`; 

export const Description = styled.div`
  text-align: center;
  font-size: 26px;
  color: #5F5F5F;
  max-width: 255px;
`;

export const Card = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(23, 28, 33, 0.06);
  padding: 40px 24px;
  border-radius: 20px;
`;

export const Specs = styled.div`
  border-left: 1px solid;
  padding-left: 60px;

`;

export const SpecsTitle = styled.div`
  font-size: 19px;
  color: #838383;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const SpecsItem = styled.span`
  font-size: 19px;
  max-width: 240px;
  display: block;
  margin-bottom: 15px; 
  font-weight: 100;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
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
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
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
