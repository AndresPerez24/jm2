import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;

  .slick-dots {
    display: flex !important;
    flex-direction: column;
    bottom: 50%;
    transform: translateY(50%);
    width: initial;
    right: 80px;

    li {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
`;

export const Slide = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: ${({ backgroundPosition }) => backgroundPosition || "center"};
  background-size: cover;
  min-height: 740px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 160px 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 20px;
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 60px;
  max-width: 600px;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Button = styled.div`
  border-radius: 30px;
  border: 4px solid #fd7f38;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 5px;
  max-width: 450px;
  padding: 13px 47px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 22px 4px #fa6711;
  }
`;

export const Arrow = styled.span`
  align-items: center;
  background-color: #fb7d0b;
  border-radius: 50%;
  bottom: -40px;
  display: flex;
  height: 80px;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 80px;
`;
